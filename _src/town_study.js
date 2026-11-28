  /* ===== 공부방: 한글 · 연산 · 영어 5문제씩 → 출근 도장 → 마을 문 열림 ===== */
  const SNS={k:5,m:5,e:5,b:3},SUB={k:["가","한글","#f08aa6"],m:["🔢","연산","#5aa9e6"],e:["🔤","영어","#58b88f"],b:["📖","독서","#e0973c"]},SKEY=["k","m","e","b"];
  const sbGet=()=>{const v=M.sb||0;return Math.floor(v/10)===day()?v%10:0;};
  const sdGet=()=>{const v=M.sd||0;if(Math.floor(v/216)!==day())return [0,0,0,sbGet()];const r=v%216;return [Math.floor(r/36),Math.floor(r/6)%6,r%6,sbGet()];};
  const sdSet=a=>{M.sd=day()*216+Math.min(5,a[0])*36+Math.min(5,a[1])*6+Math.min(5,a[2]);M.sb=day()*10+Math.min(9,a[3]||0);save();};
  const studied=()=>!!window.ARIM_PV||M.skip===day()||sdGet().every((n,i)=>n>=SNS[SKEY[i]]||(SKEY[i]==="b"&&n===0&&!bToday()));
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
  /* --- 한글: 낱자 알기 + 따라 쓰기(획순·꺾어쓰기) --- */
  const CHO="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",JUNG="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",JONG=" ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";
  const hDec=s=>{const c=s.charCodeAt(0)-0xAC00;return [CHO[Math.floor(c/588)],JUNG[Math.floor(c%588/28)],JONG[c%28].trim()];};
  const hCom=(a,b,c)=>String.fromCharCode(0xAC00+CHO.indexOf(a)*588+JUNG.indexOf(b)*28+(c?JONG.indexOf(c):0));
  const JA="ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",MO="ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ";
  const JNAME={"ㄱ":"기역","ㄴ":"니은","ㄷ":"디귿","ㄹ":"리을","ㅁ":"미음","ㅂ":"비읍","ㅅ":"시옷","ㅇ":"이응","ㅈ":"지읒","ㅊ":"치읓","ㅋ":"키읔","ㅌ":"티읕","ㅍ":"피읖","ㅎ":"히읗"};
  /* 모양·소리가 비슷해서 헷갈리는 낱자 */
  const JSIM={"ㄱ":"ㅋㄴㄷㄲ","ㄴ":"ㄷㄹㄱㅁ","ㄷ":"ㅌㄴㄹㅁ","ㄹ":"ㄷㄴㅌㅁ","ㅁ":"ㅂㅇㄷㅍ","ㅂ":"ㅍㅁㅃㄷ","ㅅ":"ㅈㅊㅆㅎ","ㅇ":"ㅎㅁㄴㅂ","ㅈ":"ㅊㅅㅉㄷ","ㅊ":"ㅈㅅㅎㅋ","ㅋ":"ㄱㅌㄲㅎ","ㅌ":"ㄷㅋㄹㅍ","ㅍ":"ㅂㅁㅌㅎ","ㅎ":"ㅇㅊㅅㅋ","ㄲ":"ㄱㅋㄸㅆ","ㅆ":"ㅅㅈㅉㄲ",
    "ㅏ":"ㅓㅑㅗㅐ","ㅑ":"ㅏㅕㅛㅒ","ㅓ":"ㅏㅕㅜㅔ","ㅕ":"ㅓㅑㅠㅖ","ㅗ":"ㅜㅛㅏㅚ","ㅛ":"ㅗㅠㅑㅜ","ㅜ":"ㅗㅠㅓㅡ","ㅠ":"ㅜㅛㅕㅡ","ㅡ":"ㅣㅜㅗㅢ","ㅣ":"ㅡㅏㅓㅟ","ㅐ":"ㅔㅏㅒㅓ","ㅔ":"ㅐㅓㅖㅏ"};
  const simOf=j=>(JSIM[j]||"").split("");
  /* 첫소리 낱말 (그림, 낱말) */
  const JW={"ㄱ":[["🚂","기차"],["🐋","고래"],["🕷️","거미"]],"ㄴ":[["🦋","나비"],["🌳","나무"],["🐢","느림보"]],"ㄷ":[["🐷","돼지"],["🌉","다리"],["🐿️","다람쥐"]],"ㄹ":[["🍜","라면"],["🤖","로봇"],["🍋","레몬"]],
    "ㅁ":[["🧢","모자"],["🐴","말"],["🍈","멜론"]],"ㅂ":[["🍌","바나나"],["🚌","버스"],["⭐","별"]],"ㅅ":[["🍎","사과"],["🍉","수박"],["🦁","사자"]],"ㅇ":[["🦆","오리"],["🥛","우유"],["🦊","여우"]],
    "ㅈ":[["🚗","자동차"],["💉","주사"],["🌏","지구"]],"ㅊ":[["🧀","치즈"],["🍒","체리"],["🪥","칫솔"]],"ㅋ":[["🐘","코끼리"],["🥝","키위"],["🍰","케이크"]],"ㅌ":[["🐰","토끼"],["🍅","토마토"],["🚚","트럭"]],
    "ㅍ":[["🍇","포도"],["🍕","피자"],["🐧","펭귄"]],"ㅎ":[["🦛","하마"],["🐯","호랑이"],["☀️","해"]]};
  const JSYL=["곰","달","밤","손","집","눈","문","강","별","물","공","발","숲","옷","산","귤","빵","콩","책","팔","해","소","코","배","무","새","게","오이","나비","포도"].map(w=>w[0]);
  const jo=(w,a,b)=>w+((w.charCodeAt(w.length-1)-0xAC00)%28?a:b);
  const fmtJ=a=>a.filter(Boolean).join(" ");
  function jVar(p,n){ /* 낱자 하나를 비슷한 낱자로 바꾼 틀린 조합들 */
    const out=[];p.forEach((j,i)=>{if(!j)return;simOf(j).forEach(s=>{if(i===0&&CHO.indexOf(s)<0)return;if(i===1&&JUNG.indexOf(s)<0)return;if(i===2&&JONG.indexOf(s)<1)return;const q=p.slice();q[i]=s;out.push(q);});});
    return shuffle(out).slice(0,n);}
  function jGen0(t){
    if(t==="split"||t==="join"){const s=pick(JSYL),p=hDec(s),vs=jVar(p,8);
      if(t==="split"){const c=fmtJ(p);return mkQ(`<div class="skbig">${s}</div><div class="skq">'${jo(s,"'을","'를")} 낱자로 나누면?</div>`,c,padW(c,vs.map(fmtJ),[]),`<b>${s}</b> = ${p.filter(Boolean).join(" + ")}`);}
      return mkQ(`<div class="skbig">${p.filter(Boolean).join(" + ")}</div><div class="skq">낱자를 합치면 어떤 글자가 될까?</div>`,s,padW(s,vs.map(q=>hCom(q[0],q[1],q[2])),[]),`${p.filter(Boolean).join(" + ")} = <b>${s}</b>`,{});}
    if(t==="first"){const j=pick(JA.split("")),x=pick(JW[j]),others=simOf(j).filter(k=>JW[k]).concat(shuffle(JA.split("").filter(k=>k!==j&&!simOf(j).includes(k))));
      const ws=[];others.forEach(k=>{if(ws.length<4){const y=pick(JW[k]);ws.push(y[0]+" "+y[1]);}});
      return mkQ(`<div class="skbig">${j}</div><div class="skq">'${j}' 소리로 시작하는 낱말은?</div>`,x[0]+" "+x[1],ws,`<b>${jo(x[1],"</b>은","</b>는")} '${j}'로 시작해요: ${x[1][0]} = ${fmtJ(hDec(x[1][0]))}`);}
    if(t==="name"){const j=pick(JA.split("")),c=JNAME[j],ws=simOf(j).filter(k=>JNAME[k]).map(k=>JNAME[k]);
      return mkQ(`<div class="skbig">${j}</div><div class="skq">이 낱자의 이름은?</div>`,c,padW(c,ws,Object.values(JNAME)),`<b>${j}</b>의 이름은 <b>${c}</b>예요.`);}
    const s=pick(JSYL.filter(x=>hDec(x)[2])),p=hDec(s),c=p[2];
    return mkQ(`<div class="skbig">${s}</div><div class="skq">'${s}'의 받침(아래에 받친 낱자)은?</div>`,c,padW(c,simOf(c).filter(k=>JA.includes(k)),JA.split("")),`<b>${s}</b> = ${p.join(" + ")} → 받침은 <b>${c}</b>`);
  }
  /* 따라 쓰기: 낱자 획 (100칸 안의 좌표, 시작점→끝점 방향). 꺾어쓰기 획은 점이 3개 이상인 한 획 */
  const ring=(cx,cy,r)=>Array.from({length:25},(_,k)=>{const t=k/24*Math.PI*2;return [cx-r*Math.sin(t),cy-r*Math.cos(t)];});
  const WS={
    "ㄱ":[[[20,22],[78,22],[78,82]]],
    "ㄴ":[[[24,18],[24,78],[82,78]]],
    "ㄷ":[[[22,22],[80,22]],[[22,22],[22,78],[82,78]]],
    "ㄹ":[[[22,18],[78,18],[78,48]],[[22,48],[78,48]],[[22,48],[22,82],[82,82]]],
    "ㅁ":[[[22,20],[22,80]],[[22,20],[78,20],[78,80]],[[22,80],[78,80]]],
    "ㅂ":[[[24,16],[24,82]],[[76,16],[76,82]],[[24,48],[76,48]],[[24,82],[76,82]]],
    "ㅅ":[[[50,16],[20,84]],[[46,50],[82,84]]],
    "ㅇ":[ring(50,50,30)],
    "ㅈ":[[[20,20],[76,20],[22,84]],[[48,50],[82,84]]],
    "ㅊ":[[[50,6],[50,20]],[[20,28],[76,28],[22,88]],[[48,58],[82,88]]],
    "ㅋ":[[[20,20],[78,20],[78,82]],[[20,50],[78,50]]],
    "ㅌ":[[[22,18],[80,18]],[[22,48],[80,48]],[[22,18],[22,82],[82,82]]],
    "ㅍ":[[[18,20],[82,20]],[[36,20],[36,80]],[[64,20],[64,80]],[[18,80],[82,80]]],
    "ㅎ":[[[50,6],[50,18]],[[22,26],[78,26]],ring(50,62,22)],
    "ㅏ":[[[40,10],[40,90]],[[40,50],[70,50]]],
    "ㅑ":[[[38,10],[38,90]],[[38,38],[68,38]],[[38,62],[68,62]]],
    "ㅓ":[[[30,50],[60,50]],[[60,10],[60,90]]],
    "ㅕ":[[[30,38],[60,38]],[[30,62],[60,62]],[[60,10],[60,90]]],
    "ㅗ":[[[50,30],[50,60]],[[10,60],[90,60]]],
    "ㅛ":[[[38,30],[38,60]],[[62,30],[62,60]],[[10,60],[90,60]]],
    "ㅜ":[[[10,40],[90,40]],[[50,40],[50,72]]],
    "ㅠ":[[[10,40],[90,40]],[[38,40],[38,72]],[[62,40],[62,72]]],
    "ㅐ":[[[30,10],[30,90]],[[30,50],[52,50]],[[62,10],[62,90]]],
    "ㅡ":[[[10,50],[90,50]]],
    "ㅣ":[[[50,10],[50,90]]]};
  /* 낱자를 글자 안의 자리(r=[x1,y1,x2,y2])에 맞춰 넣기. 자음은 모양 비율 유지, 모음은 자리에 맞게 늘림 */
  const fit=(S,r,keep)=>{const P=S.flat(),xs=P.map(p=>p[0]),ys=P.map(p=>p[1]),x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys),w=x1-x0,h=y1-y0,W=r[2]-r[0],H=r[3]-r[1];
    let sx=w?W/w:0,sy=h?H/h:0;if(keep){const k=Math.min(w?W/w:1e9,h?H/h:1e9);sx=sy=k;}if(!w)sx=sy;if(!h)sy=sx;
    const cx=(r[0]+r[2])/2,cy=(r[1]+r[3])/2,mx=(x0+x1)/2,my=(y0+y1)/2;
    return S.map(st=>st.map(([x,y])=>[cx+(x-mx)*sx,cy+(y-my)*sy]));};
  function wStrokes(ch){
    if(WS[ch])return WS[ch];
    const [c,j,k]=hDec(ch),vert="ㅏㅐㅑㅓㅕㅣ".includes(j),down="ㅗㅛ".includes(j)?0:"ㅜㅠ".includes(j)?1:2;let R;
    if(vert)R=k?[[10,8,46,46],[54,4,82,60],[26,66,74,94]]:[[8,22,48,78],[56,6,84,94]];
    else if(!k)R=[[28,6,72,44],[[8,50,92,70],[8,54,92,90],[8,64,92,64]][down]];
    else R=[[30,4,70,30],[[8,34,92,50],[8,36,92,58],[8,44,92,44]][down],[28,64,72,94]];
    return fit(WS[c],R[0],1).concat(fit(WS[j],R[1]),k?fit(WS[k],R[2],1):[]);
  }
  const WCUR="ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ".split("").concat("가 나 다 라 마 바 사 아 자 차 카 타 파 하 고 누 도 루 모 부 소 우 조 추 코 투 포 후 곰 눈 달 물 밤 손 집 책 콩 팥 강 별".split(" "));
  const WHARD="ㄱㄴㄷㄹㅁㅈㅊㅋㅌㅎ".split("");
  const wItem=()=>{const n=M.wi||0;return n<WCUR.length?WCUR[n]:WHARD[(n-WCUR.length)%WHARD.length];};
  const wNote=ch=>{const S=wStrokes(ch),bend=S.filter(s=>s.length===3).length;return `<b>${ch}</b> → ${S.length}획이에요${bend?` · 꺾어 쓰는 획 ${bend}개`:""}`;};
  /* --- 한글 단계: 1 낱자 → 2 자음+모음 → 3 받침 글자 섞기 → 4 받아쓰기 (겹받침은 당분간 뺌) --- */
  const HST=[0,60,140,240];/* 단계가 바뀌는 누적 완료 수 */
  const hSt=()=>{const n=M.hp||0;return n>=HST[3]?4:n>=HST[2]?3:n>=HST[1]?2:1;};
  const hpUp=()=>{if(SK.s==="k"&&!SK.free){M.hp=(M.hp||0)+1;save();}};
  const JB="ㄱㄴㄹㅁㅂㅅㅇ";/* 받침은 쉬운 홑받침만 */
  const basic=j=>JA.includes(j)||MO.includes(j);
  const sylCV=()=>hCom(pick(JA.split("")),pick(MO.split("")));
  const sylCVC=()=>hCom(pick(JA.split("")),pick("ㅏㅓㅗㅜㅡㅣ".split("")),pick(JB.split("")));
  const sylAt=st=>st<=2?sylCV():Math.random()<.5?sylCV():sylCVC();
  const bVar=(p,n)=>jVar(p,20).filter(q=>q.every(j=>!j||basic(j))&&(!q[2]||JB.includes(q[2]))).slice(0,n);
  function hQuiz(t,st){
    if(t==="name"||t==="first")return jGen0(t);
    if(t==="cfind"||t==="vfind"){const c=pick(JA.split("")),v=pick(MO.split("")),s=hCom(c,v);
      const ws=(t==="cfind"?simOf(c).filter(k=>JA.includes(k)).map(k=>hCom(k,v)):simOf(v).filter(k=>MO.includes(k)).map(k=>hCom(c,k)));
      const pool=t==="cfind"?JA.split("").filter(k=>k!==c).map(k=>hCom(k,v)):MO.split("").filter(k=>k!==v).map(k=>hCom(c,k));
      const j=t==="cfind"?c:v;return mkQ(`<div class="skbig">${j}</div><div class="skq">'${j}'${t==="cfind"?"(이)가":"가"} 들어 있는 글자는?</div>`,s,padW(s,ws,pool),`<b>${s}</b> = ${c} + ${v}`);}
    const s=t==="jong"?sylCVC():sylAt(st),p=hDec(s),vs=bVar(p,8);
    if(t==="split"){const c=fmtJ(p);return mkQ(`<div class="skbig">${s}</div><div class="skq">'${jo(s,"'을","'를")} 낱자로 나누면?</div>`,c,padW(c,vs.map(fmtJ),[]),`<b>${s}</b> = ${p.filter(Boolean).join(" + ")}`);}
    if(t==="join")return mkQ(`<div class="skbig">${p.filter(Boolean).join(" + ")}</div><div class="skq">낱자를 합치면 어떤 글자가 될까?</div>`,s,padW(s,vs.map(q=>hCom(q[0],q[1],q[2])),[]),`${p.filter(Boolean).join(" + ")} = <b>${s}</b>`,{});
    const c=p[2];return mkQ(`<div class="skbig">${s}</div><div class="skq">'${s}'의 받침(아래에 받친 낱자)은?</div>`,c,padW(c,simOf(c).filter(k=>JA.includes(k)),JA.split("")),`<b>${s}</b> = ${p.join(" + ")} → 받침은 <b>${c}</b>`);
  }
  const J24=JA+MO;
  function wPick(st){
    if(st===1){const n=M.wi||0;return J24[n%J24.length];}
    if(st===4&&Math.random()<.3)return pick(WHARD);
    return sylAt(st);
  }
  /* 받아쓰기 낱말 (소리와 글자가 같은 낱말, 쌍자음·겹받침·ㅐㅔ 없음) */
  const DW=[["바다","🌊"],["나비","🦋"],["모자","🧢"],["사자","🦁"],["우유","🥛"],["오리","🦆"],["기차","🚂"],["포도","🍇"],["하마","🦛"],["고래","🐋"],["거미","🕷️"],["치마","👗"],["피자","🍕"],["구두","👞"],["나무","🌳"],["가지","🍆"],["주스","🧃"],["두부","🧈"],["모기","🦟"],["호두","🌰"],
    ["곰","🐻"],["달","🌙"],["별","⭐"],["문","🚪"],["손","✋"],["발","🦶"],["공","⚽"],["집","🏠"],["눈","⛄"],["물","💧"],["산","⛰️"],["수박","🍉"],["사탕","🍬"],["자석","🧲"],["가방","🎒"],["하늘","🌌"],["구름","☁️"],["바람","🌬️"],["사슴","🦌"],["호박","🎃"],["오징어","🦑"],["거북","🐢"],["고양이","🐱"],["연필","✏️"],["시소","🛝"]];
  const sayKo=t=>{try{const s=window.speechSynthesis;if(!s)return;s.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="ko-KR";u.rate=.7;s.speak(u);}catch(e){}};
  let dUsed={};
  const dNew=()=>{let c=DW.filter(x=>!dUsed[x[0]]);if(!c.length){dUsed={};c=DW;}const x=pick(c);dUsed[x[0]]=1;return x;};
  const HPLAN={1:["w","name","w",["cfind","vfind"],"first"],2:["w","join","w","split",["cfind","vfind"]],3:["w","join","w","split","jong"],4:["d","w","d",["join","split","jong"],"d"]};
  function kGen(i){
    const st=hSt(),t0=HPLAN[st][i%5],t=Array.isArray(t0)?t0[(Math.floor(i/5)+day())%t0.length]:t0;
    if(t==="w")return {w:1,ch:wPick(st)};
    if(t==="d")return {dict:1,d:dNew()};
    return hQuiz(t,st);
  }
  function kGenOld(i){
    const t=["r","f","p"][day()%3];
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
  /* 조금 더 어려운 낱말: 겹자음(fr·tr·sn…), 두 글자 소리(sh·ch·th), 긴 모음, 몸·병원 낱말 */
  const EW2=[["frog","🐸","개구리"],["ship","🚢","배"],["fish","🐟","물고기"],["duck","🦆","오리"],["crab","🦀","게"],["snake","🐍","뱀"],["clock","⏰","시계"],["train","🚆","기차"],["truck","🚚","트럭"],["sheep","🐑","양"],["chick","🐤","병아리"],["chair","🪑","의자"],["cheese","🧀","치즈"],["bread","🍞","빵"],
    ["tooth","🦷","이"],["brush","🪥","칫솔"],["drum","🥁","북"],["star","⭐","별"],["moon","🌙","달"],["tree","🌳","나무"],["kite","🪁","연"],["cake","🎂","케이크"],["bike","🚲","자전거"],["rose","🌹","장미"],["boat","⛵","돛단배"],["goat","🐐","염소"],["rain","🌧️","비"],["snail","🐌","달팽이"],
    ["whale","🐋","고래"],["shark","🦈","상어"],["sock","🧦","양말"],["milk","🥛","우유"],["lamp","💡","전등"],["tent","⛺","텐트"],["gift","🎁","선물"],["hand","✋","손"],["nest","🪺","둥지"],["bone","🦴","뼈"],["pill","💊","알약"],["nose","👃","코"],["ear","👂","귀"],["eye","👁️","눈"],
    ["heart","🫀","심장"],["brain","🧠","뇌"],["foot","🦶","발"],["sneeze","🤧","재채기"],["thumb","👍","엄지"],["queen","👸","여왕"],["frame","🖼️","액자"],["flag","🚩","깃발"],["plum","🍑","자두"],["grape","🍇","포도"],["skate","⛸️","스케이트"],["smile","😊","미소"],["spoon","🥄","숟가락"],["three","3️⃣","셋"]];
  EW.push(...EW2);
  const ERH=[["cat","hat","bat","rat"],["hen","pen","ten"],["bug","mug","hug"],["map","cap"],["van","pan"],["net","jet","wet"],["pot","hot"],["fox","box"],["bed","red"]];
  const ew=w=>EW.find(x=>x[0]===w),ewl=x=>`${x[0]} ${x[1]} ${x[2]}`;
  let eUsed={};
  const eNew=L=>{let c=L.filter(x=>!eUsed[x[0]]);if(c.length<1){eUsed={};c=L;}const x=pick(c);eUsed[x[0]]=1;return x;};
  const eOther=(x,n,f)=>shuffle(EW.filter(y=>y[0]!==x[0]&&y[1]!==x[1]&&(!f||f(y)))).slice(0,n);
  const eSim=(x,n)=>{const w=x[0],sc=y=>{const v=y[0];return (v.slice(0,2)===w.slice(0,2)?6:0)+(v[0]===w[0]?3:0)+(v.slice(-2)===w.slice(-2)?4:0)+(v.length===w.length?1:0)+Math.random()*2;};
    return EW.filter(y=>y[0]!==x[0]&&y[1]!==x[1]).sort((a,b)=>sc(b)-sc(a)).slice(0,n);};
  const spk=w=>`<button class="skspk" data-say="${w}">🔊</button>`;
  function eGen(i){
    const t=["hear","read","word","hear","read"][i%5];
    if(t==="rhyme"){const G=pick(ERH),a=pick(G),b=pick(G.filter(w=>w!==a)),ws=shuffle(EW.filter(y=>!G.includes(y[0])&&y[0].slice(1)!==a.slice(1))).slice(0,NO-1);
      return mkQ(`<div class="skbig en">${a} ${ew(a)[1]}</div>${spk(a)}<div class="skq">끝소리가 같은 낱말은?</div>`,`<span class="en">${b}</span> ${ew(b)[1]}`,ws.map(y=>`<span class="en">${y[0]}</span> ${y[1]}`),`<span class="en">${a}</span> – <span class="en">${b}</span><br>둘 다 <b class="en">-${a.slice(1)}</b> 소리로 끝나요.`,{snd:a,after:a+", "+b});}
    const x=eNew(Math.random()<.75?EW2:EW);
    if(t==="hear")return mkQ(`${spk(x[0])}<div class="skq">잘 듣고, 맞는 그림을 골라요</div>`,x[1],eSim(x,NO-1).map(y=>y[1]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{snd:x[0],em:1,after:x[0]});
    if(t==="first"){const c=x[0][0],bad=c==="c"?"k":c==="k"?"c":"",ls=shuffle("bdpmnhtsrlfgwjv".split("").filter(l=>l!==c&&l!==bad)).slice(0,NO-1);
      return mkQ(`<div class="skem">${x[1]}</div>${spk(x[0])}<div class="skq">첫소리 글자는?</div>`,c,ls,`<b class="en">${c}</b> → <span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{snd:x[0],em:1,en:1,after:x[0]});}
    if(t==="read")return mkQ(`<div class="skbig en">${x[0]}</div><div class="skq">읽고, 맞는 그림을 골라요</div>`,x[1],eSim(x,NO-1).map(y=>y[1]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{em:1,after:x[0]});
    const ws=eSim(x,NO-1);
    return mkQ(`<div class="skem">${x[1]}</div><div class="skq">${x[2]} — 맞는 낱말은?</div>`,x[0],ws.map(y=>y[0]),`<span class="en">${x[0]}</span> ${x[1]} ${x[2]}`,{en:1,after:x[0]});
  }
  const SGEN={k:kGen,m:mGen,e:eGen};

  /* --- 독서: 의학 이야기책 (쪽: [그림, 글] · 문제: [질문, 정답, [오답 4개], 풀이, 찾을 쪽]) --- */
  const BOOKS=[
  {id:"wbc",t:"백혈구 대장 출동!",e:"🛡️",p:[
    ["🏃‍♀️🌳","아림이가 놀이터에서 신나게 달렸어요. 그러다 '꽈당!' 넘어졌어요."],
    ["🦵🩸","무릎에 상처가 났어요. 피가 조금 났어요. 아야, 따가워!"],
    ["🦠🦠🦠","상처 틈으로 나쁜 세균들이 슬금슬금 들어왔어요. '헤헤, 여기서 살아야지!'"],
    ["⚪🛡️🦠","그때 핏속의 백혈구 대장이 달려왔어요. '세균은 우리가 막는다!' 백혈구는 세균을 꿀꺽 삼켜 버렸어요."],
    ["🟡","싸움이 끝난 자리에 노란 고름이 생기기도 해요. 고름에는 세균과 싸운 백혈구들이 모여 있어요."],
    ["🟤🩹","피가 굳어서 딱딱한 딱지가 생겼어요. 딱지는 상처를 덮는 뚜껑이에요. 그 밑에서 새 살이 자라요."],
    ["🧼💧","아림이는 상처를 깨끗한 물로 씻고 반창고를 붙였어요. 딱지는 억지로 떼지 않기로 했어요. 백혈구 대장, 고마워!"]],
   q:[["상처에 들어온 세균과 싸운 것은 누구일까?","백혈구",["적혈구","딱지","땀","머리카락"],"백혈구는 핏속에서 세균과 싸우는 몸의 군인이에요.",4],
      ["딱지를 억지로 떼면 안 되는 까닭은?","딱지 밑에서 새 살이 자라고 있어서",["딱지가 있어야 키가 커서","딱지는 원래 안 떨어져서","딱지가 세균을 불러 와서","딱지가 금방 또 붙어서"],"딱지는 상처를 덮는 뚜껑이에요. 그 밑에서 새 살이 자라요.",6],
      ["상처가 났을 때 먼저 하면 좋은 일은?","깨끗한 물로 씻어요",["흙을 발라요","손가락으로 만져요","딱지를 떼요","그냥 둬요"],"깨끗이 씻어야 세균이 덜 들어가요.",7]]},
  {id:"cold",t:"콧물은 왜 나올까?",e:"🤧",p:[
    ["🧒❄️","추운 날, 아림이 친구 하준이가 '에취!' 재채기를 했어요."],
    ["👾","하준이 코로 아주아주 작은 감기 바이러스가 들어왔어요. 눈에는 보이지 않을 만큼 작아요."],
    ["🤧💧","그러자 코에서 콧물이 줄줄 나왔어요. 콧물은 바이러스를 감싸서 몸 밖으로 내보내요."],
    ["🌡️🔥","밤에는 몸이 뜨거워졌어요. 열이 나는 건 몸이 바이러스와 열심히 싸우고 있다는 뜻이에요."],
    ["🛌🍲💧","하준이는 푹 자고, 따뜻한 물을 많이 마셨어요. 푹 쉬어야 몸이 싸울 힘이 생겨요."],
    ["💪🙂","며칠 뒤, 하준이 몸이 바이러스를 이겼어요. 콧물도 멈췄어요."],
    ["💪🧼","기침할 때는 팔꿈치로 입을 가려요. 밖에 다녀오면 비누로 손을 씻어요. 그래야 친구에게 감기를 옮기지 않아요."]],
   q:[["콧물이 하는 일은?","바이러스를 감싸서 밖으로 내보내요",["냄새를 맛있게 바꿔요","목소리를 크게 해 줘요","키를 크게 해 줘요","바이러스에게 밥을 줘요"],"콧물은 바이러스를 붙잡아서 몸 밖으로 내보내요.",3],
      ["열이 나는 건 무슨 뜻일까?","몸이 바이러스와 싸우고 있어요",["몸이 다 나았어요","햇볕을 많이 쬐었어요","배가 고파요","옷을 많이 입었어요"],"열은 몸이 바이러스와 열심히 싸운다는 신호예요.",4],
      ["기침이 나올 때 입을 어떻게 가릴까?","팔꿈치로 가려요",["가리지 않아요","친구 옷으로 가려요","하늘을 보고 해요","발로 가려요"],"팔꿈치로 가리면 손에 바이러스가 덜 묻어요.",7]]},
  {id:"bone",t:"똑 부러진 뼈가 다시 붙었어요",e:"🦴",p:[
    ["🛴💥","서아는 킥보드를 타다가 넘어졌어요. 팔이 너무 아파서 엉엉 울었어요."],
    ["🏥🩻","병원에서 엑스레이 사진을 찍었어요. 사진 속 팔뼈에 금이 가 있었어요."],
    ["👩‍⚕️","의사 선생님이 말했어요. '뼈가 부러졌구나. 하지만 뼈는 다시 붙을 수 있어.'"],
    ["💪⬜","의사 선생님은 서아 팔에 단단한 깁스를 해 주었어요. 깁스는 뼈가 움직이지 않게 꽉 잡아 줘요."],
    ["🦴✨","깁스 속에서 뼈는 쉬지 않고 일했어요. 부러진 자리에 새 뼈를 조금씩 만들어 이었어요."],
    ["🥛🐟","서아는 우유와 멸치를 골고루 먹었어요. 칼슘이 많은 음식은 뼈를 튼튼하게 해요."],
    ["🎉🙌","몇 주가 지나 깁스를 풀었어요. 뼈가 다시 단단하게 붙었어요!"]],
   q:[["뼈가 부러졌는지 알아보려고 찍은 사진은?","엑스레이",["가족 사진","그림일기","증명사진","풍경 사진"],"엑스레이로 찍으면 몸속 뼈가 보여요.",2],
      ["깁스를 하는 까닭은?","뼈가 움직이지 않게 잡아 주려고",["팔을 예쁘게 꾸미려고","팔을 따뜻하게 하려고","세균을 잡으려고","팔에 그림을 그리려고"],"뼈가 움직이지 않아야 바르게 붙어요.",4],
      ["뼈를 튼튼하게 하는 음식은?","우유와 멸치",["사탕과 젤리","콜라와 과자","아이스크림","초콜릿"],"우유와 멸치에는 뼈를 만드는 칼슘이 많아요.",6]]},
  {id:"tooth",t:"충치균의 달콤한 밤",e:"🦷",p:[
    ["🍬🍫","하윤이는 사탕과 초콜릿을 아주 좋아해요. 밤에 사탕을 먹고 그냥 잠이 들었어요."],
    ["🦠🦷","입속의 충치균이 신이 났어요. '달콤한 설탕이다! 냠냠!'"],
    ["🧪🦷","충치균은 설탕을 먹고 시큼한 산을 만들어요. 산은 단단한 이를 조금씩 녹여요."],
    ["🕳️😣","이에 작은 구멍이 생겼어요. 찬물을 마시면 이가 찌릿찌릿 시렸어요."],
    ["🪥👩‍⚕️","치과 선생님이 충치를 깨끗이 긁어 내고 구멍을 메워 주었어요."],
    ["🪥⏰","하윤이는 이제 밥을 먹고 나서 꼭 이를 닦아요. 자기 전에는 더 꼼꼼히 닦아요."],
    ["😁✨","충치균은 먹을 게 없어서 힘이 없어졌어요. 하윤이 이가 반짝반짝 빛나요."]],
   q:[["이에 구멍을 내는 것은 무엇일까?","충치균이 만든 산",["칫솔","찬물","우유","치과 선생님"],"충치균이 설탕을 먹고 만든 산이 이를 녹여요.",3],
      ["이에 구멍이 생기면 찬물을 마실 때 어떨까?","이가 찌릿찌릿 시려요",["이가 더 하얘져요","아무렇지 않아요","이가 쑥 자라요","배가 불러요"],"구멍이 생기면 찬 것이 닿을 때 이가 시려요.",4],
      ["충치균이 힘이 없어진 까닭은?","이를 닦아서 먹을 게 없어져서",["사탕을 더 많이 먹어서","잠을 늦게 자서","입을 크게 벌려서","물을 안 마셔서"],"이를 닦으면 충치균이 먹을 설탕이 남지 않아요.",7]]},
  {id:"heart",t:"쿵쿵, 심장 펌프",e:"🫀",p:[
    ["🫀","우리 가슴 속에는 주먹만 한 심장이 있어요. 심장은 쉬지 않고 '쿵쿵' 뛰어요."],
    ["🫀➡️🔴","심장은 펌프처럼 피를 꾹 짜서 온몸으로 보내요."],
    ["🔴📦","피 속의 적혈구는 산소를 싣고 다니는 작은 배달부예요. 산소는 우리 몸이 힘을 내는 데 꼭 필요해요."],
    ["🏃‍♀️💨","아림이가 술래잡기를 하며 신나게 뛰었어요. 다리 근육이 '산소가 더 필요해!' 하고 외쳤어요."],
    ["💓💓💓","그러자 심장이 더 빨리 쿵쿵쿵 뛰었어요. 피를 빨리 보내서 산소를 많이 배달하려는 거예요."],
    ["🩺👂","의사 선생님은 청진기로 심장 소리를 들어요. 소리를 들으면 심장이 잘 뛰는지 알 수 있어요."],
    ["🚶‍♀️😌","쉬고 나니 심장이 다시 천천히 뛰었어요. 꾸준히 운동하면 심장이 더 튼튼해져요."]],
   q:[["심장은 무슨 일을 할까?","피를 온몸으로 보내요",["음식을 소화해요","공기를 들이마셔요","생각을 해요","소리를 들어요"],"심장은 펌프처럼 피를 온몸으로 보내요.",2],
      ["달리기를 하면 심장이 빨리 뛰는 까닭은?","근육에 산소를 더 많이 보내려고",["심장이 무서워서","배가 고파서","잠이 와서","심장이 놀고 싶어서"],"뛰는 근육은 산소가 많이 필요해서 심장이 피를 빨리 보내요.",5],
      ["심장 소리를 듣는 도구는?","청진기",["체온계","돋보기","망원경","주사기"],"청진기를 가슴에 대면 쿵쿵 소리가 들려요.",6]]},
  {id:"apple",t:"꼬르륵, 사과의 여행",e:"🍎",p:[
    ["🍎😋","아림이가 사과를 한 입 베어 물었어요. 사과의 긴 여행이 시작돼요!"],
    ["👄🦷","입에서 이가 사과를 잘게 부숴요. 침이 섞이면 꿀꺽 삼키기 쉬워져요."],
    ["⬇️⬇️","꿀꺽! 사과는 식도라는 길을 따라 아래로 내려가요."],
    ["🫙🌀","위에 도착했어요. 위는 꿈틀꿈틀 움직이며 음식을 죽처럼 만들어요."],
    ["〰️〰️","다음은 꼬불꼬불 긴 작은창자예요. 여기서 몸에 좋은 영양소를 쏙쏙 빨아들여요."],
    ["💩🚽","남은 찌꺼기는 큰창자를 지나 똥이 되어 밖으로 나와요."],
    ["🙂🍎","꼭꼭 씹어 먹으면 위와 창자가 덜 힘들어요. 사과야, 여행 잘했어!"]],
   q:[["사과가 입에서 위로 내려가는 길은?","식도",["기도","핏줄","콧구멍","귓구멍"],"음식은 식도를 따라 위로 내려가요. 기도는 숨이 지나가는 길이에요.",3],
      ["영양소를 빨아들이는 곳은?","작은창자",["식도","이","코","심장"],"꼬불꼬불 작은창자에서 영양소를 쏙쏙 빨아들여요.",5],
      ["꼭꼭 씹어 먹으면 좋은 까닭은?","위와 창자가 덜 힘들어서",["사과가 더 커져서","배가 더 고파져서","똥이 안 나와서","이가 빠져서"],"잘게 씹으면 위와 창자가 음식을 쉽게 소화해요.",7]]},
  {id:"vac",t:"예방주사는 연습 시합",e:"💉",p:[
    ["🏥💉😟","오늘은 예방주사를 맞는 날이에요. 도윤이는 조금 무서웠어요."],
    ["👩‍⚕️","간호사 선생님이 말했어요. '예방주사는 우리 몸에게 미리 연습을 시켜 주는 거야.'"],
    ["💉🔬","주사 안에는 힘이 아주 약해진 병균이나, 병균의 작은 조각 같은 것이 들어 있어요."],
    ["🛡️🧠","몸속 군인들은 그것을 보고 '이렇게 생긴 녀석이구나!' 하고 기억해요. 그리고 항체라는 무기를 만들어 둬요."],
    ["⚔️🦠","나중에 진짜 병균이 들어오면 몸이 바로 알아보고 재빨리 물리쳐요."],
    ["🩹😊","따끔! 도윤이는 꾹 참았어요. 주사 맞은 곳이 조금 아플 수도 있지만 곧 괜찮아져요."],
    ["👶👵","예방주사를 맞으면 나도 지키고, 아기나 할머니처럼 약한 사람들도 함께 지킬 수 있어요."]],
   q:[["예방주사는 우리 몸에게 무엇을 해 줄까?","병균과 싸우는 연습을 시켜 줘요",["키를 크게 해 줘요","배를 부르게 해 줘요","잠을 재워 줘요","힘센 병균을 넣어 아프게 해요"],"예방주사는 몸이 병균을 미리 알아 두게 연습시켜요.",2],
      ["몸이 만들어 두는 무기의 이름은?","항체",["깁스","콧물","딱지","청진기"],"항체는 병균을 알아보고 물리치는 몸의 무기예요.",4],
      ["진짜 병균이 들어오면 어떻게 될까?","몸이 알아보고 재빨리 물리쳐요",["처음 보는 거라 깜짝 놀라요","병균과 친구가 돼요","병균이 꼭 이겨요","주사를 다시 맞아야만 해요"],"미리 연습했으니 몸이 바로 알아보고 싸워요.",5]]},
  {id:"baby",t:"응애! 아기의 첫 숨",e:"👶",p:[
    ["🤰💗","엄마 배 속 아기집에서 아기가 무럭무럭 자라요."],
    ["🔗🍼","아기는 배 속에서 숨을 쉬지 않아요. 탯줄로 엄마에게서 산소와 영양분을 받아요."],
    ["🏥👶","드디어 아기가 태어났어요. '응애! 응애!'"],
    ["🫁💨","첫 울음과 함께 아기의 작은 폐에 공기가 처음 들어가요. 이제 스스로 숨을 쉬어요!"],
    ["✂️🔗","의사 선생님이 탯줄을 잘라요. 아기는 하나도 아프지 않아요. 탯줄에는 아픔을 느끼는 신경이 없거든요."],
    ["🔘🙂","탯줄이 붙어 있던 자리는 시간이 지나 배꼽이 돼요. 우리 모두 배꼽이 있지요?"],
    ["🍼💤","아기는 엄마 젖이나 분유를 먹고, 하루에 아주 많이 자요. 자면서 쑥쑥 자라요."]],
   q:[["배 속 아기는 산소를 어떻게 받을까?","탯줄로 엄마에게서 받아요",["코로 숨을 쉬어요","입으로 마셔요","배꼽으로 숨을 쉬어요","산소가 필요 없어요"],"배 속 아기는 탯줄로 산소와 영양분을 받아요.",2],
      ["탯줄을 자를 때 아기가 아프지 않은 까닭은?","탯줄에는 아픔을 느끼는 신경이 없어서",["아기가 자고 있어서","주사를 맞아서","탯줄이 아주 짧아서","아기가 꾹 참아서"],"탯줄에는 아픔을 느끼는 신경이 없어요.",5],
      ["탯줄이 붙어 있던 자리는 무엇이 될까?","배꼽",["점","보조개","딱지","콧구멍"],"탯줄이 떨어진 자리가 배꼽이 돼요.",6]]}
  ];
  /* 오늘의 책: 아직 안 읽은 책부터 하루 한 권 */
  /* 매주 새 책: books.json ({"books":[{id,from:"YYYY-MM-DD",t,e,p,q}]}) — from 날짜가 되면 꺼내 읽어요 */
  let XB=[];
  const bOk=b=>b&&typeof b.id==="string"&&b.t&&b.e&&Array.isArray(b.p)&&b.p.length>=3&&b.p.every(x=>Array.isArray(x)&&x.length===2)&&Array.isArray(b.q)&&b.q.length===3&&b.q.every(x=>Array.isArray(x)&&x.length===5&&Array.isArray(x[2])&&x[2].length===4&&x[4]>=1&&x[4]<=b.p.length);
  function loadBooks(){
    return fetch("books.json",{cache:"no-cache"}).then(r=>r.ok?r.json():null).then(j=>{
      if(!j||!Array.isArray(j.books))return;const t=dstr(),have=new Set(BOOKS.map(b=>b.id));
      XB=j.books.filter(b=>bOk(b)&&(b.from||"")<=t&&!have.has(b.id)&&(have.add(b.id),true)).sort((a,b)=>(a.from||"")<(b.from||"")?-1:1);}).catch(()=>{});
  }
  const allBooks=()=>BOOKS.concat(XB);
  /* 오늘의 책: 한 번 읽은 책은 다시 나오지 않아요. 읽을 새 책이 없으면 null */
  const bToday=()=>{const L=allBooks();
    if(M.btd===day()){const b=L.find(x=>x.id===M.bti);if(b)return b;}
    const rd=M.br||{},b=L.find(x=>!rd[x.id]);if(!b)return null;
    M.btd=day();M.bti=b.id;save();return b;};

  /* --- 화면 --- */
  const kp=document.createElement("div");kp.className="place";kp.id="pk";
  kp.innerHTML=`<button class="backhome" onclick="goPlace('home')">← 🏘️ 아림 마을</button><header class="bh"><h1 style="color:#2c6e9b">📚 공부방</h1></header><main id="skMain"></main>`;
  document.body.insertBefore(kp,g("rv"));
  let SK=null;
  const dots=(n,col,t)=>`<span class="skdots">${Array.from({length:t||5},(_,i)=>i).map(i=>`<i style="${i<n?"background:"+col:""}"></i>`).join("")}</span>`;
  function drawStudy(){
    SK=null;const a=sdGet(),done=studied(),el=g("skMain");
    el.innerHTML=`<img class="banner" src="map/in_study.webp" alt=""><div class="skhead">${done?"💮 오늘 공부 끝! 마을 문이 열렸어요":"네 가지를 다 하면 마을 문이 열려요 🔓"}</div>
      <div class="skgrid">${SKEY.map((k,i)=>`<button class="sksub${a[i]>=SNS[k]?" ok":""}" data-s="${k}" style="--c:${SUB[k][2]}"><span class="e">${SUB[k][0]}</span><b>${SUB[k][1]}</b>${dots(a[i],SUB[k][2],SNS[k])}<small>${a[i]>=SNS[k]?"✅ 다 했어요":k==="b"&&a[i]===0&&!bToday()?"📦 새 책 기다려요":a[i]+" / "+SNS[k]}</small></button>`).join("")}</div>
      <div class="skstamp${done?" on":""}"><span>${done?"💮":"🔒"}</span>${done?"출근 도장 쾅!":"출근 도장"}</div>
      ${done?`<button class="hbtn" id="skHome" style="background:#2fa38a">🏘️ 마을로 가기</button>`:""}`;
    el.querySelectorAll(".sksub").forEach(b=>b.onclick=()=>{SFX("pop");const k=b.dataset.s,c=sdGet()[SKEY.indexOf(k)];
      if(k==="b"){const bk=bToday();if(!bk){bWait();return;}SK={s:"b",bk:bk,pg:0,free:c>=SNS.b,qi:c>=SNS.b?0:c,cur:null,ret:false};drawBook();return;}
      SK={s:k,i:c%SNS[k],free:c>=SNS[k],n:0};skNext();});
    const h=g("skHome");if(h)h.onclick=()=>{SFX("pop");goPlace("home");};
  }
  function skNext(){SK.q=SGEN[SK.s](SK.i+SK.n);SK.done=false;if(SK.q.w)drawW();else if(SK.q.dict)drawD();else drawQ();}
  function drawQ(){
    const el=g("skMain"),q=SK.q,S=SUB[SK.s],n=sdGet()[SKEY.indexOf(SK.s)];
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>연습</small>`:dots(n,S[2],SNS[SK.s])}</div>
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
      SK.done=true;hpUp();
      el.querySelectorAll(".skopt").forEach((x,i)=>{if(i===q.a)x.classList.add("good");else if(!x.classList.contains("bad"))x.classList.add("dim");});
      SFX("ok");if(q.after)setTimeout(()=>say(q.after),500);
      const first=SK.miss===0;let fin=false;
      if(first&&!SK.free){const a=sdGet(),j=SKEY.indexOf(SK.s);a[j]=Math.min(SNS[SK.s],a[j]+1);sdSet(a);fin=a[j]>=SNS[SK.s];}
      SK.n++;
      g("skAns").innerHTML=`<div class="skwhy ok"><b>${first?"⭕ 맞았어요!":"⭕ 찾았다! 끝까지 잘 찾았어요"}</b><p>${q.why}</p>${first||SK.free?"":`<small class="skmore">한 번에 맞히면 ● 하나가 채워져요</small>`}</div><button class="hbtn" id="skGo" style="background:${S[2]}">${fin?"다 했어요 ✅":"다음 ▶"}</button>`;
      g("skGo").onclick=()=>{if(fin||(SK.free&&SK.n>=SNS[SK.s])){skFinish();}else skNext();};
      g("skGo").scrollIntoView({block:"nearest",behavior:"smooth"});
    });
  }
  /* 독서: 책 읽기 → 문제 3개 (틀리면 책에서 다시 찾기) */
  /* 따라 쓰기 화면 */
  function drawW(){
    const el=g("skMain"),S=SUB.k,ch=SK.q.ch,ST=wStrokes(ch),n=sdGet()[0];
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>연습</small>`:dots(n,S[2],SNS.k)}</div>
      <div class="skcard"><div class="skq">✍️ 순서대로 따라 써요${JNAME[ch]?` · <b>${ch}</b> (${JNAME[ch]})`:` · <b>${ch}</b>`}</div>
      <div class="wbox"><canvas id="wCv"></canvas></div>
      <div class="wmsg" id="wMsg"></div>
      <div class="bknav"><button class="bkbtn" id="wShow">👀 쓰는 순서 보기</button><button class="bkbtn" id="wAgain">↺ 처음부터</button></div>
      <div class="skans" id="skAns"></div></div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
    const cv=g("wCv"),ctx=cv.getContext("2d");let W=0,cur=0,miss=0,pts=null,anim=null,done=false;
    const fitCv=()=>{const r=cv.getBoundingClientRect(),d=window.devicePixelRatio||1;W=r.width;cv.width=W*d;cv.height=W*d;ctx.setTransform(d*W/100,0,0,d*W/100,0,0);};
    const msg=(t,c)=>{g("wMsg").innerHTML=t;g("wMsg").className="wmsg"+(c?" "+c:"");};
    const line=(p,col,w)=>{ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();p.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();};
    function draw(dot){
      ctx.clearRect(0,0,100,100);
      ctx.setLineDash([2,2]);line([[50,0],[50,100]],"#f1d9e0",.5);line([[0,50],[100,50]],"#f1d9e0",.5);ctx.setLineDash([]);
      ST.forEach((s,i)=>line(s,i<cur?S[2]:"#e9e4ee",i<cur?7:8));
      if(cur<ST.length){const s=ST[cur],[x,y]=s[0],[x2,y2]=s[1],a=Math.atan2(y2-y,x2-x);
        line(s,"#d8cfe3",8);
        ctx.fillStyle="#3cb371";ctx.beginPath();ctx.arc(x,y,4.6,0,7);ctx.fill();
        ctx.fillStyle="#fff";ctx.font="bold 6px Jua,sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(cur+1,x,y+.3);
        ctx.fillStyle="#3cb371";ctx.beginPath();const ax=x+Math.cos(a)*10,ay=y+Math.sin(a)*10;ctx.moveTo(ax+Math.cos(a)*3.5,ay+Math.sin(a)*3.5);ctx.lineTo(ax+Math.cos(a+2.4)*3.5,ay+Math.sin(a+2.4)*3.5);ctx.lineTo(ax+Math.cos(a-2.4)*3.5,ay+Math.sin(a-2.4)*3.5);ctx.fill();}
      if(pts&&pts.length>1)line(pts,"#4a3f55",4.5);
      if(dot){ctx.fillStyle="#ff6fa0";ctx.beginPath();ctx.arc(dot[0],dot[1],3.4,0,7);ctx.fill();}
    }
    const D=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
    const segD=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],L=dx*dx+dy*dy;let t=L?((p[0]-a[0])*dx+(p[1]-a[1])*dy)/L:0;t=Math.max(0,Math.min(1,t));return D(p,[a[0]+t*dx,a[1]+t*dy]);};
    const polyD=(p,s)=>{let m=1e9;for(let i=1;i<s.length;i++)m=Math.min(m,segD(p,s[i-1],s[i]));return m;};
    const samp=s=>{const o=[];for(let i=1;i<s.length;i++){const L=D(s[i-1],s[i]),k=Math.max(1,Math.ceil(L/4));for(let j=0;j<=k;j++)o.push([s[i-1][0]+(s[i][0]-s[i-1][0])*j/k,s[i-1][1]+(s[i][1]-s[i-1][1])*j/k]);}return o;};
    const R=13;
    const match=(p,s)=>{if(p.length<2)return false;if(D(p[0],s[0])>R||D(p[p.length-1],s[s.length-1])>R)return false;
      if(!samp(s).every(q=>p.some(r=>D(q,r)<=R)))return false;return p.filter(r=>polyD(r,s)<=R*1.3).length>=p.length*.85;};
    function judge(p){
      const s=ST[cur];
      if(match(p,s)){cur++;SFX("pop");
        if(cur>=ST.length){finish();return;}
        msg(miss?"좋아요! 이어서 써 봐요":"잘했어요! 다음 획 ✨","ok");return;}
      miss++;SFX("no");let t="점선을 따라 다시 써 볼까? ✍️";
      if(ST.slice(cur+1).some(x=>match(p,x)))t=`순서가 달라요! 초록색 <b>${cur+1}</b>번부터 써요`;
      else if(match(p.slice().reverse(),s))t="거꾸로 썼어요! 초록 점에서 출발해요 🟢";
      else if(s.length===3&&D(p[0],s[0])<=R&&D(p[p.length-1],s[1])<=R)t="꺾이는 곳에서 손을 떼지 말고, <b>한 번에 꺾어</b> 써요! ↪";
      else if(D(p[0],s[0])>R)t="초록 점에서 시작해요 🟢";
      msg(t,"no");if(miss>=2&&miss%2===0)show(true);
    }
    function show(one){if(anim)cancelAnimationFrame(anim);const list=one?[cur]:ST.map((_,i)=>i).filter(i=>i>=cur);let k=0,t0=null;
      const step=ts=>{if(t0===null)t0=ts;const s=ST[list[k]],P=samp(s),f=Math.min(1,(ts-t0)/900);draw(P[Math.floor(f*(P.length-1))]);
        if(f<1)anim=requestAnimationFrame(step);else if(++k<list.length){t0=null;anim=requestAnimationFrame(step);}else{anim=null;setTimeout(()=>draw(),300);}};
      anim=requestAnimationFrame(step);}
    function finish(){done=true;draw();SFX("ok");msg("","");
      let fin=false;if(!SK.free){const a=sdGet();a[0]=Math.min(SNS.k,a[0]+1);sdSet(a);fin=a[0]>=SNS.k;}
      hpUp();if(!SK.free&&hSt()===1&&SK.q.ch===J24[(M.wi||0)%J24.length]){M.wi=(M.wi||0)+1;save();}
      SK.n++;
      g("skAns").innerHTML=`<div class="skwhy ok"><b>⭕ ${miss?"끝까지 잘 썼어요!":"순서대로 아주 잘 썼어요!"}</b><p>${wNote(ch)}</p></div><button class="hbtn" id="skGo" style="background:${S[2]}">${fin?"다 했어요 ✅":"다음 ▶"}</button>`;
      g("skGo").onclick=()=>{if(fin||(SK.free&&SK.n>=SNS.k))skFinish();else skNext();};
      g("skGo").scrollIntoView({block:"nearest",behavior:"smooth"});}
    const pos=e=>{const r=cv.getBoundingClientRect();return [(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100];};
    cv.onpointerdown=e=>{if(done)return;if(anim){cancelAnimationFrame(anim);anim=null;}e.preventDefault();cv.setPointerCapture(e.pointerId);pts=[pos(e)];draw();};
    cv.onpointermove=e=>{if(!pts)return;const p=pos(e);if(D(p,pts[pts.length-1])>1)pts.push(p);draw();};
    cv.onpointerup=cv.onpointercancel=e=>{if(!pts)return;const p=pts;pts=null;if(p.length>1)judge(p);draw();};
    g("wShow").onclick=()=>{SFX("pop");show(false);};
    g("wAgain").onclick=()=>{if(done)return;SFX("pop");cur=0;miss=0;msg("");draw();};
    fitCv();draw();msg(`초록 점 🟢 <b>1</b>번에서 시작해 화살표 쪽으로 써요`);
  }
  /* 받아쓰기: 듣고 낱자 카드를 차례로 눌러 낱말 만들기 */
  function drawD(){
    const el=g("skMain"),S=SUB.k,[word,emo]=SK.q.d,n=sdGet()[0];
    const P=[...word].map(hDec),seq=P.flatMap(p=>p.filter(Boolean));
    const need=[...new Set(seq)],ex=shuffle(need.flatMap(j=>simOf(j).filter(basic))).filter(j=>!need.includes(j));
    const tiles=shuffle(need.concat([...new Set(ex)].slice(0,Math.max(3,9-need.length))));
    let k=0,miss=0,done=false;
    const shown=()=>{let left=k,out="";P.forEach(p=>{const m=p.filter(Boolean),t=Math.min(left,m.length);left-=t;
      out+=`<span class="dslot${t?" on":""}">${t===0?"":t===1?m[0]:t===2?hCom(m[0],m[1]):hCom(m[0],m[1],m[2])}</span>`;});return out;};
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>연습</small>`:dots(n,S[2],SNS.k)}</div>
      <div class="skcard"><div class="skq">🎧 받아쓰기 — 잘 듣고, 낱자를 차례대로 눌러요</div>
      <button class="skspk big" id="dSay">🔊 다시 듣기</button>
      <div class="dword" id="dWord">${shown()}</div>
      <div class="dtiles">${tiles.map(j=>`<button class="dtile" data-j="${j}">${j}</button>`).join("")}</div>
      <div class="wmsg" id="wMsg">첫소리부터 차례대로 눌러요</div><div class="skans" id="skAns"></div></div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
    g("dSay").onclick=()=>sayKo(word);setTimeout(()=>sayKo(word),350);
    el.querySelectorAll(".dtile").forEach(b=>b.onclick=()=>{if(done)return;
      if(b.dataset.j===seq[k]){k++;SFX("pop");g("dWord").innerHTML=shown();g("wMsg").className="wmsg";g("wMsg").textContent=k<seq.length?"좋아요! 다음 낱자는?":"";
        if(k>=seq.length)finish();return;}
      miss++;SFX("no");b.classList.remove("shake");void b.offsetWidth;b.classList.add("shake");
      g("wMsg").className="wmsg no";g("wMsg").innerHTML=miss>=3?"천천히 다시 들어 봐요 🔊":"다시 들어 볼까? 🎧";if(miss>=3||miss%2===0)sayKo(word);});
    function finish(){done=true;SFX("ok");hpUp();
      let fin=false;if(!SK.free){const a=sdGet();a[0]=Math.min(SNS.k,a[0]+1);sdSet(a);fin=a[0]>=SNS.k;}
      SK.n++;
      g("skAns").innerHTML=`<div class="skwhy ok"><b>⭕ ${miss?"끝까지 잘 썼어요!":"한 번에 바르게 썼어요!"}</b><p><span style="font-size:40px">${emo}</span> <b>${word}</b> = ${P.map(p=>p.filter(Boolean).join(" + ")).join(" / ")}</p></div><button class="hbtn" id="skGo" style="background:${S[2]}">${fin?"다 했어요 ✅":"다음 ▶"}</button>`;
      g("skGo").onclick=()=>{if(fin||(SK.free&&SK.n>=SNS.k))skFinish();else skNext();};
      g("skGo").scrollIntoView({block:"nearest",behavior:"smooth"});}
  }
  function bWait(){
    const el=g("skMain"),S=SUB.b;
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span></div><div class="skcard bk"><div class="bkcover"><div class="bkce">📦</div><div class="bkt">새 책이 오고 있어요</div><div class="skq">지금 있는 책은 모두 읽었어요! 대단해요 👏<br>새 책은 월요일에 도착해요. 오늘 독서는 쉬어도 돼요.</div></div></div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
  }
  function drawBook(){
    const el=g("skMain"),S=SUB.b,bk=SK.bk,P=bk.p.length,pg=SK.pg;
    const bar=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>다시 읽기</small>`:dots(sdGet()[3],S[2],SNS.b)}</div>`;
    let body;
    if(pg===0)body=`<div class="bkcover"><div class="bkce">${bk.e}</div><div class="bkt">${bk.t}</div><div class="skq">오늘의 책이에요. 천천히 소리 내어 읽어 봐요.</div></div>`;
    else{const x=bk.p[pg-1];body=`<div class="bkpage"><div class="bkpic">${x[0]}</div><div class="bktx">${x[1]}</div><div class="bkno">${pg} / ${P}쪽</div></div>`;}
    const last=pg>=P,ret=SK.ret;
    const nav=`<div class="bknav"><button class="bkbtn" id="bkPrev"${pg===0?" disabled":""}>◀ 앞으로</button>${ret?`<button class="bkbtn go" id="bkRet">✏️ 문제로 돌아가기</button>`:last?`<button class="bkbtn go" id="bkQ">다 읽었어요! 문제 풀기 ▶</button>`:`<button class="bkbtn" id="bkNext">${pg===0?"읽기 시작 ▶":"다음 쪽 ▶"}</button>`}${ret&&!last?`<button class="bkbtn" id="bkNext">다음 쪽 ▶</button>`:""}</div>`;
    el.innerHTML=bar+`<div class="skcard bk">${body}${nav}</div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
    const on=(id,f)=>{const b=g(id);if(b)b.onclick=f;};
    on("bkPrev",()=>{if(SK.pg>0){SK.pg--;SFX("pop");drawBook();}});
    on("bkNext",()=>{if(SK.pg<P){SK.pg++;SFX("pop");drawBook();}});
    on("bkQ",()=>{SFX("pop");SK.ret=false;drawBQ();});
    on("bkRet",()=>{SFX("pop");SK.ret=false;drawBQ();});
    window.scrollTo({top:0});
  }
  function drawBQ(){
    const el=g("skMain"),S=SUB.b,bk=SK.bk,raw=bk.q[SK.qi];
    if(!SK.cur){const o=shuffle([raw[1]].concat(raw[2]));SK.cur={o:o,a:o.indexOf(raw[1]),bad:[],done:false};}
    const c=SK.cur;
    el.innerHTML=`<div class="skbar"><button class="chipb" id="skBack">← 공부방</button><span style="color:${S[2]}">${S[0]} ${S[1]}</span>${SK.free?`<small>다시 읽기</small>`:dots(sdGet()[3],S[2],SNS.b)}</div>
      <div class="skcard"><div class="bkqt">📖 ${bk.t} · 문제 ${SK.qi+1}/${bk.q.length}</div><div class="skq big">${raw[0]}</div><div class="skopts bkopts">${c.o.map((o,i)=>`<button class="skopt${c.bad.includes(i)?" bad":""}" data-i="${i}"${c.bad.includes(i)?" disabled":""}>${o}</button>`).join("")}</div><div class="skans" id="skAns"></div></div>`;
    g("skBack").onclick=()=>{SFX("pop");drawStudy();};
    const look=()=>`<button class="bkbtn look" id="bkLook">📖 ${raw[4]}쪽 다시 보기</button>`;
    if(c.bad.length)g("skAns").innerHTML=`<div class="skwhy no"><b>책에서 다시 찾아볼까? 🔍</b></div>${look()}`;
    const bindLook=()=>{const b=g("bkLook");if(b)b.onclick=()=>{SFX("pop");SK.pg=raw[4];SK.ret=true;drawBook();};};bindLook();
    el.querySelectorAll(".skopt").forEach(b=>b.onclick=()=>{
      if(c.done||b.disabled)return;const i=Number(b.dataset.i);
      if(i!==c.a){c.bad.push(i);b.classList.add("bad");b.disabled=true;SFX("no");
        g("skAns").innerHTML=`<div class="skwhy no"><b>${c.bad.length>=2?"아깝다! 책에 답이 숨어 있어요 💭":"책에서 다시 찾아볼까? 🔍"}</b><p>${raw[4]}쪽을 다시 읽어 보면 찾을 수 있어요.</p></div>${look()}`;bindLook();return;}
      c.done=true;SFX("ok");
      el.querySelectorAll(".skopt").forEach((x,j)=>{if(j===c.a)x.classList.add("good");else if(!c.bad.includes(j))x.classList.add("dim");});
      let fin=SK.qi+1>=bk.q.length;
      if(!SK.free){const a=sdGet();a[3]=Math.max(a[3],Math.min(SNS.b,SK.qi+1));sdSet(a);}
      if(fin){M.br=M.br||{};M.br[bk.id]=1;save();}
      g("skAns").innerHTML=`<div class="skwhy ok"><b>${c.bad.length?"⭕ 찾았다! 책을 잘 살펴봤어요":"⭕ 맞았어요!"}</b><p>${raw[3]}</p></div><button class="hbtn" id="skGo" style="background:${S[2]}">${fin?"다 읽었어요 ✅":"다음 문제 ▶"}</button>`;
      g("skGo").onclick=()=>{if(fin){skFinish();}else{SK.qi++;SK.cur=null;drawBQ();}};
      g("skGo").scrollIntoView({block:"nearest",behavior:"smooth"});
    });
  }
  function skFinish(){
    if(studied()&&M.sdd!==day()){M.sdd=day();M.sdn=(M.sdn||0)+1;window.PTS.k=M.sdn*3;save();SFX("fanfare");}else SFX("ok");
    drawStudy();window.scrollTo({top:0});
  }
  function studyInfo(k){
    const b=info(k),c=g("tkc"),a=sdGet();g("tk").classList.add("on");
    c.innerHTML=`<h2>🔒 ${b.emoji} ${MAPN[k]||b.name}</h2><div class="qq">📚 공부방에서 오늘 공부를 마치면 문이 열려요!<br><b style="font-family:Jua;font-weight:normal">${SKEY.map((s,i)=>SUB[s][0]+" "+a[i]+"/"+SNS[s]).join(" · ")}</b></div><button class="hbtn" id="siGo" style="background:#3d8fd6">📚 공부방 가기</button><button class="skip" id="siX">닫기</button>`;
    g("siGo").onclick=()=>{g("tk").classList.remove("on");SFX("pop");M.at="k";save();goPlace("k");};
    g("siX").onclick=()=>g("tk").classList.remove("on");
  }
