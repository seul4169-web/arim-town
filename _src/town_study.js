  /* ===== 공부방: 한글 · 연산 · 영어 5문제씩 → 출근 도장 → 마을 문 열림 ===== */
  const SN=5,SUB={k:["가","한글","#f08aa6"],m:["🔢","연산","#5aa9e6"],e:["🔤","영어","#58b88f"]},SKEY=["k","m","e"];
  const sdGet=()=>{const v=M.sd||0;if(Math.floor(v/216)!==day())return [0,0,0];const r=v%216;return [Math.floor(r/36),Math.floor(r/6)%6,r%6];};
  const sdSet=a=>{M.sd=day()*216+a[0]*36+a[1]*6+a[2];save();};
  const studied=()=>!!window.ARIM_PV||M.skip===day()||sdGet().every(n=>n>=SN);
  const gate=k=>k==="home"||k==="k"||studied();
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const NO=5;/* 보기 개수 */
  const five=(ans,c)=>{const r=[ans];for(const v of shuffle(c)){if(v>=0&&!r.includes(v))r.push(v);if(r.length===NO)break;}let k=1;while(r.length<NO){if(!r.includes(ans+k))r.push(ans+k);if(r.length<NO&&ans-k>=0&&!r.includes(ans-k))r.push(ans-k);k++;}return shuffle(r);};
  const padW=(c,ws,pool)=>{const r=ws.filter(w=>w!==c);for(const v of shuffle(pool)){if(r.length>=NO-1)break;if(v!==c&&!r.includes(v))r.push(v);}return r.slice(0,NO-1);};
  /* 겹받침 낱말의 헷갈리는 잘못 쓴 말 만들기 */
  const JALT={3:[1,19,9,18],5:[4,22,6,7],6:[4,27,5,15],9:[1,8,10,11,2],10:[16,8,9,11],11:[17,8,9,10],13:[8,25,7,15,11],15:[8,27,6,13],18:[17,19,3,16,20]};
  const kAlt=w=>{const out=[];[...w].forEach((ch,i)=>{const c=ch.charCodeAt(0)-0xAC00;if(c<0||c>11171)return;const j=c%28;(JALT[j]||[]).forEach(n=>out.push(w.slice(0,i)+String.fromCharCode(0xAC00+c-j+n)+w.slice(i+1)));});return out;};
  const mkQ=(h,c,ws,why,x)=>{const o=shuffle([c].concat(ws));return Object.assign({h:h,o:o,a:o.indexOf(c),why:why},x||{});};
  window.PTS.k=(M.sdn||0)*3;
  (window.PLN=window.PLN||{}).k="study";(window.PBG=window.PBG||{}).k="#e3f1ff";

  /* --- 한글: 겹받침 --- */
  const KREAD=[["닭이 꼬끼오 울어요.","🐔",["🐶","🐱"]],["의자에 앉아요.","🪑",["🛏️","🚲"]],["그림책을 읽어요.","📖",["⚽","🎨"]],["흙에 씨앗을 심어요.","🌱",["🍞","🧦"]],["물이 보글보글 끓어요.","🫖",["🧊","🌂"]],["사과가 여덟 개 있어요.","8️⃣",["5️⃣","3️⃣"]],["달걀을 삶아요.","🥚",["🍌","🍪"]],["강아지가 손을 핥아요.","🐶",["🐟","🐦"]],["밝은 달이 떴어요.","🌕",["☔","🌈"]],["낙엽을 밟아요.","🍂",["🌊","❄️"]],["얇은 종이를 접어요.","📄",["🧱","🛏️"]],["맑은 하늘에 해가 떴어요.","☀️",["🌧️","⛄"]],["모기에 물려 팔을 긁어요.","🦟",["🐘","🐳"]],["굵은 나무에 올라가요.","🌳",["🌷","🍄"]],["넓은 바다에서 수영해요.","🌊",["🛁","🥤"]],["짧은 연필로 글씨를 써요.","✏️",["🥄","🔑"]],["감기를 앓아서 누워 있어요.","🤒",["😆","🤸"]],["싫어서 고개를 저어요.","🙅",["🙆","🙋"]],["젊은 삼촌이 자전거를 타요.","🚲",["🚀","⛵"]],["값을 내고 우유를 사요.","🥛",["🌙","🌋"]]];
  const KFILL=[["하늘이 ○○.","맑다",["막다","말다"],"☀️"],["의자에 ○○.","앉다",["안다","않다"],"🪑"],["그림책을 ○○.","읽다",["익다","일다"],"📖"],["운동장이 아주 ○○.","넓다",["널다","넙다"],"🏟️"],["몽당연필은 ○○.","짧다",["짤다","짭다"],"✏️"],["사탕이 아주 ○○.","많다",["만다","맣다"],"🍬"],["물이 보글보글 ○○.","끓다",["끌다","끅다"],"🫖"],["주머니에 돈이 ○○.","없다",["업다","엇다"],"👛"],["나는 엄마와 ○○.","닮다",["담다","달다"],"👩‍👧"],["모기 물린 곳을 ○○.","긁다",["극다","글다"],"🦟"],["보름달이 환하게 ○○.","밝다",["박다","발다"],"🌕"],["낙엽을 발로 ○○.","밟다",["밥다","발다"],"🍂"],["쓴 약은 ○○.","싫다",["실다","실타"],"💊"],["종이는 아주 ○○.","얇다",["얄다","얍다"],"📄"],["나무 줄기가 ○○.","굵다",["국다","굴다"],"🌳"],["감기를 ○○.","앓다",["알다","않다"],"🤒"],["강아지가 손을 ○○.","핥다",["할다","핧다"],"🐶"],["넘어졌지만 ○○○.","괜찮다",["괜찬다","괜찮타"],"🩹"],["달걀을 ○○.","삶다",["삼다","살다"],"🥚"],["아빠는 아직 ○○.","젊다",["점다","절다"],"👨"]];
  const KPIC=[["🐔","꼬끼오! 무엇일까?","닭",["닥","닦"]],["8️⃣","이 수를 한글로 쓰면?","여덟",["여덜","여덥"]],["🪴","화분 속에 있는 것은?","흙",["흑","흘"]],["🏷️","물건이 얼마인지 알려 주는 것은?","값",["갑","갓"]],["🥚","달걀을 물에 넣고 익히는 것은?","삶기",["삼기","살기"]],["🪑","다리가 아플 때 의자에…","앉아요",["안자요","않아요"]],["📖","책을 펴고 글자를…","읽어요",["일거요","익어요"]],["🍕","피자를 똑같이 나눈 내 것은? 내 ○","몫",["목","못"]]];
  let kUsed={};
  const kNew=(L,t)=>{let c=L.filter(x=>!kUsed[t+x[0]]);if(!c.length){L.forEach(x=>{delete kUsed[t+x[0]];});c=L;}const x=pick(c);kUsed[t+x[0]]=1;return x;};
  function kGen(i){
    const t=["r","f","p","r","f"][i%5];
    if(t==="r"){const x=kNew(KREAD,t);return mkQ(`<div class="skbig sm">${x[0]}</div><div class="skq">읽고, 맞는 그림을 골라요</div>`,x[1],padW(x[1],x[2],KREAD.flatMap(y=>[y[1]].concat(y[2]))),`<b>${x[0]}</b> ${x[1]}`,{em:1});}
    if(t==="f"){const x=kNew(KFILL,t);return mkQ(`<div class="skem">${x[3]}</div><div class="skbig sm">${x[0]}</div><div class="skq">○에 들어갈, 바르게 쓴 말은?</div>`,x[1],padW(x[1],x[2],kAlt(x[1])),`<b>${x[0].replace(/○+/,x[1])}</b>`);}
    const x=kNew(KPIC,"p");return mkQ(`<div class="skem">${x[0]}</div><div class="skq">${x[1]}</div>`,x[2],padW(x[2],x[3],kAlt(x[2])),`바르게 쓰면 <b>${x[2]}</b>`);
  }

  /* --- 연산: 덧셈 · 뺄셈 · 시계 · 규칙 --- */
  const skClock=(h,m)=>{let s=`<svg viewBox="0 0 120 120" class="skclock"><circle cx="60" cy="60" r="54" fill="#fff" stroke="#5aa9e6" stroke-width="5"/>`;
    for(let i=1;i<=12;i++){const a=i*Math.PI/6;s+=`<text x="${(60+42*Math.sin(a)).toFixed(1)}" y="${(65-42*Math.cos(a)).toFixed(1)}" font-size="14" text-anchor="middle" font-family="Jua,sans-serif" fill="#33302e">${i}</text>`;}
    const ha=(h%12+m/60)*Math.PI/6,ma=m*Math.PI/30;
    return s+`<line x1="60" y1="60" x2="${(60+24*Math.sin(ha)).toFixed(1)}" y2="${(60-24*Math.cos(ha)).toFixed(1)}" stroke="#33302e" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="60" x2="${(60+37*Math.sin(ma)).toFixed(1)}" y2="${(60-37*Math.cos(ma)).toFixed(1)}" stroke="#e8504f" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#33302e"/></svg>`;};
  const eqQ=(t,ans,why)=>mkQ(`<div class="skbig">${t}</div>`,String(ans),five(ans,[ans+1,ans-1,ans+2,ans-2,ans+10,ans-10]).filter(v=>v!==ans).map(String),why);
  const MG={
    add:()=>{const a=rnd(5,9),b=rnd(11-a,9),t=10-a;return eqQ(`${a} + ${b} = ?`,a+b,`${a} + ${t} = 10<br>10 + ${b-t} = <b>${a+b}</b>`);},
    sub:()=>{const a=rnd(11,17),b=rnd(a-9,9),t=a-10;return eqQ(`${a} − ${b} = ?`,a-b,`${a} − ${t} = 10<br>10 − ${b-t} = <b>${a-b}</b>`);},
    two:()=>{const p=Math.random()<.5,a=rnd(21,88),b=rnd(2,9),r=p?a+b:a-b;return eqQ(`${a} ${p?"+":"−"} ${b} = ?`,r,`${a} ${p?"+":"−"} ${b} = <b>${r}</b>`);},
    tens:()=>{const p=Math.random()<.5,a=rnd(2,8)*10,b=rnd(1,p?9-a/10:a/10-1)*10,r=p?a+b:a-b;return eqQ(`${a} ${p?"+":"−"} ${b} = ?`,r,`십이 ${a/10}개, ${b/10}개 → ${a} ${p?"+":"−"} ${b} = <b>${r}</b>`);},
    box:()=>{const k=rnd(0,2),x=rnd(3,9),y=rnd(3,9);
      if(k===0)return eqQ(`□ + ${y} = ${x+y}`,x,`${x+y} − ${y} = <b>${x}</b><br>${x} + ${y} = ${x+y}`);
      if(k===1)return eqQ(`${x} + □ = ${x+y}`,y,`${x+y} − ${x} = <b>${y}</b><br>${x} + ${y} = ${x+y}`);
      return eqQ(`${x+y} − □ = ${x}`,y,`${x+y} − ${x} = <b>${y}</b><br>${x+y} − ${y} = ${x}`);},
    three:()=>{if(Math.random()<.5){const a=rnd(2,7),b=rnd(2,6),c=rnd(2,6);return eqQ(`${a} + ${b} + ${c} = ?`,a+b+c,`${a} + ${b} = ${a+b}<br>${a+b} + ${c} = <b>${a+b+c}</b>`);}
      const a=rnd(12,18),b=rnd(2,5),c=rnd(2,5);return eqQ(`${a} − ${b} − ${c} = ?`,a-b-c,`${a} − ${b} = ${a-b}<br>${a-b} − ${c} = <b>${a-b-c}</b>`);},
    story:()=>{const x=pick([["🍎","사과","먹고","샀어요"],["🎈","풍선","터지고","불었어요"],["⭐","별 스티커","붙이고","받았어요"]]),a=rnd(8,14),b=rnd(2,6),c=rnd(3,7),r=a-b+c;
      return mkQ(`<div class="skem">${x[0]}</div><div class="skq big">${x[1]} ${a}개에서 ${b}개를 ${x[2]},<br>${c}개를 더 ${x[3]}. 모두 몇 개?</div>`,String(r),five(r,[r+1,r-1,r+2,r-2,a+b+c,a-b-c]).filter(v=>v!==r).map(String),`${a} − ${b} = ${a-b}<br>${a-b} + ${c} = <b>${r}</b>`);},
    clock:()=>{const h=rnd(1,12),half=Math.random()<.5,nm=(H,M2)=>H+"시"+(M2?" 30분":""),h2=h%12+1,h0=(h+10)%12+1;
      const ws=half?[nm(h2,30),nm(h,0),nm(h2,0),nm(h0,30)]:[nm(h,30),nm(h2,0),nm(h0,0),nm(h0,30)];
      return mkQ(skClock(h,half?30:0)+`<div class="skq">몇 시일까?</div>`,nm(h,half?30:0),ws,half?`긴바늘이 6 → 30분<br>짧은바늘이 ${h}와 ${h2} 사이 → <b>${h}시 30분</b>`:`긴바늘이 12 → 정각<br>짧은바늘이 ${h} → <b>${h}시</b>`);},
    pat:()=>{const d=pick([2,3,5,10,-2,-3,-5]),s=d>0?rnd(1,9):rnd(30,50),a=[0,1,2,3].map(i=>s+d*i),r=s+d*4;return mkQ(`<div class="skbig sm">${a.join(", ")}, □</div><div class="skq">□에 들어갈 수는?</div>`,String(r),five(r,[r+1,r-1,r+d,r-d,r+2,r-2]).filter(v=>v!==r).map(String),`${Math.abs(d)}씩 ${d>0?"커져요":"작아져요"} → <b>${r}</b>`);},
    big:()=>{const big=Math.random()<.5;let a=[];while(a.length<NO){const v=rnd(12,98);if(!a.includes(v))a.push(v);}const r=big?Math.max(...a):Math.min(...a),o=a.map(String);return {h:`<div class="skq big">가장 ${big?"큰":"작은"} 수는?</div>`,o:o,a:o.indexOf(String(r)),why:`십의 자리부터 비교해요 → <b>${r}</b>`};}
  };
  const mGen=i=>MG[[pick(["add","sub"]),pick(["two","tens"]),"clock",pick(["box","three","story"]),pick(["pat","big"])][i%5]]();

  /* --- 영어: 파닉스 --- */
  const say=t=>{try{const s=window.speechSynthesis;if(!s)return;s.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=.75;s.speak(u);}catch(e){}};
  const EW=[["cat","🐱","고양이"],["dog","🐶","개"],["pig","🐷","돼지"],["hen","🐔","암탉"],["bug","🐛","벌레"],["sun","☀️","해"],["bed","🛏️","침대"],["cup","🥤","컵"],["bus","🚌","버스"],["hat","🎩","모자"],["pen","🖊️","펜"],["map","🗺️","지도"],["fox","🦊","여우"],["bat","🦇","박쥐"],["box","📦","상자"],["net","🥅","그물"],["pot","🍲","냄비"],["bag","👜","가방"],["van","🚐","승합차"],["web","🕸️","거미줄"],["leg","🦵","다리"],["lip","👄","입술"],["nut","🥜","땅콩"],["mug","☕","머그잔"],["ten","🔟","열"],["pan","🍳","프라이팬"],["cap","🧢","야구 모자"],["red","🔴","빨간색"],["jet","✈️","제트기"],["rat","🐀","쥐"],["six","6️⃣","여섯"],["wet","💧","젖은"],["hot","🥵","뜨거운"],["sad","😢","슬픈"],["hug","🤗","안아 주기"]];
  const ERH=[["cat","hat","bat","rat"],["hen","pen","ten"],["bug","mug","hug"],["map","cap"],["van","pan"],["net","jet","wet"],["pot","hot"],["fox","box"],["bed","red"]];
  const ew=w=>EW.find(x=>x[0]===w),ewl=x=>`${x[0]} ${x[1]} ${x[2]}`;
  let eUsed={};
  const eNew=L=>{let c=L.filter(x=>!eUsed[x[0]]);if(c.length<1){eUsed={};c=L;}const x=pick(c);eUsed[x[0]]=1;return x;};
  const eOther=(x,n,f)=>shuffle(EW.filter(y=>y[0]!==x[0]&&y[1]!==x[1]&&(!f||f(y)))).slice(0,n);
  const spk=w=>`<button class="skspk" data-say="${w}">🔊</button>`;
  function eGen(i){
    const t=["hear","first","read","word","rhyme"][i%5];
    if(t==="rhyme"){const G=pick(ERH),a=pick(G),b=pick(G.filter(w=>w!==a)),ws=shuffle(EW.filter(y=>!G.includes(y[0])&&y[0].slice(1)!==a.slice(1))).slice(0,NO-1);
      return mkQ(`<div class="skbig en">${a} ${ew(a)[1]}</div>${spk(a)}<div class="skq">끝소리가 같은 낱말은?</div>`,`<span class="en">${b}</span> ${ew(b)[1]}`,ws.map(y=>`<span class="en">${y[0]}</span> ${y[1]}`),`<span class="en">${a}</span> – <span class="en">${b}</span><br>둘 다 <b class="en">-${a.slice(1)}</b> 소리로 끝나요.`,{snd:a,after:a+", "+b});}
    const x=eNew(EW);
    if(t==="hear")return mkQ(`${spk(x[0])}<div class="skq">잘 듣고, 맞는 그림을 골라요</div>`,x[1],eOther(x,NO-1).map(y=>y[1]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{snd:x[0],em:1,after:x[0]});
    if(t==="first"){const c=x[0][0],bad=c==="c"?"k":c==="k"?"c":"",ls=shuffle("bdpmnhtsrlfgwjv".split("").filter(l=>l!==c&&l!==bad)).slice(0,NO-1);
      return mkQ(`<div class="skem">${x[1]}</div>${spk(x[0])}<div class="skq">첫소리 글자는?</div>`,c,ls,`<b class="en">${c}</b> → <span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{snd:x[0],em:1,en:1,after:x[0]});}
    if(t==="read")return mkQ(`<div class="skbig en">${x[0]}</div><div class="skq">읽고, 맞는 그림을 골라요</div>`,x[1],eOther(x,NO-1).map(y=>y[1]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{em:1,after:x[0]});
    let ws=eOther(x,NO-1,y=>y[0][0]===x[0][0]||y[0].slice(1)===x[0].slice(1));if(ws.length<NO-1)ws=ws.concat(eOther(x,8,y=>!ws.includes(y))).slice(0,NO-1);
    return mkQ(`<div class="skem">${x[1]}</div><div class="skq">${x[2]} — 맞는 낱말은?</div>`,x[0],ws.map(y=>y[0]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{en:1,after:x[0]});
  }
  const SGEN={k:kGen,m:mGen,e:eGen};

  /* --- 화면 --- */
  const kp=document.createElement("div");kp.className="place";kp.id="pk";
  kp.innerHTML=`<button class="backhome" onclick="goPlace('home')">← 🏘️ 아림 마을</button><header class="bh"><h1 style="color:#2c6e9b">📚 공부방</h1></header><main id="skMain"></main>`;
  document.body.insertBefore(kp,g("rv"));
  let SK=null;
  const dots=(n,col)=>`<span class="skdots">${[0,1,2,3,4].map(i=>`<i style="${i<n?"background:"+col:""}"></i>`).join("")}</span>`;
  function drawStudy(){
    SK=null;const a=sdGet(),done=studied(),el=g("skMain");
    el.innerHTML=`<img class="banner" src="map/in_study.webp" alt=""><div class="skhead">${done?"💮 오늘 공부 끝! 마을 문이 열렸어요":"세 가지를 다 하면 마을 문이 열려요 🔓"}</div>
      <div class="skgrid">${SKEY.map((k,i)=>`<button class="sksub${a[i]>=SN?" ok":""}" data-s="${k}" style="--c:${SUB[k][2]}"><span class="e">${SUB[k][0]}</span><b>${SUB[k][1]}</b>${dots(a[i],SUB[k][2])}<small>${a[i]>=SN?"✅ 다 했어요":a[i]+" / "+SN}</small></button>`).join("")}</div>
      <div class="skstamp${done?" on":""}"><span>${done?"💮":"🔒"}</span>${done?"출근 도장 쾅!":"출근 도장"}</div>
      ${done?`<button class="hbtn" id="skHome" style="background:#2fa38a">🏘️ 마을로 가기</button>`:""}`;
    el.querySelectorAll(".sksub").forEach(b=>b.onclick=()=>{SFX("pop");SK={s:b.dataset.s,i:sdGet()[SKEY.indexOf(b.dataset.s)]%SN,free:sdGet()[SKEY.indexOf(b.dataset.s)]>=SN,n:0};skNext();});
    const h=g("skHome");if(h)h.onclick=()=>{SFX("pop");goPlace("home");};
  }
  function skNext(){SK.q=SGEN[SK.s](SK.i+SK.n);SK.done=false;drawQ();}
  function drawQ(){
    const el=g("skMain"),q=SK.q,S=SUB[SK.s],n=sdGet()[SKEY.indexOf(SK.s)];
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>연습</small>`:dots(n,S[2])}</div>
      <div class="skcard">${q.h}<div class="skopts${q.em?" em":""}${q.en?" en":""}">${q.o.map((o,i)=>`<button class="skopt" data-i="${i}">${o}</button>`).join("")}</div>
      <div class="skans" id="skAns"></div></div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
    el.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>say(b.dataset.say));
    if(q.snd)setTimeout(()=>say(q.snd),350);
    SK.miss=0;
    el.querySelectorAll(".skopt").forEach(b=>b.onclick=()=>{
      if(SK.done||b.classList.contains("bad"))return;const ok=Number(b.dataset.i)===q.a;
      if(!ok){SK.miss++;b.classList.add("bad");b.disabled=true;SFX("no");
        g("skAns").innerHTML=`<div class="skwhy no"><b>${SK.miss>=2?"아깝다! 한 번 더 생각해 봐 💭":"다시 찾아볼까? 🔍"}</b><p>${SK.miss>=2?"문제를 천천히 다시 읽어 봐요.":"남은 보기 중에서 맞는 것을 골라 봐요."}</p></div>`;return;}
      SK.done=true;
      el.querySelectorAll(".skopt").forEach((x,i)=>{if(i===q.a)x.classList.add("good");else if(!x.classList.contains("bad"))x.classList.add("dim");});
      SFX("ok");if(q.after)setTimeout(()=>say(q.after),500);
      const first=SK.miss===0;let fin=false;
      if(first&&!SK.free){const a=sdGet(),j=SKEY.indexOf(SK.s);a[j]=Math.min(SN,a[j]+1);sdSet(a);fin=a[j]>=SN;}
      SK.n++;
      g("skAns").innerHTML=`<div class="skwhy ok"><b>${first?"⭕ 맞았어요!":"⭕ 찾았다! 끝까지 잘 찾았어요"}</b><p>${q.why}</p>${first||SK.free?"":`<small class="skmore">한 번에 맞히면 ● 하나가 채워져요</small>`}</div><button class="hbtn" id="skGo" style="background:${S[2]}">${fin?"다 했어요 ✅":"다음 ▶"}</button>`;
      g("skGo").onclick=()=>{if(fin||(SK.free&&SK.n>=SN)){skFinish();}else skNext();};
      g("skGo").scrollIntoView({block:"nearest",behavior:"smooth"});
    });
  }
  function skFinish(){
    if(studied()&&M.sdd!==day()){M.sdd=day();M.sdn=(M.sdn||0)+1;window.PTS.k=M.sdn*3;save();SFX("fanfare");}else SFX("ok");
    drawStudy();window.scrollTo({top:0});
  }
  function studyInfo(k){
    const b=info(k),c=g("tkc"),a=sdGet();g("tk").classList.add("on");
    c.innerHTML=`<h2>🔒 ${b.emoji} ${MAPN[k]||b.name}</h2><div class="qq">📚 공부방에서 오늘 공부를 마치면 문이 열려요!<br><b style="font-family:Jua;font-weight:normal">${SKEY.map((s,i)=>SUB[s][0]+" "+a[i]+"/"+SN).join(" · ")}</b></div><button class="hbtn" id="siGo" style="background:#3d8fd6">📚 공부방 가기</button><button class="skip" id="siX">닫기</button>`;
    g("siGo").onclick=()=>{g("tk").classList.remove("on");SFX("pop");M.at="k";save();goPlace("k");};
    g("siX").onclick=()=>g("tk").classList.remove("on");
  }
