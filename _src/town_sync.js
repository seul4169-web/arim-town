/* 기기 간 이어하기: 가족 대시보드와 같은 Firebase·가족 코드를 써서 진행 기록을 맞춤 */
(function(){
  const KEYS=["arim-hospital1","arim-joriwon1","arim-pharm1","arim-meta","arim-time","arim-ctl","arim-b-e","arim-b-v","arim-b-f","arim-b-c","arim-b-u","arim-b-l"];
  const CODE_OK=/^[A-Za-z0-9]{16,64}$/;
  const S={state:"off",msg:"연결 준비 중",last:0};
  const ls=k=>{try{return localStorage.getItem(k);}catch(e){return null;}};
  const lset=(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}};
  const code=()=>{const c=ls("fd-code")||"";return CODE_OK.test(c)?c:"";};
  const readAll=()=>{const o={};KEYS.forEach(k=>{const v=ls(k);if(v){try{o[k]=JSON.parse(v);}catch(e){}}});return o;};
  const sortObj=v=>Array.isArray(v)?v.map(sortObj):(v&&typeof v==="object"?Object.keys(v).sort().reduce((o,k)=>{o[k]=sortObj(v[k]);return o;},{}):v);
  const snap=o=>JSON.stringify(KEYS.map(k=>o[k]===undefined?null:sortObj(o[k])));
  const tday=()=>{const n=new Date();return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();};
  let cfg=null,lts=Number(ls("arim-sync-ts")||0),lastSnap=snap(readAll()),dirty=false,busy=false;
  const isO=v=>v&&typeof v==="object"&&!Array.isArray(v);
  function mg(a,b,path,newer){
    if(a===undefined||a===null)return b;if(b===undefined||b===null)return a;
    if(path==="arim-time"){if(a.d!==b.d)return b.d===tday()?b:a;return {d:a.d,s:Math.max(a.s||0,b.s||0),x:Math.max(a.x||0,b.x||0)};}
    if(path==="arim-meta.mute")return a;
    if(typeof a==="number"&&typeof b==="number"){
      if(/^arim-meta\.open\./.test(path)||/^arim-meta\.log\.[^.]+\.d$/.test(path))return Math.min(a,b);
      if(path==="arim-ctl.limit")return newer?b:a;
      return Math.max(a,b);}
    if(isO(a)&&isO(b)){
      if(path==="arim-meta.av")return newer?b:a;
      const o={};new Set(Object.keys(a).concat(Object.keys(b))).forEach(k=>{o[k]=mg(a[k],b[k],path+"."+k,newer);});return o;}
    return newer?b:a;
  }
  const mergeAll=(l,r,newer)=>{const o={};KEYS.forEach(k=>{const v=mg(l[k],r[k],k,newer);if(v!==undefined&&v!==null)o[k]=v;});return o;};
  const url=()=>"https://firestore.googleapis.com/v1/projects/"+cfg.projectId+"/databases/(default)/documents/families/"+code()+"/town/state?key="+encodeURIComponent(cfg.apiKey);
  async function pull(){
    const r=await fetch(url(),{cache:"no-store"});
    if(r.status===404)return null;if(!r.ok)throw new Error(r.status===403?"권한 없음":"오류 "+r.status);
    const f=(await r.json()).fields||{};
    return {data:JSON.parse((f.data&&f.data.stringValue)||"{}"),at:Number((f.at&&f.at.integerValue)||0)};
  }
  async function push(obj){
    const r=await fetch(url(),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:{data:{stringValue:JSON.stringify(obj)},at:{integerValue:String(Date.now())}}})});
    if(!r.ok)throw new Error(r.status===403?"권한 없음":"오류 "+r.status);
  }
  async function sync(initial){
    if(!cfg){S.state="off";S.msg="이 주소에서는 쓸 수 없어요";return;}
    if(!code()){S.state="off";S.msg="가족 코드가 없어요";return;}
    if(busy)return;busy=true;
    try{
      const local=readAll(),rem=await pull();
      if(!rem){await push(local);}
      else{
        const merged=mergeAll(local,rem.data,rem.at>lts);
        if(initial&&snap(merged)!==snap(local)){
          KEYS.forEach(k=>{if(merged[k]!==undefined)lset(k,JSON.stringify(merged[k]));});
          lastSnap=snap(merged);
          let last=0;try{last=Number(sessionStorage.getItem("arim-sync-rl")||0);}catch(e){}
          if(Date.now()-last>15000){try{sessionStorage.setItem("arim-sync-rl",String(Date.now()));}catch(e){}location.reload();return;}
        }
        if(snap(merged)!==snap(rem.data))await push(merged);
      }
      dirty=false;S.state="ok";S.last=Date.now();S.msg="연결됨";
    }catch(e){S.state="err";S.msg="연결 실패: "+(e&&e.message||"인터넷 확인");}
    finally{busy=false;}
  }
  setInterval(()=>{const s=snap(readAll());if(s!==lastSnap){lastSnap=s;lts=Date.now();lset("arim-sync-ts",String(lts));dirty=true;}},5000);
  setInterval(()=>{if(dirty&&document.visibilityState==="visible")sync(false);},30000);
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&dirty)sync(false);});
  window.SYNC={status:()=>S,code:code,now:()=>sync(false),
    setCode:c=>{c=(c||"").replace(/[^A-Za-z0-9]/g,"");if(!CODE_OK.test(c))return false;lset("fd-code",c);sync(true);return true;},
    off:()=>{try{localStorage.removeItem("fd-code");}catch(e){}S.state="off";S.msg="가족 코드가 없어요";}};
  const sc=document.createElement("script");sc.src="family-dashboard/firebase-config.js";
  sc.onload=()=>{cfg=window.FD_FIREBASE&&window.FD_FIREBASE.projectId?window.FD_FIREBASE:null;sync(true);};
  sc.onerror=()=>{S.state="off";S.msg="이 주소에서는 쓸 수 없어요";};
  document.head.appendChild(sc);
})();
