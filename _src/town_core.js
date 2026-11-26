/* 마을 공통: 복습 · 설명하기 미션 · 몸 미션 */
(function(){
  const g=id=>document.getElementById(id);
  const day=()=>{const n=new Date();return Math.floor((n.getTime()-n.getTimezoneOffset()*60000)/86400000);};
  let M={log:{},rvDay:0,rv:0,talk:{},bodyDay:0,body:0,open:{},newly:"",spent:0,inv:{},park:[]};
  const STEP=40,BLD=[];
  const pts=()=>Object.values(window.PTS||{}).reduce((a,b)=>a+(b||0),0);
  try{window.ARIM_PV=sessionStorage.getItem("arim-pv")==="1"||/[?&#]preview/.test(location.href);}catch(e){}
  const isOpen=k=>!!window.ARIM_PV||k==="home"||k==="h"||k==="j"||k==="p"||k==="s"||k==="k"||M.open[k]!==undefined;
  function unlock(){
    const nx=BLD.find(b=>M.open[b.key]===undefined);if(!nx)return;
    const opened=Object.values(M.open);
    if(!opened.length){M.open[nx.key]=pts();M.newly=nx.key;save();return;}
    if(pts()>=Math.max(...opened)+STEP){M.open[nx.key]=pts();M.newly=nx.key;save();}
  }

  try{const v=JSON.parse(localStorage.getItem("arim-meta")||"null");if(v)M=Object.assign(M,v);}catch(e){}
  const save=()=>{try{localStorage.setItem("arim-meta",JSON.stringify(M));}catch(e){}};
  const BANK={};
  const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const PR=["기억하고 있었네! 🌟","역시 아림 박사님! 🩺","머릿속에 쏙 들어 있었구나! 🧠","복습 대장이야! 💖"];
  const BODY=["제자리 뛰기 20번을 하고, 가슴에 손을 대서 심장이 얼마나 빨라졌는지 느껴 보기","비누로 손 씻기! '생일 축하 노래'를 두 번 부르는 동안 씻기","숨을 크게 5번 들이쉬고 내쉬면서, 배가 볼록해지는지 손으로 느껴 보기","한 발로 서서 10까지 세기. 반대쪽 발도!","내 몸에서 구부러지는 곳(관절)을 10군데 찾아서 움직여 보기","오늘 먹은 채소와 과일을 세어서 엄마 아빠에게 말하기","엄마나 아빠 가슴에 귀를 대고 심장 소리 듣기","거울을 보면서 윗니, 아랫니, 어금니까지 꼼꼼히 양치하기","물 한 컵을 천천히 마시고, 물이 몸속 어디로 가는지 말해 보기","손목에 손가락을 대고 콩닥콩닥 맥박 찾아보기","기지개를 쭉 켜고, 고양이처럼 등을 둥글게 말았다 펴기 5번","눈을 감고 한 발로 서 보기. 눈을 떴을 때와 무엇이 다른지 말하기","엄마 아빠와 손바닥 밀기 놀이 하고, 어느 근육에 힘이 들어갔는지 찾기","먼 곳(창밖)을 20초 동안 바라보며 눈 쉬게 하기"];
  function hold(btn,cb){let t=null;const stop=()=>{clearTimeout(t);t=null;btn.classList.remove("holding");};
    btn.addEventListener("pointerdown",e=>{e.preventDefault();btn.classList.add("holding");t=setTimeout(()=>{stop();SFX("stamp");cb();},1500);});
    ["pointerup","pointerleave","pointercancel"].forEach(ev=>btn.addEventListener(ev,stop));
    btn.addEventListener("contextmenu",e=>e.preventDefault());}
  function getQ(id){const b=BANK[id.split(":")[0]];return b?b(id):null;}
  function cands(){
    const t=day(),a=[];
    for(const id in M.log){const e=M.log[id];if(e.d>=t||!getQ(id))continue;
      let pr=-1;
      if(e.w>0&&(!e.r||t-e.r>=2))pr=0; else if(!e.r)pr=1; else if(t-e.r>=7&&(e.n||0)<3)pr=2;
      if(pr>=0)a.push([pr,-e.d,Math.random(),id]);}
    a.sort((x,y)=>x[0]-y[0]||x[1]-y[1]||x[2]-y[2]);
    return a.slice(0,3).map(x=>x[3]);
  }
  /* 복습 */
  let R=null;
  function openReview(){const ids=cands();if(!ids.length)return;R={ids,i:0,w:0};g("rv").classList.add("on");drawR();}
  function drawR(){
    const c=g("rvc");
    if(R.i>=R.ids.length){
      M.rvDay=day();M.rv++;save();SFX("fanfare");
      c.innerHTML=`<h2>🔁 복습 완료!</h2><div class="qq">어제까지 배운 걸 잘 기억하고 있어요.<br>복습 별 ⭐ 하나를 받았어요!</div><button class="hbtn" id="rvClose">마을로 가기 🏘️</button>`;
      g("rvClose").onclick=()=>{g("rv").classList.remove("on");R=null;homeDraw();};return;}
    const id=R.ids[R.i],it=getQ(id),q=it.q;R.w=0;
    c.innerHTML=`<h2>🔁 오늘의 복습 ${R.i+1} / ${R.ids.length}</h2><div class="lab">${it.label}에서 배웠어요</div><div class="qq">${q[0]}</div>
      <div class="opts">${shuffle([1,2,3]).map(k=>`<button class="opt" data-k="${k}">${q[k]}</button>`).join("")}</div>
      <div class="msg" id="rvmsg"></div>
      <div class="ans" id="rvans"><div class="pr"></div><p>${q[4]}</p><button class="btn" id="rvNext">${R.i+1<R.ids.length?"다음 문제 →":"복습 끝내기 ⭐"}</button></div>
      <button class="skip" id="rvSkip">나중에 하기</button>`;
    g("rvSkip").onclick=()=>{g("rv").classList.remove("on");R=null;homeDraw();};
    g("rvNext").onclick=()=>{R.i++;drawR();};
    c.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      if(b.classList.contains("wrong")||b.classList.contains("right"))return;
      const e=M.log[id];
      if(b.dataset.k==="1"){
        b.classList.add("right");c.querySelectorAll(".opt").forEach(x=>{if(x!==b)x.remove();});
        e.r=day();e.n=R.w?0:(e.n||0)+1;if(!R.w&&e.w>0)e.w--;save();
        g("rvmsg").textContent="";g("rvSkip").style.display="none";
        const a=g("rvans");a.querySelector(".pr").textContent=R.w?"이제 알았지? 다음에 또 만나자! 💪":PR[Math.floor(Math.random()*PR.length)];a.classList.add("show");
      }else{R.w++;e.w=(e.w||0)+1;save();b.classList.add("wrong");g("rvmsg").textContent="음, 다시 떠올려 볼까? 💭";}
    });
  }
  /* 설명하기 미션 */
  function openTalk(k,name,prompts,cb){
    const c=g("tkc");
    c.innerHTML=`<h2>🗣️ 설명하기 미션</h2><div class="lab">${name}</div>
      <div class="qq">오늘 배운 걸 엄마 아빠에게 선생님처럼 설명해 줘!</div>
      <ul>${prompts.map(p=>`<li>${p}</li>`).join("")}<li>제일 신기했던 건 뭐였어?</li></ul>
      <button class="holdbtn" id="tkOk"><span>👨‍👩‍👧 설명을 들은 엄마 아빠가 2초 동안 꾹 눌러 주세요</span></button>
      <button class="skip" id="tkSkip">나중에 하기</button>`;
    g("tk").classList.add("on");
    g("tkSkip").onclick=()=>g("tk").classList.remove("on");
    hold(g("tkOk"),()=>{M.talk[k]=day();save();g("tk").classList.remove("on");cb&&cb();homeDraw();});
  }

  /* 꾸미기 가게와 공원 */
  const SHOP=[["flower","🌷","꽃밭",4],["tree","🌳","나무",5],["bench","🪑","쉼터 벤치",6],["lamp","💡","가로등",8],["balloon","🚰","음수대",8],["post","🧼","손 씻는 곳",10],["bike","🚲","자전거",10],["duck","🦆","오리 연못",12],["dog","🐕","산책 강아지",15],["cat","🏃","운동 트랙",18],["fountain","⛲","분수",20],["bus","🚌","건강 검진 버스",20],["play","🛝","놀이터",25],["tent","❤️‍🩹","심장 충격기",25],["amb","🚑","구급차",30],["cafe","🩸","헌혈 버스",35],["heli","🚁","닥터 헬기",40],["wheel","🧘","체조 광장",45],["rainbow","🌈","무지개",50]];
  const SI=Object.fromEntries(SHOP.map(x=>[x[0],x])),SLOTS=15;
  [["pet_chick","병아리",25],["pet_ham","햄스터",25],["pet_dog","강아지",30],["pet_cat","고양이",30],["pet_rab","토끼",35],["pet_panda","판다",45]].forEach(p=>{SI[p[0]]=[p[0],"🐾",p[1],p[2],"pet"];});
  const bal=()=>pts()-(M.spent||0);
  const placed=id=>M.park.filter(x=>x===id).length,spare=id=>(M.inv[id]||0)-placed(id);
  const three=(ans,c)=>{const r=[ans];for(const v of shuffle(c)){if(v>=0&&!r.includes(v))r.push(v);if(r.length===3)break;}let k=1;while(r.length<3){if(!r.includes(ans+k))r.push(ans+k);k++;}return shuffle(r);};
  (window.PLN=window.PLN||{}).s="shop";(window.PBG=window.PBG||{}).s="#fff0cf";
  const sp=document.createElement("div");sp.className="place";sp.id="ps";
  sp.innerHTML=`<button class="backhome" onclick="goPlace('home')">← 🏘️ 아림 마을</button><header class="bh"><h1 style="color:#c98209">🛍️ 꾸미기 가게</h1><img class="banner" src="map/in_shop.webp" alt=""><div class="prog"><span class="rank" id="shBal"></span><span id="shHave"></span></div></header><main><div class="stamps" style="margin:0 0 10px">문제를 풀어 모은 별로 물건을 사서, 마을 공원에 놓아 봐!</div><div class="shopgrid" id="shGrid"></div><div class="stamps" style="margin:18px 0 10px">🐾 아림이를 따라다니는 친구를 데려와 봐!</div><div class="shopgrid" id="shPets"></div></main>`;
  document.body.insertBefore(sp,g("rv"));
  function drawShop(){
    g("shBal").textContent="⭐ 쓸 수 있는 별 "+bal();
    g("shHave").textContent="🎁 가진 물건 "+Object.values(M.inv).reduce((a,b)=>a+b,0)+"개";
    g("shGrid").innerHTML=SHOP.map(x=>`<button class="sitem${bal()<x[3]?" poor":""}" data-id="${x[0]}"><div class="e">${x[1]}</div><div class="n">${x[2]}</div><div class="p">⭐ ${x[3]}</div>${M.inv[x[0]]?`<div class="own">${M.inv[x[0]]}개 있음</div>`:""}</button>`).join("");
    const sb=g("sBal");if(sb)sb.textContent="⭐ 쓸 수 있는 별 "+bal();
    g("shPets").innerHTML=PETS.map(p=>{const own=M.pets&&M.pets[p[0]],act=own&&M.pet===p[0];return `<button class="sitem pet${act?" act":""}${!own&&bal()<p[2]?" poor":""}" data-id="${p[0]}"><svg viewBox="-3 -9 34 37" class="petpic">${petSvg(p[0])}</svg><div class="n">${p[1]}</div><div class="p">${act?"💗 함께 다니는 중":(own?"데려가기":"⭐ "+p[2])}</div></button>`;}).join("");
  }
  g("shPets").addEventListener("click",e=>{const b=e.target.closest(".sitem");if(!b)return;const id=b.dataset.id;
    if(M.pets[id]){M.pet=M.pet===id?"":id;save();SFX("pop");drawShop();}else buy(id);});
  g("shGrid").addEventListener("click",e=>{const b=e.target.closest(".sitem");if(b)buy(b.dataset.id);});
  function buy(id){
    const it=SI[id],P=it[3],B=bal(),c=g("tkc");g("tk").classList.add("on");
    const close=()=>{g("tk").classList.remove("on");drawShop();};
    if(B<P){
      const need=P-B,o=three(need,[need+1,need-1,need+2,P]);
      c.innerHTML=`<h2>${it[1]} ${it[2]}</h2><div class="lab">가격 ⭐ ${P} · 내 별 ⭐ ${B}</div><div class="qq">별이 모자라요!<br><b>몇 개를 더 모아야 살 수 있을까?</b></div><div class="pick3">${o.map(v=>`<button class="opt" data-v="${v}">${v}개</button>`).join("")}</div><div class="msg" id="bmsg"></div><div class="ans" id="bans"><div class="pr">맞아요! ${P} - ${B} = ${need}</div><p>별 ${need}개를 더 모으면 살 수 있어요. 문제를 풀러 가 볼까?</p><button class="btn" id="bok">알겠어요</button></div><button class="skip" id="bskip">닫기</button>`;
      c.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(b.classList.contains("wrong"))return;if(Number(b.dataset.v)===need){b.classList.add("right");g("bans").classList.add("show");g("bmsg").textContent="";}else{b.classList.add("wrong");g("bmsg").textContent="음, 다시 세어 볼까? 💭";}});
      g("bok").onclick=close;g("bskip").onclick=close;return;
    }
    let q,o,ans,ex;
    if(B<=20){ans=B-P;o=three(ans,[ans+1,ans-1,ans+2,P]).map(v=>[v+"개",v===ans]);q=`별 ${B}개 중에서 ${P}개를 쓰면<br><b>몇 개가 남을까?</b>`;ex=`${B} - ${P} = ${ans}`;}
    else if(P<10){ans=10-P;o=three(ans,[ans+1,ans-1,P]).map(v=>[v+"개",v===ans]);q=`별 10개 묶음 하나를 냈어요.<br><b>거스름 별은 몇 개일까?</b>`;ex=`10 - ${P} = ${ans}`;}
    else{const t=Math.floor(P/10),u=P%10,f=(a,b)=>"🔟 묶음 "+a+"개"+(b?" + ⭐ 낱개 "+b+"개":"");
      const cs=[[t,u]];[[u||t+1,t],[t+1,u],[t-1>0?t-1:t+2,u],[t,u+1]].forEach(x=>{if(cs.length<3&&!cs.some(y=>y[0]===x[0]&&y[1]===x[1])&&x[0]>0)cs.push(x);});
      o=shuffle(cs).map(x=>[f(x[0],x[1]),x[0]===t&&x[1]===u]);q=`별 ${P}개를 내려고 해요.<br><b>10개 묶음과 낱개를 어떻게 내면 될까?</b>`;ex=`${P}은 10이 ${t}개`+(u?`, 1이 ${u}개`:"")+"예요.";}
    c.innerHTML=`<h2>${it[1]} ${it[2]} 사기</h2><div class="lab">가격 ⭐ ${P} · 내 별 ⭐ ${B}</div><div class="qq">${q}</div><div class="opts">${o.map((x,i)=>`<button class="opt" data-i="${i}">${x[0]}</button>`).join("")}</div><div class="msg" id="bmsg"></div>
      <div class="ans" id="bans"><div class="pr">계산 성공! ${it[1]} ${it[2]}을(를) 샀어요 🎉</div><p>${ex}</p><button class="btn" id="bpark">${it[4]==="pet"?"마을에서 만나러 가기":"공원에 놓으러 가기"}</button> <button class="btn soft" id="bmore">더 구경하기</button></div><button class="skip" id="bskip">사지 않기</button>`;
    c.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      if(b.classList.contains("wrong")||g("bans").classList.contains("show"))return;
      if(o[Number(b.dataset.i)][1]){b.classList.add("right");M.spent=(M.spent||0)+P;if(it[4]==="pet"){M.pets[id]=1;M.pet=id;}else M.inv[id]=(M.inv[id]||0)+1;save();SFX("coin");g("bskip").style.display="none";g("bmsg").textContent="";g("bans").classList.add("show");drawShop();}
      else{b.classList.add("wrong");g("bmsg").textContent="음, 다시 계산해 볼까? 💭";}});
    g("bmore").onclick=close;g("bskip").onclick=close;
    g("bpark").onclick=()=>{close();goPlace("home");const pc=g("map");pc&&pc.scrollIntoView({block:"center"});};
  }
  function drawPark(){
    const pc=g("parkCard");if(!pc)return;
    while(M.park.length<SLOTS)M.park.push("");
    const have=SHOP.filter(x=>spare(x[0])>0).length;
    pc.innerHTML=`<h3>🌳 아림 공원</h3>${have?"빈 칸을 눌러서 물건을 놓아 봐!":"가게에서 물건을 사면 여기에 놓을 수 있어요."}<div class="park">${M.park.map((x,i)=>`<button class="slot${x?" full":""}" data-i="${i}">${x&&SI[x]?SI[x][1]:"＋"}</button>`).join("")}</div>`;
    pc.querySelectorAll(".slot").forEach(b=>b.onclick=()=>slot(Number(b.dataset.i)));
  }
  function slot(i){
    const c=g("tkc"),cur=M.park[i],av=SHOP.filter(x=>spare(x[0])>0);g("tk").classList.add("on");
    const close=()=>{g("tk").classList.remove("on");drawMap();};
    c.innerHTML=`<h2>🌳 공원 꾸미기</h2><div class="qq">${cur?"이 자리의 "+SI[cur][1]+" "+SI[cur][2]+"을(를) 바꿀까?":"여기에 무엇을 놓을까?"}</div>
      ${av.length?`<div class="pick3">${av.map(x=>`<button class="opt" data-id="${x[0]}">${x[1]}<div style="font-size:12px">${spare(x[0])}개</div></button>`).join("")}</div>`:`<div class="lab">놓을 수 있는 물건이 없어요.</div>`}
      ${cur?`<button class="btn soft" id="ptake">치우기 (보관함으로)</button>`:""} <button class="btn line" id="pshop">🛍️ 가게 가기</button><button class="skip" id="pskip">닫기</button>`;
    c.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{M.park[i]=b.dataset.id;save();close();});
    const tk=g("ptake");if(tk)tk.onclick=()=>{M.park[i]="";save();close();};
    g("pshop").onclick=()=>{close();goPlace("s");};g("pskip").onclick=close;
  }
  /* ===== 입체 마을 지도 · 캐릭터 · 효과음 ===== */
  /* 효과음 (파일 없이 소리 합성) */
  let AC=null;
  const tone=(f,t0,d,type,v)=>{const o=AC.createOscillator(),gn=AC.createGain();o.type=type||"triangle";o.frequency.value=f;
    gn.gain.setValueAtTime(0,AC.currentTime+t0);gn.gain.linearRampToValueAtTime(v||.16,AC.currentTime+t0+.015);gn.gain.exponentialRampToValueAtTime(.001,AC.currentTime+t0+d);
    o.connect(gn);gn.connect(AC.destination);o.start(AC.currentTime+t0);o.stop(AC.currentTime+t0+d+.03);};
  const SND={ok:()=>{tone(660,0,.12);tone(880,.1,.18);},no:()=>{tone(196,0,.16,"sine",.2);tone(165,.12,.2,"sine",.2);},
    stamp:()=>{tone(120,0,.12,"sine",.3);tone(1047,.1,.25);tone(1319,.22,.3);},fanfare:()=>{[523,659,784,1047].forEach((f,i)=>tone(f,i*.13,.22));tone(1319,.55,.4);},
    coin:()=>{tone(988,0,.08,"square",.08);tone(1319,.07,.22,"square",.08);},pop:()=>{tone(520,0,.07,"sine",.12);},tick:()=>{tone(740,0,.06,"triangle",.1);}};
  let lastS={};
  function SFX(n){if(M.mute||!SND[n])return;const now=Date.now();if(lastS[n]&&now-lastS[n]<180)return;lastS[n]=now;
    try{if(!AC){const C=window.AudioContext||window.webkitAudioContext;if(!C)return;AC=new C();}if(AC.state==="suspended")AC.resume();SND[n]();}catch(e){}}
  window.SFX=SFX;
  document.addEventListener("pointerdown",()=>{try{if(!AC){const C=window.AudioContext||window.webkitAudioContext;if(C)AC=new C();}if(AC&&AC.state==="suspended")AC.resume();}catch(e){}},{passive:true});
  function watchSounds(){
    new MutationObserver(ms=>{for(const m of ms){
      if(m.type==="attributes"){const el=m.target,was=(m.oldValue||"").split(" "),has=c=>el.classList.contains(c)&&!was.includes(c);
        if(el.classList.contains("opt")||el.classList.contains("slot")){if(has("right"))SFX("ok");else if(has("wrong"))SFX("no");}
        else if(el.classList.contains("ans")&&has("show"))SFX("ok");
        else if(el.classList.contains("room")&&has("done"))setTimeout(()=>SFX("stamp"),260);
        else if(el.classList.contains("tbtn")){if(has("used"))SFX("tick");else if(has("shake"))SFX("no");}
      }else{
        if(m.target.classList&&m.target.classList.contains("msg")&&m.target.textContent)SFX("no");
        m.addedNodes.forEach(nd=>{if(nd.nodeType===1&&(nd.classList.contains("result")||nd.querySelector&&nd.querySelector(".result")))SFX("ok");});
      }}}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:["class"],attributeOldValue:true});
  }
  function drawSnd(){const b=g("snd");if(b)b.textContent=M.mute?"🔇":"🔊";}
  g("snd").onclick=()=>{M.mute=!M.mute;save();drawSnd();if(!M.mute)SFX("pop");};

  /* 캐릭터 */
  const AV={hair:["단발","긴 머리","양갈래","포니테일","숏컷"],hc:["#2b2220","#5a3a22","#8a5a33","#c98a4b"],skin:["#ffe0c7","#f6cfa8","#e8b88f"],coat:["#ff9ec0","#7fd1b9","#8ec5ff","#b79cf0","#ffcf6b"],acc:["없음","청진기","안경","리본"]};
  if(!M.av)M.av={hair:0,hc:0,skin:0,coat:0,acc:1};
  function avatar(a){
    const H=AV.hc[a.hc],S=AV.skin[a.skin],C=AV.coat[a.coat],S2=shade(S,.88),ln=' stroke="#0000002e" stroke-width=".8"';
    let x=`<ellipse cx="31" cy="81" rx="17" ry="3.2" fill="#000" opacity=".14"/>`;
    if(a.hair===1)x+=`<rect x="14" y="10" width="32" height="40" fill="${H}"${ln}/>`;
    if(a.hair===0)x+=`<rect x="15" y="10" width="30" height="24" fill="${H}"${ln}/>`;
    if(a.hair===2)x+=`<rect x="8" y="16" width="8" height="20" fill="${H}"${ln}/><rect x="44" y="16" width="8" height="20" fill="${H}"${ln}/><rect x="11" y="13" width="5" height="4" fill="#ff6fa5"/><rect x="44" y="13" width="5" height="4" fill="#ff6fa5"/>`;
    if(a.hair===3)x+=`<rect x="43" y="1" width="9" height="21" fill="${H}"${ln}/><rect x="42" y="8" width="4" height="4" fill="#ff6fa5"/>`;
    x+=`<rect x="20.5" y="58" width="9" height="18" fill="${S}"${ln}/><rect x="30.5" y="58" width="9" height="18" fill="${S}"${ln}/><rect x="20.5" y="73" width="9" height="6" fill="#e8688a"/><rect x="30.5" y="73" width="9" height="6" fill="#e8688a"/>
      <rect x="12" y="31" width="8" height="22" fill="#fff"${ln}/><rect x="40" y="31" width="8" height="22" fill="#fff"${ln}/><rect x="12" y="50" width="8" height="5" fill="${S}"/><rect x="40" y="50" width="8" height="5" fill="${S}"/>
      <rect x="20" y="30" width="20" height="30" fill="#fff"${ln}/><rect x="26" y="30" width="8" height="30" fill="${C}"/><rect x="20" y="56" width="20" height="4" fill="${C}"/>
      <path d="M17 8L22 3H48L43 8z" fill="${H}"${ln}/><path d="M43 8L48 3V25L43 30z" fill="${S2}"${ln}/><path d="M43 8L48 3V12L43 17z" fill="${H}"/>
      <rect x="17" y="8" width="26" height="22" fill="${S}"${ln}/><rect x="17" y="8" width="26" height="7" fill="${H}"/>`;
    if(a.hair<2)x+=`<rect x="17" y="15" width="4" height="${a.hair?15:13}" fill="${H}"/><rect x="39" y="15" width="4" height="${a.hair?15:13}" fill="${H}"/>`;
    else x+=`<rect x="17" y="15" width="3.5" height="4" fill="${H}"/><rect x="39.5" y="15" width="3.5" height="4" fill="${H}"/>`;
    x+=`<rect x="22" y="18" width="5" height="5" fill="#fff"/><rect x="33" y="18" width="5" height="5" fill="#fff"/><rect x="23.7" y="19" width="3.3" height="4" fill="#3b2f2a"/><rect x="33" y="19" width="3.3" height="4" fill="#3b2f2a"/>
      <rect x="18.5" y="23.5" width="4" height="3" fill="#ffb3a0" opacity=".75"/><rect x="37.5" y="23.5" width="4" height="3" fill="#ffb3a0" opacity=".75"/>
      <rect x="27" y="25.5" width="6" height="2" fill="#d65d5a"/><rect x="25" y="24" width="2" height="2" fill="#d65d5a"/><rect x="33" y="24" width="2" height="2" fill="#d65d5a"/>`;
    if(a.acc===1)x+=`<path d="M24 31v13h12v-13" fill="none" stroke="#5f6b7a" stroke-width="2"/><rect x="27.5" y="44" width="5" height="5" fill="#9aa5b1" stroke="#5f6b7a"/>`;
    if(a.acc===2)x+=`<rect x="20.7" y="16.7" width="7.6" height="7.6" fill="none" stroke="#444" stroke-width="1.3"/><rect x="31.7" y="16.7" width="7.6" height="7.6" fill="none" stroke="#444" stroke-width="1.3"/><path d="M28.3 20.5h3.4" stroke="#444" stroke-width="1.3"/>`;
    if(a.acc===3)x+=`<rect x="31" y="2" width="5" height="7" fill="#ff6fa5"/><rect x="39" y="2" width="5" height="7" fill="#ff6fa5"/><rect x="36" y="4" width="3" height="3.5" fill="#e84d8a"/>`;
    return x;
  }
  /* 따라다니는 친구 */
  const PETS=[["pet_chick","병아리",25],["pet_ham","햄스터",25],["pet_dog","강아지",30],["pet_cat","고양이",30],["pet_rab","토끼",35],["pet_panda","판다",45]];
  const PETL={pet_dog:{b:"#c98a4b",d:"#8a5a33",m:"#f3dcc0",ear:"flop",tail:"up"},pet_cat:{b:"#f2b84b",d:"#c9862a",m:"#fff3dc",ear:"up",tail:"long"},pet_rab:{b:"#ffffff",d:"#f2c6d6",m:"",ear:"long",tail:"puff",nose:"#f08aa6"},pet_chick:{b:"#ffd94a",d:"#f2a93b",m:"",ear:"none",tail:"none",beak:1},pet_ham:{b:"#f6d7a8",d:"#e2a86b",m:"#ffffff",ear:"round",tail:"none"},pet_panda:{b:"#ffffff",d:"#33302e",m:"",ear:"round",tail:"none",patch:1}};
  if(!M.pets)M.pets={};
  function petSvg(id){
    const p=PETL[id];if(!p)return "";const ln=' stroke="#0000002e" stroke-width=".6"',wh=p.b==="#ffffff",b2=wh?"#e9e9ee":shade(p.b,.84),lg=p.patch?p.d:b2;
    let s=`<ellipse cx="14" cy="25.5" rx="12" ry="2.2" fill="#000" opacity=".14"/>`;
    if(p.tail==="up")s+=`<rect x="0.5" y="8" width="3.5" height="7" fill="${p.d}"${ln}/>`;
    if(p.tail==="long")s+=`<rect x="0" y="4" width="3" height="12" fill="${p.d}"${ln}/><rect x="0" y="4" width="6" height="3" fill="${p.d}"/>`;
    if(p.tail==="puff")s+=`<rect x="0.5" y="13" width="4" height="4" fill="#fff"${ln}/>`;
    s+=`<rect x="5" y="20" width="4.5" height="5" fill="${lg}"${ln}/><rect x="13.5" y="20" width="4.5" height="5" fill="${lg}"${ln}/><rect x="3" y="12" width="17" height="10" fill="${p.b}"${ln}/>`;
    if(p.patch)s+=`<rect x="3" y="12" width="5" height="10" fill="${p.d}"/><rect x="14" y="12" width="6" height="10" fill="${p.d}"/>`;
    if(p.beak)s+=`<rect x="6" y="14" width="8" height="5" fill="${p.d}" opacity=".7"/>`;
    if(p.ear==="long")s+=`<rect x="13" y="-7" width="4.5" height="12" fill="${p.b}"${ln}/><rect x="20" y="-7" width="4.5" height="12" fill="${p.b}"${ln}/><rect x="14.3" y="-5" width="2" height="8" fill="${p.d}"/><rect x="21.3" y="-5" width="2" height="8" fill="${p.d}"/>`;
    if(p.ear==="up")s+=`<rect x="12" y="0" width="4.5" height="5" fill="${p.d}"${ln}/><rect x="20.5" y="0" width="4.5" height="5" fill="${p.d}"${ln}/>`;
    if(p.ear==="round")s+=`<rect x="10.5" y="1" width="4.5" height="4.5" fill="${p.d}"${ln}/><rect x="22" y="1" width="4.5" height="4.5" fill="${p.d}"${ln}/>`;
    s+=`<path d="M12 4L15 1H28L25 4z" fill="${wh?"#f6f6fa":shade(p.b,1.12)}"${ln}/><path d="M25 4L28 1V13L25 16z" fill="${b2}"${ln}/><rect x="12" y="4" width="13" height="12" fill="${p.b}"${ln}/>`;
    if(p.ear==="flop")s+=`<rect x="10" y="4" width="3.5" height="9" fill="${p.d}"${ln}/><rect x="23.5" y="4" width="3.5" height="9" fill="${p.d}"${ln}/>`;
    if(p.patch)s+=`<rect x="13.3" y="7.3" width="4.4" height="4.6" fill="${p.d}"/><rect x="19.3" y="7.3" width="4.4" height="4.6" fill="${p.d}"/>`;
    if(p.m)s+=`<rect x="15.5" y="10.5" width="6" height="4.5" fill="${p.m}"/>`;
    s+=`<rect x="14.5" y="8.3" width="2" height="2.6" fill="${p.patch?"#fff":"#2b2220"}"/><rect x="20.5" y="8.3" width="2" height="2.6" fill="${p.patch?"#fff":"#2b2220"}"/>`;
    s+=p.beak?`<rect x="16.5" y="11" width="4" height="2.6" fill="#f08a3c"/>`:`<rect x="17.5" y="11.6" width="2" height="1.6" fill="${p.nose||"#2b2220"}"/>`;
    return s;
  }
  const meSvg=()=>avatar(M.av)+(M.pet&&M.pets[M.pet]?`<g class="petg" transform="translate(52,45) scale(1.25)">${petSvg(M.pet)}</g>`:"");
  function editAvatar(){
    const c=g("tkc");g("tk").classList.add("on");
    const row=(key,label,items,sw)=>`<div class="avrow"><b>${label}</b><div>${items.map((v,i)=>sw?`<button class="sw${M.av[key]===i?" on":""}" data-k="${key}" data-i="${i}" style="background:${v}"></button>`:`<button class="chipb${M.av[key]===i?" on":""}" data-k="${key}" data-i="${i}">${v}</button>`).join("")}</div></div>`;
    const draw=()=>{c.innerHTML=`<h2>🪞 내 캐릭터 꾸미기</h2><svg viewBox="0 -4 92 88" style="width:170px;display:block;margin:4px auto;overflow:visible">${meSvg()}</svg>
      ${row("hair","머리 모양",AV.hair)}${row("hc","머리 색",AV.hc,1)}${row("skin","피부",AV.skin,1)}${row("coat","옷 색",AV.coat,1)}${row("acc","꾸미기",AV.acc)}
      <button class="hbtn" id="avOk">완성!</button>`;
      c.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{M.av[b.dataset.k]=Number(b.dataset.i);save();SFX("tick");draw();});
      g("avOk").onclick=()=>{g("tk").classList.remove("on");SFX("ok");homeDraw();};};
    draw();
  }

  /* 지도 */
  const TW=96,TH=48,OX=392,OY=104,GW=9,GD=8,RX=4,RY=3;
  const MAPN={k:"공부방",h:"대학병원",p:"약국",s:"가게",e:"119",v:"동물병원",f:"식당",c:"보건소",u:"의대",l:"연구소"};
  const pill=(x,y,t,col,lock)=>{const w=t.length*15+(lock?38:22);return `<rect x="${x-w/2}" y="${y-16}" width="${w}" height="22" rx="11" fill="${lock?"#efeae4":"#fff"}" stroke="${col}" stroke-width="1.5"/><text x="${x}" y="${y}" font-size="15" text-anchor="middle" font-family="Jua,sans-serif" fill="${lock?"#8d857c":"#33302e"}">${lock?"🔒 ":""}${t}</text>`;};
  const iso=(x,y)=>[OX+(x-y)*TW/2,OY+(x+y)*TH/2];
  const P=a=>a.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
  const shade=(hex,f)=>{const n=parseInt(hex.slice(1),16),c=v=>Math.max(0,Math.min(255,Math.round(v*f)));return "rgb("+c(n>>16)+","+c(n>>8&255)+","+c(n&255)+")";};
  const FIXED={k:{name:"공부방",emoji:"📚",color:"#3d8fd6"},h:{name:"대학병원",emoji:"🏥",color:"#2fa38a"},p:{name:"약국",emoji:"💊",color:"#7c6ee6"},s:{name:"꾸미기 가게",emoji:"🛍️",color:"#e9a01f"}};
  const LOT={h:[0.5,0.35,2,78],c:[2.85,1.8,1,46],p:[0.6,1.8,1,40],u:[5.5,0.4,1,54],l:[7.5,0.4,1,44],e:[5.5,1.8,1,40],v:[7.5,1.8,1,36],f:[0.6,4.5,1,38],s:[2.6,4.5,1,34],k:[2.6,6.25,1,42]};const HOME0=[1.45,7.5];
  const info=k=>FIXED[k]||BLD.find(b=>b.key===k);
  const front=k=>{const L=LOT[k];return iso(L[0]+L[2]*.5,L[1]+1.12);};
  function box(x,y,w,h,col,m,plain){
    m=m||.1;const A=iso(x+m,y+m),B=iso(x+w-m,y+m),C=iso(x+w-m,y+1-m),D=iso(x+m,y+1-m),up=p=>[p[0],p[1]-h];
    const quad=(p0,p1,u0,u1,v0,v1)=>{const L=(u,v)=>[p0[0]+(p1[0]-p0[0])*u,p0[1]+(p1[1]-p0[1])*u-h*v];return P([L(u0,v0),L(u1,v0),L(u1,v1),L(u0,v1)]);};
    const gc=iso(x+w/2,y+.5);
    let s=`<ellipse cx="${gc[0]+6}" cy="${gc[1]+8}" rx="${40*w+8}" ry="${20+4*w}" fill="#000" opacity=".1"/>`;
    s+=`<polygon points="${P([D,C,up(C),up(D)])}" fill="${col}"/><polygon points="${P([C,B,up(B),up(C)])}" fill="${shade(col,.74)}"/>`;
    if(plain){s+=`<polygon points="${P([up(A),up(B),up(C),up(D)])}" fill="${shade(col,1.22)}" stroke="#ffffff88" stroke-width="1.5"/>`;const r0=iso(x+w/2,y+.5);return {s:s,top:[r0[0],r0[1]-h]};}
    /* 받침돌, 층 사이 띠 */
    s+=`<polygon points="${quad(D,C,0,1,0,4/h)}" fill="${shade(col,.6)}"/><polygon points="${quad(C,B,0,1,0,4/h)}" fill="${shade(col,.48)}"/>`;
    const rows=Math.max(1,Math.round(h/22)),cols=w>1?5:2,g0=h>30?.26:0;
    for(let r=0;r<rows;r++){const v0=g0+(1-g0)*(r+.2)/rows,v1=g0+(1-g0)*(r+.72)/rows;
      for(let q=0;q<cols;q++){const u=(q+.2)/cols;s+=`<polygon class="win" style="animation-delay:${(r*3+q)*.7}s" points="${quad(D,C,u,u+.6/cols,v0,v1)}" fill="#fff8d6" stroke="#ffffffcc" stroke-width="1.2"/><polygon points="${quad(D,C,u-.03/cols,u+.63/cols,v0-1.6/h,v0)}" fill="${shade(col,.7)}"/>`;}
      const rc=w>1?2:2;for(let q=0;q<rc;q++){const u=(q+.2)/rc;if(g0||r>0)s+=`<polygon points="${quad(C,B,u,u+.56/rc,v0,v1)}" fill="#fff3c4" stroke="#ffffffaa" stroke-width="1" opacity=".9"/>`;}}
    /* 1층: 가게 창과 문 */
    const dh=Math.min(.24,17/h);
    if(h>30){s+=`<polygon points="${quad(D,C,.08,.92,5/h,dh)}" fill="#cfeaff" stroke="#fff" stroke-width="1.5"/><polygon points="${quad(D,C,.04,.96,dh,dh+5/h)}" fill="#fff" stroke="${shade(col,.7)}" stroke-width="1"/>`;
      for(let q=0;q<(w>1?10:5);q+=2)s+=`<polygon points="${quad(D,C,.04+.92*q/(w>1?10:5),.04+.92*(q+1)/(w>1?10:5),dh,dh+5/h)}" fill="${shade(col,1.1)}"/>`;}
    s+=`<polygon points="${quad(C,B,.3,.7,0,dh*.96)}" fill="#fff"/><polygon points="${quad(C,B,.34,.49,0,dh*.86)}" fill="#9fd0f5"/><polygon points="${quad(C,B,.51,.66,0,dh*.86)}" fill="#9fd0f5"/><polygon points="${quad(C,B,.22,.78,dh,dh+5/h)}" fill="${shade(col,1.25)}" stroke="#fff" stroke-width="1"/>`;
    /* 지붕 난간 */
    const k=.11,A2=iso(x+m+k,y+m+k),B2=iso(x+w-m-k,y+m+k),C2=iso(x+w-m-k,y+1-m-k),D2=iso(x+m+k,y+1-m-k);
    s+=`<polygon points="${P([up(A),up(B),up(C),up(D)])}" fill="${shade(col,1.3)}" stroke="#ffffffaa" stroke-width="1.5"/><polygon points="${P([up(A2),up(B2),up(C2),up(D2)])}" fill="${shade(col,1.08)}"/>`;
    const rc=iso(x+w/2,y+.5);return {s:s,top:[rc[0],rc[1]-h]};
  }
  function roofProp(k,t,b){
    const x=t[0],y=t[1];
    if(k==="h")return `<ellipse cx="${x-30}" cy="${y+4}" rx="24" ry="12" fill="#7d8ea3" stroke="#fff" stroke-width="2"/><text x="${x-30}" y="${y+9}" font-size="15" text-anchor="middle" font-family="Jua,sans-serif" fill="#fff">H</text><path d="M${x+24} ${y+6}v-12M${x+44} ${y+2}v-12" stroke="#8a97a8" stroke-width="3"/><rect x="${x+14}" y="${y-40}" width="40" height="32" rx="7" fill="#fff" stroke="#e8504f" stroke-width="2.5"/><path d="M${x+34} ${y-34}v20M${x+24} ${y-24}h20" stroke="#e8504f" stroke-width="6"/>`;
    return `<path d="M${x-6} ${y+3}v-8M${x+6} ${y+1}v-8" stroke="#8a97a8" stroke-width="2"/><rect x="${x-13}" y="${y-28}" width="26" height="23" rx="6" fill="#fff" stroke="${b.color}" stroke-width="2"/><text x="${x}" y="${y-11}" font-size="15" text-anchor="middle">${b.emoji}</text>`;
  }
  let walking=false;
  /* 그림 지도: 배경(base) + 건물 그림(b_*) + 앞 장식(top) */
  const MW=1672,MH=941;
  const MB={s:[42,740,215,188],f:[1412,729,227,201],u:[372,-4,211,170],l:[1066,-6,198,170],h:[517,0,638,314],p:[139,19,299,295],e:[1174,39,459,295],v:[298,254,339,276],k:[19,392,300,295],c:[995,254,379,276]},MHOME=[1313,392,359,314];
  const MF={h:[833,268],p:[334,272],e:[1338,282],v:[502,490],k:[251,636],c:[1154,482],s:[278,912],f:[1392,912],u:[478,190],l:[1165,188]},MHF=[1451,628];
  const mfront=k=>MF[k]||MHF;
  const lab2=(x,y,t,col,lock)=>`<g transform="translate(${x},${y}) scale(1.9)">${pill(0,0,t,col,lock)}</g>`;
  const sign=(x,y,e,col)=>`<g transform="translate(${x},${y})"><ellipse cx="0" cy="3" rx="36" ry="10" fill="#000" opacity=".16"/><rect x="-6" y="-46" width="12" height="50" rx="3" fill="#8a5a33"/><rect x="-46" y="-108" width="92" height="66" rx="12" fill="#fff7e6" stroke="${col}" stroke-width="6"/><text x="0" y="-60" font-size="42" text-anchor="middle">${e}</text></g>`;
  function drawMap(){
    walking=false;
    const el=g("map");if(!el)return;
    const nx=BLD.find(b=>M.open[b.key]===undefined);
    let s=`<image href="map/base.webp" x="0" y="0" width="${MW}" height="${MH}" preserveAspectRatio="none"/>`;
    const items=[],lab=[],signs=[];
    Object.keys(LOT).forEach(k=>{const b=info(k);if(!b)return;const open=isOpen(k),sl=open&&!gate(k),B=MB[k],F=MF[k];let gfx,top,d;
      if(B&&open){gfx=`<image href="map/b_${k}.webp" x="${B[0]}" y="${B[1]}" width="${B[2]}" height="${B[3]}"/>`;top=[B[0]+B[2]/2,Math.max(46,B[1]+34)];d=B[1]+B[3];}
      else{gfx=sign(F[0],F[1]-28,open?b.emoji:"🚧",open?b.color:"#b9b2a9");top=[F[0],F[1]-150];d=F[1];}
      (B&&open&&k!=="s"&&k!=="f"?items:signs).push({d:d,s:`<g class="bd${sl?" slk":""}" data-b="${k}">${gfx}</g>`});
      lab.push(`<g class="bd" data-b="${k}">${lab2(top[0],top[1],MAPN[k],open&&!sl?b.color:"#b9b2a9",!open||sl)}${k==="k"&&!studied()?`<g class="bob">${lab2(top[0]+30,top[1]-50,"여기부터!","#e8504f",false)}</g>`:""}</g>`);
    });
    items.push({d:MHOME[1]+MHOME[3],s:`<g class="bd" data-home="1"><image href="map/b_home.webp" x="${MHOME[0]}" y="${MHOME[1]}" width="${MHOME[2]}" height="${MHOME[3]}"/></g>`});
    lab.push(`<g class="bd" data-home="1">${lab2(MHOME[0]+MHOME[2]/2-10,MHOME[1]+30,"우리 집","#e8688a",false)}</g>`);
    items.sort((a,b)=>a.d-b.d);
    s+=items.map(i=>i.s).join("");
    s+=`<image href="map/top.webp" x="0" y="0" width="${MW}" height="${MH}" preserveAspectRatio="none" style="pointer-events:none"/>`+signs.map(i=>i.s).join("");
    /* 공원 칸 */
    while(M.park.length<SLOTS)M.park.push("");
    const PR=[[5,640,90],[5,690,94],[5,740,90]];let pi=0;
    PR.forEach(r=>{for(let j=0;j<r[0]&&pi<SLOTS;j++,pi++){const cx=836+(j-(r[0]-1)/2)*r[2],cy=r[1],it=M.park[pi]&&SI[M.park[pi]];
      s+=`<g class="pslot" data-slot="${pi}"><ellipse cx="${cx}" cy="${cy}" rx="36" ry="22" fill="${it?"#ffffff00":"#ffffff55"}" stroke="#ffffffcc" stroke-width="2.5" stroke-dasharray="${it?"0 99":"7 6"}"/>${it?`<text x="${cx}" y="${cy+12}" font-size="50" text-anchor="middle">${it[1]}</text>`:`<text x="${cx}" y="${cy+9}" font-size="26" text-anchor="middle" fill="#ffffff">＋</text>`}</g>`;}});
    s+=lab.join("");
    const at=M.at&&LOT[M.at]&&isOpen(M.at)?mfront(M.at):MHF;
    s+=`<g id="me" style="transform:translate(${at[0]-34}px,${at[1]-91}px)"><g class="bob"><g transform="scale(1.15)">${meSvg()}</g></g></g>`;
    el.innerHTML=`<svg viewBox="0 0 ${MW} ${MH}" id="mapsvg" class="pic">${s}</svg>`;el.scrollLeft=(studied()?at[0]:MF.k[0])/MW*el.scrollWidth-el.clientWidth/2;
    el.querySelectorAll(".bd").forEach(b=>b.onclick=()=>{
      if(b.dataset.home){SFX("pop");editAvatar();return;}
      const k=b.dataset.b;
      el.querySelectorAll(`.bd[data-b="${k}"]`).forEach(x=>{x.classList.remove("hop");void x.getBoundingClientRect();x.classList.add("hop");});
      if(!isOpen(k)){SFX("no");lockInfo(k,nx);return;}
      if(!gate(k)){SFX("no");studyInfo(k);return;}
      if(walking)return;walking=true;
      SFX("pop");const f=mfront(k),from=M.at&&LOT[M.at]&&isOpen(M.at)?mfront(M.at):MHF;
      const dist=Math.hypot(f[0]-from[0],f[1]-from[1]),dur=Math.max(1.3,Math.min(3,dist/180)),me=g("me");
      me.style.transitionDuration=dur+"s";me.classList.add("walk");
      me.style.transform=`translate(${f[0]-34}px,${f[1]-91}px)`;M.at=k;save();
      setTimeout(()=>{walking=false;goPlace(k);},dur*1000+350);
    });
    el.querySelectorAll(".pslot").forEach(b=>b.onclick=()=>{SFX("pop");slot(Number(b.dataset.slot));});
    /* 마을 현황 */
    const sc=g("statCard");
    if(sc)sc.innerHTML=`<h3>📋 마을 현황</h3>`+Object.keys(LOT).filter(k=>k!=="s"&&k!=="k"&&isOpen(k)).map(k=>{const b=info(k),pr=(window.PROG||{})[k]||{n:0,t:1,r:""};
      return `<div class="strow"><span>${b.emoji} ${b.name.replace("아림 ","")}</span><span class="r">${pr.r||""}</span><span class="n">${k==="p"?"⭐ "+pr.n:pr.n+" / "+pr.t}</span></div>`;}).join("")+`<div class="strow"><span>📚 공부방</span><span class="r"></span><span class="n">💮 도장 ${M.sdn||0}개</span></div><div class="strow"><span>🛍️ 꾸미기 가게</span><span class="r"></span><span class="n">쓸 수 있는 별 ⭐ ${bal()}</span></div>`;
  }
  function lockInfo(k,nx){
    const b=info(k),c=g("tkc"),need=Math.max(1,Math.max(...Object.values(M.open).concat([0]))+STEP-pts()),next=nx&&nx.key===k;
    g("tk").classList.add("on");
    c.innerHTML=`<h2>🚧 ${b.emoji} ${b.name}</h2><div class="qq">${next?`아직 공사 중이에요.<br><b>마을 별 ⭐ ${need}개</b>를 더 모으면 문을 열어요!`:"앞 건물이 먼저 문을 연 다음에 지어져요. 차례를 기다리고 있어요."}</div>
      <button class="skip" id="lkClose">닫기</button>`;
    g("lkClose").onclick=()=>g("tk").classList.remove("on");
  }

  /* 주간 새 문제 (packs.json): 공개일이 된 문제를 각 건물·진료과의 문제 뒤에 덧붙임 */
  let PACKS=[],NEWQ=[],applied=false;const ADDR={};
  const dstr=()=>{const n=new Date();return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0");};
  const kdate=id=>{const a=id.split("-");return Number(a[1])+"월 "+Number(a[2])+"일";};
  function loadPacks(){
    return fetch("packs.json",{cache:"no-cache"}).then(r=>r.ok?r.json():null).then(j=>{
      if(j&&Array.isArray(j.packs))PACKS=j.packs.filter(p=>p&&p.id&&Array.isArray(p.q)).sort((a,b)=>a.id<b.id?-1:1);applyPacks();}).catch(()=>{});
  }
  function applyPacks(){
    if(applied)return;applied=true;const t=dstr();
    PACKS.filter(p=>p.id<=t).forEach(p=>p.q.forEach(x=>{
      if(!x||!x.r||!x.q||!Array.isArray(x.o)||x.o.length<3)return;
      const a=x.r.split(":"),A=ADDR[a[0]];if(!A)return;
      const i=A.add(a[1],[x.q,x.o[0],x.o[1],x.o[2],x.a||""]);if(i>=0)NEWQ.push({id:a[0]+":"+a[1]+":"+i,b:a[0],pack:p.id,title:p.title});}));
    Object.values(ADDR).forEach(A=>{try{A.done();}catch(e){}});
  }
  function drawWk(){
    const c=g("wkCard");if(!c)return;if(!PACKS.length){c.style.display="none";return;}
    const t=dstr(),nxt=PACKS.find(p=>p.id>t),left=NEWQ.filter(x=>!M.log[x.id]);
    c.style.display="block";
    if(left.length){
      const by={};left.forEach(x=>{by[x.b]=(by[x.b]||0)+1;});
      const last=left[left.length-1];
      c.innerHTML=`<h3>📬 새 문제가 도착했어요!</h3>이번 주제: <b style="font-family:Jua;font-weight:normal">${last.title||""}</b><br>건물에 새 문제 ${left.length}개가 들어왔어요.<div class="wkrow">${Object.keys(by).map(k=>{const b=info(k);return b?`<button class="chipb${isOpen(k)?"":" off"}" data-b="${k}">${b.emoji} ${MAPN[k]||b.name} ${by[k]}${isOpen(k)?"":" 🔒"}</button>`:"";}).join("")}</div>`;
      c.querySelectorAll("[data-b]").forEach(b=>b.onclick=()=>{if(isOpen(b.dataset.b)){SFX("pop");goPlace(b.dataset.b);}else SFX("no");});
    }else if(NEWQ.length)c.innerHTML=`<h3>📬 새 문제</h3>도착한 새 문제를 모두 풀었어요! 🎉${nxt?`<br>다음 새 문제는 ${kdate(nxt.id)}에 와요.`:""}`;
    else if(nxt)c.innerHTML=`<h3>📬 새 문제</h3>${kdate(nxt.id)} 월요일에 건물마다 새 문제가 들어와요!`;
    else c.style.display="none";
  }
/*STUDY*/
  /* 마을 화면 */
  function homeDraw(){
    const hadNew=M.newly;unlock();if(M.newly&&M.newly!==hadNew)setTimeout(()=>SFX("fanfare"),300);drawMap();drawShop();drawSnd();drawWk();
    const nb=BLD.find(b=>b.key===M.newly),nc=g("newCard");
    if(nb){nc.style.display="block";nc.innerHTML=`<h3>🎉 새 건물이 문을 열었어요!</h3><span class="big">${nb.emoji} ${nb.name}</span><button class="hbtn" id="newGo" style="background:${nb.color}">구경하러 가기</button>`;g("newGo").onclick=()=>{M.newly="";save();goPlace(nb.key);};}
    else nc.style.display="none";
    const tc=g("tpCard"),H=window.HOSP;
    if(tc&&!studied()){const a=sdGet();tc.style.display="block";tc.innerHTML=`<h3>📚 오늘의 공부</h3>공부를 마치면 병원과 마을 문이 열려요.<br><b style="font-family:Jua;font-weight:normal">${SKEY.map((s,i)=>SUB[s][0]+" "+a[i]+"/"+SNS[s]).join(" · ")}</b><button class="hbtn" id="skGoH" style="background:#3d8fd6">공부방 가기 ▶</button>`;g("skGoH").onclick=()=>{SFX("pop");M.at="k";save();goPlace("k");};}
    else if(tc&&H){const k=H.tpn();tc.style.display="block";
      tc.innerHTML=k>=H.total?`<h3>📋 오늘의 일정</h3>오늘 할 일 ${H.total}가지를 모두 마쳤어요 💮`:`<h3>📋 오늘의 일정</h3>병원에서 오늘 할 일이 기다려요. <b style="font-family:Jua;font-weight:normal">${k} / ${H.total}</b><button class="hbtn" id="tpGo" style="background:#f77fae">시작하기 ▶</button>`;
      const b=g("tpGo");if(b)b.onclick=()=>{SFX("pop");goPlace("h");H.open();};}
    const t=day(),n=cands().length,rc=g("rvCard");
    if(!studied())rc.innerHTML=`<h3>🔁 오늘의 복습</h3>🔒 공부를 마치면 복습할 수 있어요.`;
    else if(M.rvDay===t)rc.innerHTML=`<h3>🔁 오늘의 복습</h3>오늘 복습을 마쳤어요 ⭐`;
    else if(n)rc.innerHTML=`<h3>🔁 오늘의 복습</h3>전에 배운 문제 ${n}개가 기다리고 있어요.<button class="hbtn" id="rvGo">복습하러 가기</button>`;
    else rc.innerHTML=`<h3>🔁 오늘의 복습</h3>오늘 퀴즈를 풀면, 내일부터 복습 문제가 나와요.`;
    const go=g("rvGo");if(go)go.onclick=openReview;
    g("hstat").textContent="🌟 마을 별 "+pts()+" · ⭐ 복습 별 "+M.rv;
  }
  window.TOWN={preview:on=>{window.ARIM_PV=!!on;try{sessionStorage.setItem("arim-pv",on?"1":"0");}catch(e){}homeDraw();},studied:studied,gate:gate,_gen:SGEN,drawStudy:()=>drawStudy(),skipStudy:()=>{M.skip=day();save();homeDraw();},meSvg:meSvg,hasPet:()=>!!(M.pet&&M.pets[M.pet]),
    reg:(k,f)=>{BANK[k]=f;},
    solved:(id,w)=>{if(!M.log[id]){M.log[id]={d:day(),w:w||0};save();}},
    talkDone:k=>!!M.talk[k],
    hold:hold,isOpen:isOpen,nextBld:()=>{const b=BLD.find(x=>M.open[x.key]===undefined);return b?b.emoji+" "+b.name:"";},openNext:()=>{const b=BLD.find(x=>M.open[x.key]===undefined);if(b){M.open[b.key]=pts();M.newly=b.key;save();homeDraw();}},addr:(k,add,done)=>{ADDR[k]={add:add,done:done};},drawShop:()=>drawShop(),
    addBld:b=>{BLD.push(b);(window.PLN=window.PLN||{})[b.key]=b.hash;(window.PBG=window.PBG||{})[b.key]=b.bg;},
    openTalk:openTalk,
    homeDraw:homeDraw,
    start:()=>{watchSounds();homeDraw();loadPacks().then(()=>{homeDraw();if(studied()&&M.rvDay!==day()&&cands().length&&g("home").style.display!=="none"&&!g("rv").classList.contains("on"))openReview();});}
  };
})();
