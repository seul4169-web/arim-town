/* 아림 약국 */
(function(){
  const root=document.getElementById("pp"),$=id=>root.querySelector("#"+id);
  const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const PR={count:["숫자를 잘 세었어요! 🌟","정확해요! 꼼꼼한 약사 선생님! 💊"],clock:["시계를 잘 읽었어요! ⏰","시간을 딱 맞췄어요! 👏"],cup:["눈금을 딱 맞췄어요! 👏","정확해요! 꼼꼼한 약사 선생님! 💊"]};
  let st={count:0,clock:0,cup:0};
  try{const v=JSON.parse(localStorage.getItem("arim-pharm1")||"null");if(v)st=Object.assign(st,v);}catch(e){}
  const save=()=>{try{localStorage.setItem("arim-pharm1",JSON.stringify(st));}catch(e){}};
  const RANKS=[[0,"🧪 약국 견학생"],[10,"💊 꼬마 약사"],[25,"⚗️ 조제 약사"],[45,"👑 약국장"]];
  let game="count",cur=null;
  const lv=()=>Math.min(2,Math.floor(st[game]/5));
  function distinct(ans,cands){const s=[ans];for(const c of shuffle(cands)){if(c>0&&!s.includes(c))s.push(c);if(s.length===3)break;}let k=1;while(s.length<3){if(!s.includes(ans+k))s.push(ans+k);k++;}return shuffle(s);}
  function clockSvg(h,m){
    const ha=((h%12)+m/60)*30,ma=m*6,pt=(a,r)=>[50+r*Math.sin(a*Math.PI/180),50-r*Math.cos(a*Math.PI/180)];
    let nums="";for(let i=1;i<=12;i++){const p=pt(i*30,36);nums+=`<text x="${p[0]}" y="${p[1]+3.5}" font-size="${i%3===0?10:7}" text-anchor="middle" fill="#5a5048" font-family="Jua,sans-serif">${i}</text>`;}
    const hp=pt(ha,20),mp=pt(ma,31);
    return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#fff" stroke="#7c6ee6" stroke-width="4"/>${nums}<line x1="50" y1="50" x2="${hp[0]}" y2="${hp[1]}" stroke="#33302e" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="50" x2="${mp[0]}" y2="${mp[1]}" stroke="#e8504f" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="50" r="3.5" fill="#33302e"/></svg>`;
  }
  function cupSvg(ml,minor){
    const y=v=>88-v*3.6;let t="";
    for(let v=0;v<=20;v++){if(v%5===0)t+=`<line x1="30" y1="${y(v)}" x2="44" y2="${y(v)}" stroke="#5a5048" stroke-width="1.5"/><text x="27" y="${y(v)+3}" font-size="8" text-anchor="end" fill="#5a5048" font-family="Jua,sans-serif">${v}</text>`;else if(minor)t+=`<line x1="30" y1="${y(v)}" x2="38" y2="${y(v)}" stroke="#a79d94" stroke-width="1"/>`;}
    return `<svg viewBox="0 0 100 100"><rect x="30" y="${y(ml)}" width="46" height="${88-y(ml)}" fill="#ff9ec0"/><path d="M30 10 L30 88 Q30 92 34 92 L72 92 Q76 92 76 88 L76 10" fill="none" stroke="#7c6ee6" stroke-width="3" stroke-linecap="round"/>${t}<text x="92" y="16" font-size="8" text-anchor="end" fill="#8a7f77" font-family="Jua,sans-serif">mL</text></svg>`;
  }
  const tstr=(h,m)=>h+"시"+(m?" "+m+"분":"");
  function make(){
    const L=lv();
    if(game==="count"){
      const slots=[["🌅","아침"],["☀️","점심"],["🌙","저녁"]],use=L===0?(Math.random()<.5?[0,2]:[0,1,2]):[0,1,2];
      const per=use.map(()=>L===0?rnd(1,2):rnd(1,3)),days=L===2?rnd(2,3):1,sum=per.reduce((a,b)=>a+b,0),ans=sum*days;
      cur={q:days>1?days+"일 동안 먹을 약은 모두 몇 알일까?":"하루에 먹을 약은 모두 몇 알일까?",
        show:`<div class="rx">${use.map((s,i)=>`<div><b>${slots[s][0]} ${slots[s][1]}</b>${"💊".repeat(per[i])}</div>`).join("")}${days>1?`<div><b>📅 기간</b>${days}일</div>`:""}</div>`,
        opts:distinct(ans,[ans-1,ans+1,ans+2,ans-2,sum]).map(v=>[v+"알",v===ans]),
        ex:per.join(" + ")+" = "+sum+(days>1?" , "+sum+"알씩 "+days+"일이면 "+ans+"알":"")+"이에요."};
    }else if(game==="clock"){
      const h=rnd(1,12),m=L===0?0:(L===1?[0,30][rnd(0,1)]:[0,15,30,45][rnd(0,3)]);
      const key=(a,b)=>a+":"+b,seen=[key(h,m)],ds=[];
      const tryAdd=(a,b)=>{a=((a-1+12)%12)+1;if(!seen.includes(key(a,b))&&ds.length<2){seen.push(key(a,b));ds.push([a,b]);}};
      shuffle([[h+1,m],[h-1,m],[h,(m+30)%60],[m===0?12:m/5,(h%12)*5],[h+3,m],[h+6,m]]).forEach(x=>tryAdd(x[0],x[1]));
      cur={q:"약 먹을 시간이에요. 맞는 시계를 골라 줘!",show:`<div class="rx" style="text-align:center"><b style="min-width:0">⏰ 약 먹을 시간</b> ${tstr(h,m)}</div>`,
        opts:shuffle([[clockSvg(h,m),true],...ds.map(d=>[clockSvg(d[0],d[1]),false])]),grid:true,
        ex:"짧은 바늘은 '시', 긴 바늘은 '분'을 가리켜요. "+(m===0?"긴 바늘이 12에 있으면 정각이에요.":m===30?"긴 바늘이 6에 있으면 30분이에요.":"긴 바늘이 "+(m/5)+"에 있으면 "+m+"분이에요.")};
    }else{
      const ml=L===0?[5,10,15,20][rnd(0,3)]:rnd(3,19),minor=L>0;
      const ds=distinct(ml,L===0?[5,10,15,20]:[ml-1,ml+1,ml+2,ml-2,ml+5,ml-5].filter(v=>v>0&&v<=20)).filter(v=>v<=20);
      while(ds.length<3){const v=rnd(1,20);if(!ds.includes(v))ds.push(v);}
      cur={q:"물약을 눈금에 맞게 따른 컵을 골라 줘!",show:`<div class="rx" style="text-align:center"><b style="min-width:0">🥄 물약</b> ${ml}mL</div>`,
        opts:ds.map(v=>[cupSvg(v,minor),v===ml]),grid:true,ex:"물약의 윗면이 숫자 "+ml+" 눈금에 닿으면 "+ml+"mL예요. 약은 정해진 양만큼만 먹어야 해요."};
    }
    cur.done=false;render();
  }
  function render(){
    let h=cur.show+`<div class="qtitle">${cur.q}</div><div class="${cur.grid?"pick3":"pick3"}">${cur.opts.map((o,i)=>`<button class="opt${cur.done?(o[1]?" right":" wrong"):""}" data-i="${i}">${o[0]}</button>`).join("")}</div><div class="msg" id="ppmsg"></div>`;
    if(cur.done)h+=`<div class="result"><b>${PR[game][Math.floor(Math.random()*2)]}</b><br>${cur.ex}</div><button class="btn soft" id="ppNext">다음 손님 🚪</button>`;
    $("ppbox").innerHTML=h;
    const tot=st.count+st.clock+st.cup;let r=RANKS[0][1];for(const [k,v] of RANKS)if(tot>=k)r=v;
    $("ppRank").textContent=r;$("ppSt").textContent="⭐ 약 세기 "+st.count+" · 약 시간 "+st.clock+" · 물약 "+st.cup;
    $("ppinfo").textContent=["쉬움","보통","어려움"][lv()]+" 단계 · 5개를 맞힐 때마다 조금씩 어려워져요";
    window.onProg&&window.onProg("p",tot,null,r,tot);
  }
  $("ppbox").addEventListener("click",e=>{
    if(e.target.closest("#ppNext")){make();return;}
    const b=e.target.closest(".opt");if(!b||cur.done||b.classList.contains("wrong"))return;
    if(cur.opts[Number(b.dataset.i)][1]){cur.done=true;st[game]++;save();render();}
    else{b.classList.add("wrong");$("ppmsg").textContent="음, 다시 세어 볼까? 💭";}
  });
  root.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{game=b.dataset.g;root.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x===b));make();});
  make();
})();
