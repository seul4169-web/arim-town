import re
def parts(fn):
    h=open(fn,encoding='utf8').read()
    css=h[h.index('<style>')+7:h.index('</style>')]
    body=h[h.index('<body>')+6:h.index('<script>')]
    js=h[h.index('<script>')+8:h.rindex('</script>')]
    return css,body,js
hc,hb,hj=parts('hospital.html'); jc,jb,jj=parts('joriwon.html')
def scope(js,key,other,pe="n"):
    n=js.count('const $=id=>document.getElementById(id);');assert n==1
    js=js.replace('const $=id=>document.getElementById(id);','const $=id=>root.querySelector("#"+id);')
    js=js.replace('document.querySelectorAll(','root.querySelectorAll(').replace('document.querySelector(','root.querySelector(')
    assert 'document.' not in js, re.findall(r'document\.\w+',js)
    a=re.search(r'<a class="go[^"]*" href="\$\{d\.link\[1\]\}" target="_blank" rel="noopener">\$\{d\.link\[0\]\}</a>',js);assert a
    js=js.replace(a.group(0),'<button class="go" onclick="goPlace(\'%s\')">${d.link[0]}</button>'%other)
    assert js.count('$("pRank").textContent=r;')==1
    js=js.replace('$("pRank").textContent=r;','$("pRank").textContent=r;window.onProg&&window.onProg("%s",n,D.length,r,%s);'%(key,pe))
    return '(function(root){\n'+js+'\n})(document.getElementById("p%s"));\n'%key
def body(b,key,other,label):
    a=re.search(r'<a class="go[^"]*" href="[^"]+" target="_blank" rel="noopener">([^<]+)</a>',b);assert a
    b=b.replace(a.group(0),'<button class="go" onclick="goPlace(\'%s\')">%s</button>'%(other,a.group(1)))
    bk=("h","← 🏥 대학병원 별관") if key=="j" else ("home","← 🏘️ 아림 마을")
    return '<div class="place" id="p%s">\n<button class="backhome" onclick="goPlace(\'%s\')">%s</button>\n%s</div>\n'%(key,bk[0],bk[1],b)
extra=jc[jc.index('  .item{'):jc.index('  .go{')] if '  .go{' in jc[jc.index('  .item{'):] else jc[jc.index('  .item{'):]
css=hc+extra+open('/home/claude/town_css.txt',encoding='utf8').read()+'''
  body.bg-j{background:linear-gradient(#ffe3ec 0,#fff3ea 420px,#fff9f1 421px)}
  body.bg-home{background:linear-gradient(#bfe4ff 0,#e6f5ff 55%,#d9f0cf 55.1%,#e9f7e2 100%)}
  .place{display:none}.place.on{display:block}
  .backhome{display:block;margin:10px auto 0 12px;border:none;background:#ffffffc0;border-radius:999px;padding:7px 13px;font-family:'Jua',sans-serif;font-size:15px;color:#6b625b}
  button.go{width:100%}
  #pj .sign{margin:0 20px;background:#f08aa6;font-size:25px;letter-spacing:1px;box-shadow:inset 0 -5px 0 #d96f8d}
  #pj .rooms{grid-template-columns:repeat(2,1fr)}
  #pj .room .n{font-size:16px}#pj .room .e{font-size:32px}
  #pj .bld{box-shadow:0 6px 0 #f3dcc9}
  #pj .prog span{box-shadow:0 1px 0 #f0cfd8}
  #pj .stamps{font-size:16px;line-height:1.5}
  /* 마을 */
  #home{max-width:520px;margin:0 auto;padding:18px 14px 40px;text-align:center}
  #home h1{font-family:'Jua',sans-serif;font-weight:normal;font-size:34px;margin:6px 0 2px;color:#2c6e9b}
  #home .sub{color:#5f7686;font-size:15px}
  .town{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:end;margin-top:26px}
  .tb{border:none;background:none;padding:0}
  .tb:active{transform:translateY(3px)}
  .tb .roof{font-family:'Jua',sans-serif;color:#fff;border-radius:14px 14px 0 0;padding:8px 4px;font-size:18px;margin:0 10px}
  .tb .wall{background:#fffdf9;border:3px solid #d9cfc4;border-radius:8px 8px 0 0;padding:10px 8px 0;display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
  .tb .wall span{border-radius:8px;padding:6px 0;font-size:22px}
  .tb .wall .door{grid-column:2;background:#c9a27e;border-radius:10px 10px 0 0;font-size:20px;padding:8px 0 4px}
  .tb .info{background:#fff;border-radius:0 0 16px 16px;padding:10px 6px 12px;box-shadow:0 4px 0 #b9d8ab;font-size:14px;color:#6b625b;line-height:1.5}
  .tb .info b{display:block;font-family:'Jua',sans-serif;font-weight:normal;font-size:20px;color:#33302e}
  .tb .bar{height:8px;background:#eee7e0;border-radius:99px;margin:6px 10px 4px;overflow:hidden}
  .tb .bar i{display:block;height:100%;border-radius:99px;width:0;transition:width .4s}
  .road{font-size:26px;letter-spacing:10px;margin-top:14px}
  #tchip{position:fixed;top:8px;right:8px;z-index:30;background:#ffffffe0;border-radius:999px;padding:6px 11px;font-family:'Jua',sans-serif;font-size:14px;color:#5d6b76;box-shadow:0 1px 0 #c9d6df}
  #tchip.low{background:#ffe2de;color:#c2453c}
  #lock{position:fixed;inset:0;z-index:60;display:none;background:linear-gradient(#1f2a55,#3b3f7a);color:#fff;text-align:center;padding:60px 24px;overflow:auto}
  #lock.on{display:block}
  #lock .moon{font-size:80px}
  #lock h2{font-family:'Jua',sans-serif;font-weight:normal;font-size:28px;margin:14px 0 8px}
  #lock p{font-size:18px;line-height:1.6;margin:0 0 6px;color:#e3e6ff}
  #lock .pbtn{margin-top:40px;border:1px solid #ffffff55;background:none;color:#c9cdf5;border-radius:12px;padding:8px 14px;font-size:13px}
  #lock .pbox{display:none;margin:14px auto 0;max-width:260px;background:#ffffff18;border-radius:16px;padding:14px;font-size:16px}
  #lock .pbox.on{display:block}
  #lock input{width:110px;font-size:20px;text-align:center;border-radius:10px;border:none;padding:8px;margin:8px 4px 0}
  #lock .ok{border:none;border-radius:10px;padding:9px 14px;font-size:16px;background:#ffd66b;color:#5a4300;font-family:'Jua',sans-serif}
  .soon{margin-top:18px;background:#ffffffb0;border-radius:16px;padding:10px;font-size:14px;color:#6b625b}
'''
home='''<section id="home">
  <div class="hdeco" style="font-size:26px;letter-spacing:14px">☁️🌤️☁️</div>
  <h1>🏘️ 아림 마을</h1>
  <div class="sub">건물을 누르면 걸어가요. 공원 빈 칸과 아림이네 집도 눌러 봐!</div>
  <div id="map"></div>
  <div class="hcards">
  <div class="hcard" id="newCard" style="display:none;background:#fff8d9"></div>
  <div class="hcard" id="tpCard" style="display:none;background:#fff1ef"></div>
  <div class="hcard" id="rvCard"></div>
  <div class="hcard" id="wkCard" style="display:none"></div>
  <div class="hcard" id="statCard"></div>
  </div>
  <div class="hstat" id="hstat"></div>
  <button class="skip" id="pset" style="margin-top:10px">⚙️ 보호자 설정</button>
</section>
'''
nav='''
const PL={home:"",h:"hospital",j:"joriwon",p:"pharmacy"};
window.goPlace=function(k,nohash){
  if(window.TOWN&&(!TOWN.isOpen(k)||!TOWN.gate(k)))k="home";
  document.querySelectorAll(".sheet").forEach(s=>s.classList.remove("open"));
  document.getElementById("home").style.display=k==="home"?"":"none";
  document.querySelectorAll(".place").forEach(x=>x.classList.toggle("on",x.id==="p"+k));
  const PB=(window.PBG||{})[k];if(PB)document.body.style.setProperty("--pbg",PB);
  document.body.className=k==="home"?"bg-home":(k==="j"?"bg-j":(k==="p"?"bg-p":(PB?"bg-x":"")));
  if(k==="home"&&window.TOWN)TOWN.homeDraw();
  if(k==="s"&&window.TOWN)TOWN.drawShop();
  if(k==="k"&&window.TOWN)TOWN.drawStudy();
  window.scrollTo({top:0});
  const HN=PL[k]||(window.PLN||{})[k]||"";
  if(!nohash){try{history.replaceState(null,"",HN?"#"+HN:location.pathname+location.search);}catch(e){try{location.hash=HN;}catch(e2){}}}
};
window.PTS={};window.PROG={};
window.onProg=function(k,n,t,r,p){
  PTS[k]=p||0;PROG[k]={n:n,t:t||1,r:r};
  if(k==="j"){const e=document.getElementById("joriPg");if(e)e.textContent="💮 "+n+" / "+t;}
};
/* 하루 놀이 시간 · 보호자 설정 · 원격 잠금(control.json) */
(function(){
  const EXTRA=10*60,g=id=>document.getElementById(id);
  const today=()=>{const n=new Date();return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();};
  const pd=()=>{const n=new Date();return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0");};
  let T={d:today(),s:0,x:0},pa=0,RC={};
  let CT={limit:20,lockDay:"",unlockDay:""};
  try{const v=JSON.parse(localStorage.getItem("arim-time")||"null");if(v&&v.d===today())T=v;}catch(e){}
  try{const v=JSON.parse(localStorage.getItem("arim-ctl")||"null");if(v)CT=Object.assign(CT,v);}catch(e){}
  const saveT=()=>{try{localStorage.setItem("arim-time",JSON.stringify(T));}catch(e){}};
  const saveC=()=>{try{localStorage.setItem("arim-ctl",JSON.stringify(CT));}catch(e){}};
  const limitMin=()=>RC.limitMin>0?RC.limitMin:(CT.limit||20);
  const dayLocked=()=>{const d=pd();if(CT.unlockDay===d)return false;return CT.lockDay===d||(Array.isArray(RC.lockDates)&&RC.lockDates.includes(d));};
  const left=()=>dayLocked()?0:limitMin()*60+T.x-T.s;
  function draw(){
    const dl=dayLocked(),l=Math.max(0,left()),c=g("tchip"),pre=!dl&&window.TOWN&&!TOWN.studied();
    c.textContent=window.ARIM_PV?"🔓 확인 모드 (전부 열림)":dl?"🌙 오늘은 쉬는 날":pre?"📚 공부 먼저! 그다음 "+Math.ceil(l/60)+"분":"⏰ 오늘 남은 시간 "+Math.ceil(l/60)+"분";c.classList.toggle("low",!pre&&l<=120);
    g("lockT").textContent=dl?"오늘은 아림 마을이 쉬는 날이에요":"오늘 놀이 시간이 끝났어요";
    g("lockP").textContent=dl?"마을 친구들도 오늘은 푹 쉬어요.":"오늘도 "+limitMin()+"분 동안 열심히 했어요!";
    g("pbtn").textContent=dl?"보호자용 · 오늘 잠금 풀기":"보호자용 · 10분 더 주기";
    const was=g("lock").classList.contains("on");g("lock").classList.toggle("on",l<=0&&!window.ARIM_PV);
    if(l<=0&&!was){saveT();document.querySelectorAll(".sheet,.ov").forEach(s=>s.classList.remove("open","on"));}
  }
  setInterval(()=>{
    if(document.visibilityState!=="visible")return;
    if(T.d!==today())T={d:today(),s:0,x:0};
    if(left()>0&&!window.ARIM_PV&&(!window.TOWN||TOWN.studied())){T.s++;if(T.s%5===0)saveT();}
    draw();
  },1000);
  document.addEventListener("visibilitychange",saveT);
  const ask=()=>{const a=12+Math.floor(Math.random()*8),b=3+Math.floor(Math.random()*7);pa=a*b;return a+" × "+b+" = ?";};
  g("pbtn").onclick=()=>{g("pq").textContent=ask();g("pin").value="";g("pmsg").textContent="";g("pbox").classList.add("on");};
  g("pok").onclick=()=>{if(Number(g("pin").value)===pa&&pa){pa=0;if(dayLocked()){CT.unlockDay=pd();CT.lockDay="";saveC();}else{T.x+=EXTRA;saveT();}g("pbox").classList.remove("on");draw();}else g("pmsg").textContent="답이 맞지 않아요.";};
  function fetchCtl(){fetch("control.json",{cache:"no-cache"}).then(r=>r.ok?r.json():null).then(j=>{if(j&&typeof j==="object"){RC=j;draw();}}).catch(()=>{});}
  fetchCtl();setInterval(()=>{if(document.visibilityState==="visible")fetchCtl();},120000);
  document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")fetchCtl();});
  /* 보호자 설정 */
  function panel(){
    const c=g("tkc"),used=Math.floor(T.s/60);
    c.innerHTML=`<h2>⚙️ 보호자 설정</h2><div class="lab">오늘 쓴 시간 ${used}분 · 하루 ${limitMin()}분${RC.limitMin>0?" (원격 설정)":""}</div>
      <div class="avrow"><b>하루 사용 시간</b><div>${[10,15,20,30].map(v=>`<button class="chipb${(CT.limit||20)===v?" on":""}" data-lim="${v}">${v}분</button>`).join("")}</div></div>
      <div class="avrow"><b>오늘</b><div>${dayLocked()?`<button class="chipb" id="pcUn">오늘 잠금 풀기</button>`:`<button class="chipb" id="pcLock">오늘은 그만 쓰기 (지금 잠그기)</button>`}</div></div>
      <div class="avrow"><b>확인 모드</b><div><button class="chipb${window.ARIM_PV?" on":""}" id="pcPv">${window.ARIM_PV?"확인 모드 끄기":"전부 열어서 둘러보기"}</button><div class="lab">모든 건물·방이 열리고 시간도 줄지 않아요. 앱을 닫으면 저절로 꺼져요. 아림이 기록은 그대로예요.</div></div></div>
      ${window.TOWN&&!TOWN.studied()?`<div class="avrow"><b>오늘 공부</b><div><button class="chipb" id="pcSkip">오늘은 공부 건너뛰기</button></div></div>`:""}
      ${window.TOWN&&TOWN.nextBld()?`<div class="avrow"><b>잠긴 건물</b><div><button class="chipb" id="pcOpen">${TOWN.nextBld()} 미리 열기</button></div></div>`:""}
      <div class="avrow"><b>다른 기기와 이어하기</b><div id="pcSync"></div></div>
      <button class="hbtn" id="pcClose">닫기</button>`;
    const Y=window.SYNC,ys=g("pcSync");
    if(!Y)ys.textContent="쓸 수 없어요.";
    else if(Y.code()){const s=Y.status();ys.innerHTML=`<div style="font-family:Jua,sans-serif;font-size:20px;letter-spacing:1px;background:#f4f0ff;border-radius:12px;padding:10px;text-align:center;word-break:break-all;user-select:all;-webkit-user-select:all">${Y.code().replace(/(.{4})/g,"$1 ").trim()}</div><div class="lab" style="margin-top:6px">위 가족 코드를 다른 기기에 똑같이 넣어 주세요(띄어쓰기는 빼도 돼요). ${s.msg}${s.last?" · "+new Date(s.last).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})+" 맞춤":""}</div><button class="chipb" id="syNow">지금 맞추기</button><button class="chipb" id="syOff">연결 끊기</button>`;
      g("syNow").onclick=()=>{Y.now();setTimeout(panel,1800);};g("syOff").onclick=()=>{Y.off();panel();};}
    else{ys.innerHTML=`<div class="lab">가족 대시보드에서 쓰는 가족 코드(영문·숫자 16자 이상)를 두 기기에 똑같이 넣으면 기록이 이어져요.</div><input id="syIn" type="text" maxlength="64" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:100%;font-size:16px;border-radius:12px;border:2px solid #e3d9d0;padding:9px;margin-bottom:6px"><button class="chipb" id="syGo">연결하기</button><button class="chipb" id="syNew">새 코드 만들기</button><div class="msg" id="syMsg"></div>`;
      g("syNew").onclick=()=>{const A="abcdefghjkmnpqrstuvwxyz23456789",r=new Uint32Array(16);crypto.getRandomValues(r);let c="";r.forEach(v=>{c+=A[v%A.length];});Y.setCode(c);setTimeout(panel,1500);};
      g("syGo").onclick=()=>{if(Y.setCode(g("syIn").value)){g("syMsg").textContent="연결하는 중이에요…";setTimeout(panel,2000);}else g("syMsg").textContent="영문과 숫자로 16자 이상이어야 해요.";};}
    c.querySelectorAll("[data-lim]").forEach(b=>b.onclick=()=>{CT.limit=Number(b.dataset.lim);saveC();draw();panel();});
    const lk=g("pcLock");if(lk)lk.onclick=()=>{CT.lockDay=pd();CT.unlockDay="";saveC();g("tk").classList.remove("on");draw();};
    const un=g("pcUn");if(un)un.onclick=()=>{CT.unlockDay=pd();CT.lockDay="";saveC();draw();panel();};
    g("pcClose").onclick=()=>g("tk").classList.remove("on");
    const pv=g("pcPv");if(pv)pv.onclick=()=>{TOWN.preview(!window.ARIM_PV);draw();panel();};
    const sk=g("pcSkip");if(sk)sk.onclick=()=>{TOWN.skipStudy();draw();panel();};
    const po=g("pcOpen");if(po)po.onclick=()=>{TOWN.openNext();panel();};
  }
  const ps=g("pset");
  if(ps)ps.onclick=()=>{
    const c=g("tkc");g("tk").classList.add("on");
    c.innerHTML=`<h2>⚙️ 보호자 설정</h2><div class="qq">보호자 확인 문제예요.<br><b style="font-family:Jua;font-weight:normal;font-size:24px">${ask()}</b></div><input id="pgin" type="number" inputmode="numeric" autocomplete="off" style="width:130px;font-size:22px;text-align:center;border-radius:12px;border:2px solid #e3d9d0;padding:8px"> <button class="btn" id="pgok">확인</button><div class="msg" id="pgmsg"></div><button class="skip" id="pgx">닫기</button>`;
    g("pgok").onclick=()=>{if(Number(g("pgin").value)===pa&&pa){pa=0;panel();}else g("pgmsg").textContent="답이 맞지 않아요.";};
    g("pgx").onclick=()=>g("tk").classList.remove("on");
  };
  draw();
})();
function fromHash(){const h=location.hash.replace("#","");const PN=window.PLN||{},kk=Object.keys(PN).find(x=>PN[x]===h);
  goPlace(h==="hospital"?"h":h==="joriwon"?"j":h==="pharmacy"?"p":(kk||"home"),true);}
window.addEventListener("hashchange",fromHash);
'''
css+=open('/home/claude/town_css_media.txt',encoding='utf8').read()
out='''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>아림 마을</title>
<link href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&display=swap" rel="stylesheet">
<style>'''+css+'''</style>
</head>
<body class="bg-home">
<div id="tchip"></div>
<button id="snd" aria-label="소리">🔊</button>
<div id="lock"><div class="moon">🌙</div><h2 id="lockT">오늘 놀이 시간이 끝났어요</h2><p id="lockP">오늘도 20분 동안 열심히 했어요!</p><p>이제 눈을 쉬고, 몸을 움직여 볼까? 내일 또 만나요 👋</p>
  <button class="pbtn" id="pbtn">보호자용 · 10분 더 주기</button>
  <div class="pbox" id="pbox"><div id="pq"></div><input id="pin" type="number" inputmode="numeric" autocomplete="off"><button class="ok" id="pok">확인</button><div id="pmsg" style="min-height:20px;margin-top:6px;font-size:14px"></div></div>
</div>
'''+home+body(hb,'h','j','')+body(jb,'j','h','')+open('/home/claude/town_html.txt',encoding='utf8').read()+'<script>'+open('/home/claude/town_sync.js',encoding='utf8').read()+nav+open('/home/claude/town_core.js',encoding='utf8').read().replace('/*STUDY*/',open('/home/claude/town_study.js',encoding='utf8').read())+scope(hj,'h','j','t+(st.dxn||0)+(st.mind||0)+(st.en||0)+(st.eng||0)')+scope(jj,'j','h','n+(st.cared||0)')+open('/home/claude/town_pharm.js',encoding='utf8').read()+open('/home/claude/town_bld.js',encoding='utf8').read()+'fromHash();\nTOWN.start();\n</script>\n</body>\n</html>\n'
open('town.html','w',encoding='utf8').write(out)
print(len(out))
