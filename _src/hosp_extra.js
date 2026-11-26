/* 숫자 마무리: 덧셈·뺄셈, 시계 읽기, 순서. 소수와 시간 계산은 알려 주는 방식 */
const RN=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function clockSvg(h,m){
  const p=(a,r)=>[(40+r*Math.sin(a*Math.PI/180)).toFixed(1),(40-r*Math.cos(a*Math.PI/180)).toFixed(1)];let t="";
  for(let i=1;i<=12;i++){const q=p(i*30,29);t+=`<text x="${q[0]}" y="${+q[1]+3.5}" font-size="9" text-anchor="middle" font-family="Jua,sans-serif" fill="#33302e">${i}</text>`;}
  const H=p(((h%12)+m/60)*30,16),M=p(m*6,25);
  return `<svg class="clk" viewBox="0 0 80 80"><circle cx="40" cy="40" r="37" fill="#fff" stroke="#f77fae" stroke-width="4"/>${t}<path d="M40 40L${H[0]} ${H[1]}" stroke="#33302e" stroke-width="4.5" stroke-linecap="round"/><path d="M40 40L${M[0]} ${M[1]}" stroke="#e8504f" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="40" r="3" fill="#33302e"/></svg>`;
}
const numOpt=(c,u,alt)=>{const s=[c];(alt||[]).concat([c+1,c-1,c+2,c-2,c+10,c+3]).forEach(v=>{if(s.length<3&&v>=0&&!s.includes(v))s.push(v);});return s.map(v=>v+u);};
const tstr=(h,m)=>h+"시"+(m?" "+m+"분":"");
const h12=h=>((h-1)%12+12)%12+1;
const TRIAGE=[
 ["숨을 잘 쉬지 못하는 아저씨","무릎이 까진 어린이","어제부터 콧물이 나는 언니"],
 ["불러도 깨어나지 않는 할머니","종이에 손가락을 벤 오빠","모기에 물린 동생"],
 ["피가 멈추지 않는 어린이","발목을 살짝 삔 형","예방주사를 맞으러 온 아기"],
 ["땅콩을 먹고 입술이 붓고 숨이 찬 어린이","이가 흔들리는 어린이","손톱이 깨진 어린이"],
 ["가슴이 꽉 조인다는 할아버지","감기에 걸린 아빠","눈이 가려운 누나"]];
const MGEN={
 days:()=>{const a=RN(5,9),b=RN(2,a-2);return {q:`약을 ${a}일 치 받았어요. 오늘까지 ${b}일 먹었어요. 앞으로 며칠 더 먹어야 할까?`,o:numOpt(a-b,"일",[a+b]),ex:`${a} - ${b} = ${a-b}. 다 나은 것 같아도 남은 ${a-b}일을 끝까지 먹어요.`};},
 visit:()=>{const d=RN(3,19),n=RN(3,9);return {q:`오늘은 ${d}일이에요. ${n}일 뒤에 다시 진료를 받으러 와요. 며칠에 와야 할까?`,o:numOpt(d+n,"일",[d-n>0?d-n:d+n+1]),ex:`${d} + ${n} = ${d+n}. 달력에 동그라미를 쳐 둬요.`};},
 wait:()=>{const a=RN(7,14),o=RN(2,5),i=RN(2,6),c=a-o+i;return {q:`대기실에 ${a}명이 있어요. ${o}명이 진료를 마치고 갔고, ${i}명이 새로 왔어요. 지금은 몇 명일까?`,o:numOpt(c,"명",[a-o,a+i]),ex:`${a} - ${o} = ${a-o}, 그리고 ${a-o} + ${i} = ${c}.`};},
 height:()=>{const a=RN(100,118),k=RN(3,8);return {q:`작년 키는 ${a}cm, 올해 키는 ${a+k}cm예요. 일 년 동안 몇 cm 자랐을까?`,o:numOpt(k,"cm"),ex:`${a+k} - ${a} = ${k}. 어린이는 일 년에 5~6cm쯤 자라요.`};},
 weight:()=>{const a=RN(16,30),k=RN(2,5);return {q:`지난번 몸무게는 ${a}kg, 오늘은 ${a+k}kg이에요. 몸무게가 얼마나 늘었을까?`,o:numOpt(k,"kg"),ex:`${a+k} - ${a} = ${k}. 몸무게 변화는 건강을 알려 주는 중요한 숫자예요.`};},
 water:()=>{const a=RN(52,68),k=RN(2,5);return {q:`평소 몸무게는 ${a}kg인데, 투석 전에 재니 ${a+k}kg이에요. 오늘 빼야 할 물은 몇 kg일까?`,o:numOpt(k,"kg"),ex:`${a+k} - ${a} = ${k}. 늘어난 몸무게가 몸에 쌓인 물이에요.`};},
 pulse:()=>{const a=RN(84,99),d=RN(6,18);return {q:`열이 날 때 심장이 1분에 ${a}번 뛰었어요. 열이 내리자 ${d}번이 줄었어요. 지금은 1분에 몇 번 뛸까?`,o:numOpt(a-d,"번",[a+d]),ex:`${a} - ${d} = ${a-d}. 열이 나면 심장도 빨리 뛰어요.`};},
 beds:()=>{const t=RN(8,12),u=RN(3,t-2);return {q:`병실에 침대가 ${t}개 있어요. 환자 ${u}명이 누워 있어요. 빈 침대는 몇 개일까?`,o:numOpt(t-u,"개",[t+u]),ex:`${t} - ${u} = ${t-u}. 빈 침대가 있어야 새 환자를 받을 수 있어요.`};},
 iv:()=>{const a=RN(2,8)*10;return {q:`수액 주머니에 100이 들어 있었어요. 지금까지 ${a}이 들어갔어요. 남은 수액은 얼마일까?`,o:numOpt(100-a,"",[a,100-a+10]),ex:`100 - ${a} = ${100-a}. 다 들어가기 전에 간호사 선생님이 확인해요.`};},
 range:()=>{const n=RN(1,15),c=n<4?"정상보다 낮아요":(n>10?"정상보다 높아요":"정상이에요"),all=["정상이에요","정상보다 높아요","정상보다 낮아요"];return {q:`균과 싸우는 백혈구 수는 4부터 10까지가 정상이에요. 검사 결과는 ${n}이에요. 어떨까?`,o:[c].concat(all.filter(x=>x!==c)),ex:`${n}은 ${n<4?"4보다 작아서 낮아요. 균과 싸울 군인이 모자라요.":(n>10?"10보다 커서 높아요. 몸이 무언가와 싸우는 중이에요.":"4와 10 사이라서 정상이에요.")}`};},
 pattern:()=>({q:"감기 바이러스가 한 사람에게서 두 사람에게 옮아요. 1명 → 2명 → 4명 → 다음은 몇 명일까?",o:["8명","6명","5명"],ex:"앞의 수를 두 번 더해요. 4 + 4 = 8. 손을 씻으면 이 고리를 끊을 수 있어요."}),
 order:()=>{const t=pick(TRIAGE);return {q:"응급실에 세 사람이 한꺼번에 왔어요. 누구를 가장 먼저 봐야 할까?",o:t.slice(),ex:"응급실은 온 순서가 아니라 급한 순서로 봐요. 숨, 피, 정신이 가장 급해요."};},
 ticket:()=>{const a=RN(11,40),b=a+RN(1,5),c=b+RN(1,5);return {q:`급한 환자가 없을 때는 번호표 순서대로 봐요. ${c}번, ${a}번, ${b}번이 기다려요. 누구 차례일까?`,o:[a+"번",b+"번",c+"번"],ex:`가장 작은 수인 ${a}번이 먼저 왔어요.`};},
 temp:()=>{const t=pick(["36.8","37.2","37.6","38.4","39.1","38.0"]),hot=parseFloat(t)>=38;return {tip:"💡 체온은 점(.) 앞의 숫자를 먼저 봐요. 38이거나 38보다 크면 열이 나는 거예요.",q:`체온계에 ${t}도라고 나왔어요. 열이 날까?`,o:hot?["열이 나요","열이 없어요","알 수 없어요"]:["열이 없어요","열이 나요","알 수 없어요"],ex:`점 앞의 숫자가 ${t.split(".")[0]}이에요. ${hot?"38이거나 더 크니까 열이 나요.":"38보다 작으니까 열이 없어요."}`};},
 clock:()=>{const h=RN(1,11),m=pick([0,0,30]);return {q:"약 먹은 시간을 차트에 적어요. 시계는 지금 몇 시일까?",svg:clockSvg(h,m),o:[tstr(h,m),tstr(h12(h+1),m),tstr(h,m?0:30)],ex:`짧은바늘이 ${h}${m?"와 "+h12(h+1)+" 사이":""}, 긴바늘이 ${m?6:12}에 있으면 ${tstr(h,m)}이에요.`};},
 clock2:()=>{const h=RN(7,9),n=pick([3,4,5]),h1=h12(h+n);return {tip:`💡 이 약은 ${n}시간 뒤에 또 먹어요. 짧은바늘이 ${h}에서 ${n}칸 움직이면 다음 약 시간이에요. 아래 시계가 그 시간이에요.`,q:`아침 ${h}시에 약을 먹었어요. 다음 약은 몇 시에 먹을까? 시계를 읽어 봐요.`,svg:clockSvg(h1,0),o:[tstr(h1,0),tstr(h12(h1+1),0),tstr(h12(h1-1),0)],ex:`${h}에서 ${n}칸을 세면 ${h1}이에요. 그래서 ${h1}시예요.`};}
};
function mathFor(id){
  const ks=SCN[id].obs.map(o=>o.k),sp=[];
  if(ks.includes("scale"))sp.push("weight");if(ks.includes("thermo"))sp.push("temp");if(ks.includes("mon"))sp.push("pulse");
  if(ks.includes("ivp"))sp.push("iv");if(ks.includes("tubes")||ks.includes("micro"))sp.push("range");if(ks.includes("height")||["endo","fam","os","reh"].includes(id))sp.push("height");
  if(ks.includes("dialm"))sp.push("water");if(id==="er")sp.push("order","order","ticket");if(id==="inf")sp.push("pattern");if(["icu","nicu","nb"].includes(id))sp.push("beds");
  const k=sp.length&&Math.random()<.55?pick(sp):pick(["days","visit","wait","clock","clock","clock2","ticket"]);
  return MGEN[k]();
}
/* 영어: 파닉스 낱말과 외국인 환자 */
const say=t=>{try{const s=window.speechSynthesis;if(!s)return;s.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=.78;s.speak(u);}catch(e){}};
const EWORD=[["leg","🦵","다리"],["lip","👄","입술"],["bed","🛏️","침대"],["bug","🐛","벌레"],["cut","🩹","베인 상처"],["hot","🥵","뜨거운"],["wet","💧","젖은"],["nap","😴","낮잠"],["cup","🥤","컵"],["pill","💊","알약"],["mask","😷","마스크"],["bag","👜","가방"],["van","🚐","승합차"],["pen","🖊️","펜"],["cap","🧢","모자"],["red","🔴","빨간색"],["kit","🧰","구급 상자"],["egg","🥚","달걀"],["nut","🥜","땅콩"],["pet","🐶","반려동물"],["sad","😢","슬픈"],["sick","🤒","아픈"],["ten","🔟","열(10)"],["jab","💉","주사"],["tub","🛁","욕조"],["sun","☀️","해"],["hug","🤗","안아 주기"],["mug","☕","머그잔"],["map","🗺️","지도"],["pot","🍲","냄비"],["net","🥅","그물"],["pan","🍳","프라이팬"],["hen","🐔","암탉"],["hill","⛰️","언덕"],["tag","🏷️","이름표"]];
const EW=Object.fromEntries(EWORD.map(w=>[w[0],w]));
const ERHY=[["bed","red"],["bug","hug","mug"],["nap","cap","map"],["cut","nut"],["hot","pot"],["wet","pet","net"],["van","pan"],["pen","ten","hen"],["bag","tag"],["pill","hill"]];
const ESEN=[["My leg is hot.","다리가 뜨거워요.","🦵"],["I cut my lip.","입술을 베였어요.","👄"],["A bug bit my leg.","벌레가 다리를 물었어요.","🐛"],["I am hot.","몸이 뜨거워요.","🥵"],["I can not nap.","잠을 잘 수 없어요.","😴"],["I am sick.","아파요.","🤒"],["I am sad.","슬퍼요.","😢"],["I got wet.","몸이 젖었어요.","💧"],["I ate a nut. I am red.","땅콩을 먹고 몸이 빨개졌어요.","🥜"],["I need a pill.","알약이 필요해요.","💊"],["My pet is sick.","반려동물이 아파요.","🐶"],["I hit my leg on the bed.","침대에 다리를 부딪혔어요.","🛏️"],["I ate a bad egg.","상한 달걀을 먹었어요.","🥚"],["I sat in the sun. I am hot.","햇볕 아래 앉아 있었더니 몸이 뜨거워요.","☀️"]];
const OEN={steth:"stethoscope",bp:"cuff",eyechart:"eye chart",viewer:"x-ray",mon:"monitor",oto:"ear light",o2:"oxygen",chart:"chart",scope:"scope",thermo:"thermometer",tubes:"tubes",urine:"cup",swab:"swab",micro:"microscope",hammer:"hammer",light:"light",pills:"pills",syr:"shot",gluco:"sugar test",lens:"lens",tray:"tray",dish:"dish",amask:"mask",bal:"scale",spiro:"blow test",draw:"crayons",bed:"bed",optable:"table",incub:"incubator",couch:"sofa",bars:"bars",donut:"scanner",usg:"ultrasound",ivp:"drip",vent:"ventilator",dialm:"dialysis",eegm:"brain test",scale:"scale",toy:"bear",crutch:"crutches",cooler:"box",wheel:"wheelchair",height:"ruler",vax:"shot chart",tongue:"stick",model:"teeth",paste:"toothbrush",xray:"x-ray",chair:"chair",lamp:"lamp",mirror:"mirror",drill:"drill",suction:"tube",view:"hand x-ray",apron:"apron",booth:"window",ct:"CT",mri:"MRI",us:"ultrasound",sign:"sign"};
const eothers=(w,n,f)=>shuffle(EWORD.filter(x=>x[0]!==w[0]&&(!f||f(x)))).slice(0,n);
let egLast="";
function engTask(kind){
  kind=kind||pick(["w2p","w2p","p2w","first","rhyme","sen"]);
  if(kind==="sen"){let s;do{s=pick(ESEN);}while(s[0]===egLast);egLast=s[0];const ot=shuffle(ESEN.filter(x=>x!==s)).slice(0,2);
    return {kind:kind,say:s[0],head:"🌍 외국인 환자가 왔어요",big:s[0],q:"무슨 말일까? 듣고 골라 봐요.",o:shuffle([{h:s[2]+" "+s[1],ok:1}].concat(ot.map(x=>({h:x[2]+" "+x[1]})))),ex:`"${s[0]}" 는 "${s[1]}" 라는 뜻이에요.`};}
  if(kind==="rhyme"){const fam=pick(ERHY),a=fam[0],b=pick(fam.slice(1)),ot=eothers(EW[a],2,x=>!fam.includes(x[0])&&x[0].slice(-2)!==a.slice(-2));
    return {kind:kind,say:a,head:"🎵 끝소리가 같은 낱말",big:EW[a][1]+" "+a,q:`'${a}' 와 끝소리가 같은 낱말은?`,o:shuffle([{h:EW[b][1]+" "+b,ok:1,say:b}].concat(ot.map(x=>({h:x[1]+" "+x[0],say:x[0]})))),ex:`${a} 와 ${b} 는 끝소리 '-${a.slice(1)}' 가 같아요.`};}
  let w;do{w=pick(EWORD);}while(w[0]===egLast);egLast=w[0];
  if(kind==="w2p"){const ot=eothers(w,2);return {kind:kind,say:w[0],head:"🔤 낱말을 읽고 그림 찾기",big:w[0],q:"이 낱말은 어떤 그림일까?",pic:1,o:shuffle([{h:w[1],ok:1}].concat(ot.map(x=>({h:x[1]})))),ex:`${w[0]} 는 '${w[2]}' 이에요. ${w[0].split("").join(" · ")}`};}
  if(kind==="p2w"){const ot=eothers(w,2,x=>x[0][0]!==w[0][0]);return {kind:kind,say:w[0],head:"👂 듣고 낱말 찾기",big:w[1],q:"소리를 듣고 알맞은 낱말을 골라 봐요.",o:shuffle([{h:w[0],ok:1}].concat(ot.map(x=>({h:x[0]})))),ex:`${w[1]} ${w[0]} : '${w[2]}' 이에요.`};}
  const L="bcdfghjklmnprstvw".split("").filter(c=>c!==w[0][0]);const ot=shuffle(L).slice(0,2);
  return {kind:"first",say:w[0],head:"🔡 첫소리 찾기",big:w[1],q:"이 낱말은 어떤 글자의 소리로 시작할까?",letter:1,o:shuffle([{h:w[0][0],ok:1}].concat(ot.map(c=>({h:c})))),ex:`${w[0]} 는 '${w[0][0]}' 소리로 시작해요. ${w[1]} ${w[2]}`};
}
let eg=null;
function engHtml(t,done,nextAct,nextLabel){
  let h=`<div class="qhead"><h3>${t.head}</h3></div><div class="egbig${t.kind==="sen"?" sen":""}"><span>${t.big}</span><button class="saybtn" data-act="eg-say" data-t="${t.say}" aria-label="소리 듣기">🔊</button></div><p class="oq">${t.q}</p>
   <div class="opts egopts${t.pic?" pic":""}${t.letter?" let":""}" style="margin-top:8px">${t.o.map((o,i)=>`<button class="opt${done&&o.ok?" right":""}" data-act="eg-pick" data-k="${i}"${done&&!o.ok?' style="display:none"':""}>${o.h}</button>`).join("")}</div><div class="msg" id="egmsg"></div>`;
  if(done)h+=`<div class="result"><b>${pick(PRAISES)}</b><br>${t.ex}</div><button class="btn" data-act="${nextAct}">${nextLabel}</button>`;
  return h;
}
function engDraw(){
  if(!eg)return;const box=eg.room?$("obox"):$("engbox");
  box.innerHTML=(eg.room?`<div class="pt"><div class="face">🧑‍🦱</div><div class="bubble"><b>외국에서 온 환자가 들어왔어요.</b><br>영어로 말해요. 무슨 말인지 알려 줄래요?</div></div>`:"")+engHtml(eg.t,eg.done,eg.room?"eg-room":"eg-next",eg.room?"통역 끝! 다음 환자 🚪":"다음 →");
  if(!eg.room)$("enginfo").textContent="🔤 영어 별 ⭐ "+(st.eng||0)+" · 🔊 를 누르면 소리가 나와요";
}
function engNew(room,id){eg={t:engTask(room?"sen":null),done:0,room:room,id:id,w:0};engDraw();say(eg.t.say);}
function engAct(b){
  const a=b.dataset.act;
  if(a==="eg-say"){say(b.dataset.t);return;}
  if(!eg)return;
  if(a==="eg-next"){engNew(false);return;}
  if(a==="eg-room"){const id=eg.id;eg=null;encStart(id,true);return;}
  if(a==="eg-pick"){if(eg.done||b.classList.contains("wrong"))return;const o=eg.t.o[+b.dataset.k];if(o.say)say(o.say);
    if(o.ok){eg.done=1;st.eng=(st.eng||0)+1;save();refresh();
      if(eg.room)$("scn").querySelector("#spt").innerHTML=patG((EPOS[eg.id]||[186,142])[0],(EPOS[eg.id]||[186,142])[1],{shirt:"#5aa9e6",g:"m",big:1,blond:1},true);
      engDraw();}
    else{eg.w++;b.classList.add("wrong");(eg.room?$("obox"):$("engbox")).querySelector("#egmsg").textContent="음, 다시 들어 볼까? 🔊";}}
}

/* 마음 한마디: 진료 마무리에 가끔 나옴 */
const MINDQ=[
 {q:"주사를 맞기 전에 환자가 덜덜 떨어요. 뭐라고 말해 줄까?",o:["무서울 수 있어. 따끔하지만 금방 끝나. 내가 옆에 있을게.","하나도 안 아파. 정말이야.","울면 주사를 두 번 놓을 거야."],ex:"안 아프다고 거짓말하면 다음에는 믿지 않아요. 솔직하게 말하고 곁에 있어 주는 것이 가장 큰 힘이에요."},
 {q:"검사 결과를 기다리는 보호자가 두 손을 꼭 쥐고 있어요. 어떤 마음일까?",o:["걱정되고 초조한 마음","신나고 들뜬 마음","심심하고 지루한 마음"],ex:"기다리는 시간은 누구에게나 길고 불안해요. '곧 알려 드릴게요' 한마디가 도움이 돼요."},
 {q:"환자가 \"왜 나만 아파요?\" 하며 울먹여요. 뭐라고 말해 줄까?",o:["많이 속상했겠다. 아픈 건 네 잘못이 아니야.","다른 친구들은 더 많이 아파.","울지 마. 뚝!"],ex:"속상한 마음을 먼저 알아주는 것이 위로의 시작이에요."},
 {q:"치료를 마친 환자가 활짝 웃으며 인사해요. 의사 선생님은 어떤 마음일까?",o:["뿌듯하고 기쁜 마음","화나는 마음","부끄러워 숨고 싶은 마음"],ex:"환자가 나아지는 모습을 보는 것이 의사에게 가장 큰 보람이에요."},
 {q:"입원한 어린이가 집에 가고 싶다며 시무룩해요. 뭐라고 말해 줄까?",o:["집이 그립구나. 나을 때까지 같이 힘내 보자.","여기가 집보다 훨씬 좋잖아.","그런 말은 하면 안 돼."],ex:"그리운 마음을 그대로 인정해 주면 마음이 한결 가벼워져요."},
 {q:"환자가 약이 써서 먹기 싫대요. 뭐라고 말해 줄까?",o:["쓰지? 먹고 나서 바로 물을 마시자. 약이 병과 싸워 줄 거야.","안 먹으면 혼날 줄 알아.","이건 약이 아니라 사탕이야."],ex:"약을 사탕이라고 속이면 위험해요. 왜 먹는지 알려 주고 도와주는 것이 좋아요."},
 {q:"할머니 환자가 잘 안 들려서 같은 것을 또 물어보세요. 어떻게 할까?",o:["천천히, 또박또박 다시 말씀드려요.","못 들은 척해요.","한숨을 쉬고 짧게 대답해요."],ex:"잘 들리지 않으면 불안해져요. 눈을 보고 천천히 말하면 훨씬 잘 알아들으세요."},
 {q:"진료실에 들어온 어린이가 엄마 뒤에 숨어요. 어떻게 할까?",o:["무릎을 굽혀 눈높이를 맞추고 이름을 불러 줘요.","얼른 나오라고 재촉해요.","모른 척하고 진찰부터 시작해요."],ex:"눈높이를 맞추면 덜 무서워요. 마음이 편해야 진찰도 잘 돼요."}];
let mqLast=-1;
function mindFor(){let i;do{i=Math.floor(Math.random()*MINDQ.length);}while(i===mqLast);mqLast=i;return Object.assign({ic:"💗"},MINDQ[i]);}
/* 오늘의 일정: 골고루 섞어서 하루 다섯 가지 */
const SCH={enc:["🩺","환자 진료",3],mind:["💗","마음 읽기",1],desk:["🛎️","안내",2],dx:["🔍","추리",1]},SCHN=4;
const schOrder=()=>{const mid=["mind","desk"],r=dnum()%2;return ["enc"].concat(mid.slice(r),mid.slice(0,r),["dx"]);};
const schN=()=>{const v=st.sch||0;return Math.floor(v/10)===dnum()?Math.min(SCHN,v%10):0;};
const schFloor=()=>[1,2,3,4,5,6,0][dnum()%7];
const schCnt=k=>k==="enc"?D.filter(d=>d.f===schFloor()).reduce((a,d)=>a+((st.ec&&st.ec[d.id])||0),0):k==="eng"?(st.eng||0):k==="mind"?(st.mind||0):k==="desk"?(st.guided||0):(st.dxn||0);
let schRun=null;
function schDraw(){
  const n=schN(),o=schOrder(),el=$("sch");if(!el)return;
  if(n<SCHN&&o[n]==="enc"&&(!schRun||schRun.k!=="enc"))schRun={k:"enc",base:schCnt("enc")};
  el.innerHTML=`<div class="schrow">${o.map((k,i)=>`<span class="${i<n?"dn":(i===n?"on":"")}">${i<n?"✅":SCH[k][0]}</span>`).join("<i></i>")}</div>`
    +(n>=SCHN?`<div class="schdone">🎉 오늘 일정 끝! 자유 시간이에요</div>`:(o[n]==="enc"?`<div class="schmis">🩺 오늘은 <b>${schFloor()?schFloor()+"층":"별관"}</b>에서 환자 ${SCH.enc[2]}명부터 진료해요 <i>${Math.min(SCH.enc[2],Math.max(0,schRun&&schRun.k==="enc"?schCnt("enc")-schRun.base:0))} / ${SCH.enc[2]}</i>${curF>=0&&curF!==schFloor()?" <small>🛗 엘리베이터를 타요</small>":""}</div>`:`<button class="btn schgo" id="schGo">▶ ${SCH[o[n]][0]} ${SCH[o[n]][1]}</button>`));
  if(n<SCHN&&o[n]==="enc"&&(!schRun||schRun.k!=="enc"))schRun={k:"enc",base:schCnt("enc")};
  $("liftp").querySelectorAll("[data-go]").forEach(b=>b.classList.toggle("today",n<SCHN&&o[n]==="enc"&&b.dataset.go===String(schFloor())));
  const b=$("schGo");if(b)b.onclick=()=>schStart();
  $("bld").querySelectorAll(".room.sp").forEach(d=>d.classList.toggle("lock",n<SCHN&&!window.ARIM_PV));
}
function schStart(){
  const n=schN();$("schbar").classList.remove("on");if(n>=SCHN){go("tour");return;}
  const k=schOrder()[n];if(k!=="enc"||!schRun||schRun.k!=="enc")schRun={k:k,base:schCnt(k)};
  if(k==="enc"){go("tour");return;}
  else{go(k);if(k==="desk")newPatient();else if(k==="dx")newCase();else if(k==="mind")newMind();else engNew(false);}
}
function schCheck(){
  if(!schRun)return;
  if(schCnt(schRun.k)-schRun.base>=SCH[schRun.k][2]){const n=Math.min(SCHN,schN()+1);st.sch=dnum()*10+n;schRun=null;save();
    $("schmsg").textContent=n>=SCHN?"🎉 오늘 일정을 모두 마쳤어요!":"✅ 오늘의 일정 "+n+" / "+SCHN;$("schNext").textContent=n>=SCHN?"자유 시간 🎈":"다음 할 일 ▶";$("schbar").classList.add("on");}
}
$("schNext").onclick=()=>{closeSheet();if(schN()>=SCHN){$("schbar").classList.remove("on");go("tour");}else schStart();};
$("backT").onclick=()=>{$("schbar").classList.remove("on");go("tour");};
window.HOSP={tpn:schN,total:SCHN,open:schStart};

/* 진료 준비: 내용을 먼저 보고 확인 문제를 풀어야 환자를 부를 수 있음 */
let prep=null;
const prepOk=id=>!!window.ARIM_PV||!!(st.pr&&st.pr[id]);
function prepStart(id){enc=null;osel=null;if(!prep||prep.id!==id)prep={id:id,i:0,q:null};$("qbox").style.display="none";$("obox").style.display="block";sceneMarks(id);prepDraw();}
function prepDraw(){
  const d=DM[prep.id],m=d.dz.length,n=m+2,i=prep.i,box=$("obox");
  let h=`<div class="qhead"><h3>📖 진료 준비</h3><span class="dots">${"●".repeat(Math.min(i+1,n))}${"○".repeat(Math.max(0,n-i-1))}</span></div>`;
  if(i===0)h+=`<div class="pcard"><h4>🩺 무슨 일을 할까?</h4><p>${d.say}</p><div class="tools">${d.tools.map(t=>`<span class="tool">${t}</span>`).join("")}</div></div>`;
  else if(i<=m){const z=d.dz[i-1];h+=`<div class="pcard"><h4><span>${z[0]}</span> ${z[1]}</h4><div class="s"><b>${d.dzt?"언제?":"😣 이럴 때 아파요"}</b><br>${z[2]}</div><div class="c"><b>${d.dzt?"어떻게?":"💊 이렇게 치료해요"}</b><br>${z[3]}</div></div>`;}
  else{
    if(!prep.q){const z=pick(d.dz);let ot=shuffle(d.dz.filter(x=>x!==z)).slice(0,2);
      if(ot.length<2){const more=shuffle(D.filter(x=>x!==d&&!x.dzt===!d.dzt).reduce((a,x)=>a.concat(x.dz),[])).filter(x=>x[1]!==z[1]&&!ot.some(o=>o[1]===x[1]));ot=ot.concat(more.slice(0,2-ot.length));}
      prep.q={z:z,o:shuffle([z].concat(ot))};}
    h+=`<p class="oq">✏️ 확인 문제: 무엇에 대한 설명일까?</p><div class="enote">${prep.q.z[2]}</div><div class="opts" style="margin-top:8px">${prep.q.o.map((o,k)=>`<button class="opt" data-act="pp-pick" data-k="${k}">${o[0]} ${o[1]}</button>`).join("")}</div><div class="msg" id="pmsg"></div>`;
  }
  h+=`<div class="prow">${i>0?`<button class="btn soft2" data-act="pp-prev">${i>m?"← 다시 보기":"← 이전"}</button>`:""}${i<=m?`<button class="btn" data-act="pp-next">${i===m?"확인 문제 풀기 ✏️":"다음 →"}</button>`:""}</div>`;
  box.innerHTML=h;
}
function prepAct(b){
  const a=b.dataset.act;if(!prep)return;const id=prep.id;
  if(a==="pp-next"){prep.i++;prep.q=null;prepDraw();$("obox").scrollIntoView({block:"nearest"});}
  else if(a==="pp-prev"){prep.i=Math.max(0,prep.i-1);prep.q=null;prepDraw();}
  else if(a==="pp-pick"){
    if(b.classList.contains("wrong")||b.classList.contains("right"))return;
    if(prep.q.o[+b.dataset.k]===prep.q.z){b.classList.add("right");(st.pr=st.pr||{})[id]=1;save();prep=null;refresh();sceneMarks(id);
      setTimeout(()=>{$("obox").innerHTML=`<div class="result"><b>🎉 진료 준비 끝!</b><br>이제 ${DM[id].name}의 환자를 만날 수 있어요.</div><button class="btn" data-act="en-new" data-id="${id}">🚪 환자를 불러요</button>`;},600);}
    else{b.classList.add("wrong");$("pmsg").textContent="'다시 보기'를 눌러 한 번 더 읽어 볼까? 💭";}
  }
}
