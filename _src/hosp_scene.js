/* 진료실 */
const docG=(x,y,hair,o)=>`<g class="ob" data-o="doc"><rect class="hit" x="${x-19}" y="${y-6}" width="38" height="84"/>${blk(x,y,Object.assign({coat:1,shirt:"#ffffff",hair:hair,pants:"#6b7c93"},o||{}))}</g>`;
const SCN={
ped:{doc:[236,138],svg:`<rect width="360" height="150" fill="#fff4d6"/><rect y="150" width="360" height="80" fill="#f1d7ad"/><rect y="147" width="360" height="5" fill="#e6c58f"/>
<rect x="150" y="20" width="62" height="50" rx="4" fill="#cfeaff" stroke="#fff" stroke-width="4"/><path d="M181 20v50M150 45h62" stroke="#fff" stroke-width="3"/><circle cx="198" cy="33" r="6" fill="#ffd66b"/>
<g class="ob" data-o="height"><rect class="hit" x="4" y="12" width="56" height="150"/><rect x="20" y="16" width="14" height="134" rx="3" fill="#fff" stroke="#e2a86b" stroke-width="1.5"/><path d="M20 30h7M20 44h5M20 58h7M20 72h5M20 86h7M20 100h5M20 114h7M20 128h5" stroke="#e2a86b" stroke-width="1.5"/><rect x="16" y="62" width="40" height="6" rx="3" fill="#f08a5d"/><rect x="8" y="150" width="46" height="8" rx="3" fill="#d9a56a"/></g>
<g class="ob" data-o="vax"><rect class="hit" x="64" y="14" width="68" height="74"/><rect x="70" y="20" width="56" height="62" rx="4" fill="#fff" stroke="#f0b7c7" stroke-width="2"/><rect x="70" y="20" width="56" height="14" rx="4" fill="#f08aa6"/><text x="98" y="30.5" text-anchor="middle" font-size="8.5" fill="#fff" font-family="Jua,sans-serif">예방접종</text><path d="M77 45h22M77 55h22M77 65h22M77 75h22" stroke="#e3dcd5" stroke-width="3" stroke-linecap="round"/><g fill="#58c29b"><circle cx="107" cy="45" r="3"/><circle cx="117" cy="45" r="3"/><circle cx="107" cy="55" r="3"/><circle cx="117" cy="55" r="3"/><circle cx="107" cy="65" r="3"/></g><g fill="none" stroke="#c9bfb6" stroke-width="1.2"><circle cx="117" cy="65" r="3"/><circle cx="107" cy="75" r="3"/><circle cx="117" cy="75" r="3"/></g></g>
<g class="ob" data-o="steth"><rect class="hit" x="228" y="16" width="44" height="90"/><circle cx="250" cy="24" r="3" fill="#b9a99e"/><path d="M240 30C238 62,262 62,260 30" fill="none" stroke="#6b7c93" stroke-width="3" stroke-linecap="round"/><circle cx="240" cy="29" r="2.6" fill="#33302e"/><circle cx="260" cy="29" r="2.6" fill="#33302e"/><path d="M250 54C250 70,244 78,250 88" fill="none" stroke="#6b7c93" stroke-width="3"/><circle cx="250" cy="94" r="7.5" fill="#dfe6ee" stroke="#8a97a8" stroke-width="2"/></g>
<ellipse cx="314" cy="181" rx="46" ry="4" fill="#000" opacity=".12"/><path d="M272 114L282 103H360L356 114z" fill="#e0ad77"/><rect x="286" y="110" width="6" height="64" fill="#a06a3c"/><rect x="272" y="114" width="84" height="7" rx="2" fill="#c98d5a"/><rect x="278" y="121" width="6" height="58" fill="#b47a48"/><rect x="344" y="121" width="6" height="58" fill="#b47a48"/><rect x="300" y="121" width="44" height="22" fill="#d9a56a"/><circle cx="322" cy="132" r="2" fill="#b47a48"/>
<g class="ob" data-o="thermo"><rect class="hit" x="272" y="78" width="36" height="38"/><path d="M288 92l-4 -9h8z" fill="#8ab6d6"/><rect x="282" y="91" width="12" height="23" rx="5" fill="#fff" stroke="#8ab6d6" stroke-width="1.5"/><rect x="285" y="96" width="6" height="6" rx="1" fill="#bfe3ff"/><circle cx="288" cy="108" r="1.6" fill="#f08a5d"/></g>
<g class="ob" data-o="tongue"><rect class="hit" x="310" y="76" width="44" height="40"/><path d="M327 97l-3 -15M331 97v-16M335 97l3 -15" stroke="#e2b77e" stroke-width="3" stroke-linecap="round"/><rect x="322" y="94" width="18" height="20" rx="3" fill="#e9f6ff" stroke="#9cc7e6" stroke-width="1.5"/><rect x="343" y="100" width="5" height="14" rx="2.5" fill="#f2c94c"/><rect x="343" y="97" width="5" height="4" rx="1" fill="#fff" stroke="#f2c94c"/></g>
<ellipse cx="162" cy="179" rx="64" ry="5" fill="#000" opacity=".12"/><g class="ob" data-o="bed"><rect class="hit" x="96" y="104" width="134" height="60"/><path d="M122 132v36M218 132v36" stroke="#b9c3cd" stroke-width="3.5" stroke-linecap="round"/><path d="M108 142v36M204 142v36" stroke="#8a97a8" stroke-width="4" stroke-linecap="round"/><path d="M100 130L114 116H226L212 130z" fill="#b4e6da"/><path d="M212 130L226 116V128L212 144z" fill="#6fb8a6"/><rect x="100" y="130" width="112" height="14" rx="3" fill="#8fd0c0"/><path d="M140 129L152 117H222L210 129z" fill="#fff" opacity=".8"/><path d="M106 128L116 118H144L134 128z" fill="#fff" stroke="#d6e4ea"/><rect x="106" y="126" width="28" height="5" rx="2" fill="#eef3f6"/></g>
<ellipse cx="85" cy="210" rx="32" ry="4" fill="#000" opacity=".13"/><g class="ob" data-o="scale"><rect class="hit" x="52" y="172" width="66" height="44"/><path d="M60 190L68 180H116L110 190z" fill="#fff" stroke="#aab6c3" stroke-width="1.5" stroke-linejoin="round"/><rect x="58" y="192" width="54" height="16" rx="6" fill="#cfd8e2" stroke="#aab6c3" stroke-width="1.5"/><rect x="60" y="186" width="50" height="10" rx="5" fill="#f4f7fa" stroke="#aab6c3" stroke-width="1.5"/><circle cx="85" cy="201" r="5" fill="#fff" stroke="#8a97a8"/><path d="M85 201l3 -3" stroke="#e8504f" stroke-width="1.5" stroke-linecap="round"/></g>
<ellipse cx="172" cy="221" rx="15" ry="3" fill="#000" opacity=".14"/><g class="ob" data-o="toy"><rect class="hit" x="148" y="174" width="48" height="50"/><circle cx="163" cy="185" r="4.5" fill="#b97f4f"/><circle cx="181" cy="185" r="4.5" fill="#b97f4f"/><ellipse cx="172" cy="211" rx="10" ry="9" fill="#c9925e"/><ellipse cx="172" cy="212" rx="5.5" ry="5" fill="#f3dcc0"/><circle cx="161" cy="207" r="3.5" fill="#c9925e"/><circle cx="183" cy="207" r="3.5" fill="#c9925e"/><circle cx="172" cy="193" r="10.5" fill="#c9925e"/><ellipse cx="172" cy="196" rx="4.2" ry="3.2" fill="#f3dcc0"/><circle cx="168" cy="191" r="1.3" fill="#33302e"/><circle cx="176" cy="191" r="1.3" fill="#33302e"/><circle cx="172" cy="195" r="1.2" fill="#33302e"/></g>`,
obs:[
{k:"height",e:"📏",name:"키 재는 자",mk:[46,22],look:"벽에 붙은 긴 자예요. 주황색 막대를 머리 위에 살짝 내려서 키를 재요.",q:[
 ["키를 잴 때 신발을 벗고 등을 벽에 붙이는 이유는?","늘 같은 방법으로 재야 얼마나 자랐는지 견줄 수 있어서","벽에 등을 대면 키가 조금 더 자라서","신발을 신으면 자의 눈금이 안 보여서","신발 굽이나 구부정한 자세 때문에 키가 다르게 나오면, 정말 자랐는지 알 수 없어요."],
 ["같은 날에 키를 재면 아침과 저녁 중 언제 조금 더 클까?","아침에 조금 더 커요","저녁에 조금 더 커요","하루 종일 똑같아요","낮 동안 서서 지내면 등뼈 사이의 말랑한 쿠션이 눌려요. 자는 동안 다시 펴져서 아침에 조금 더 커요."]]},
{k:"scale",e:"⚖️",name:"체중계",mk:[112,180],look:"올라서면 몸무게를 알려 줘요. 아기는 눕혀서 재는 체중계를 써요.",q:[
 ["어린이에게 약을 줄 때 몸무게를 먼저 확인하는 이유는?","몸무게에 맞춰 약의 양을 정해야 해서","몸무게에 따라 약의 맛이 달라져서","무거운 어린이는 약이 필요 없어서","몸이 작으면 약도 조금만 필요해요. 그래서 같은 약도 어린이마다 양이 달라요."],
 ["갓 태어난 아기의 몸무게는 처음 며칠 동안 어떻게 될까?","조금 줄었다가 다시 늘어요","날마다 두 배씩 늘어요","한 달 동안 그대로예요","몸속의 물이 빠지면서 조금 줄지만, 젖을 잘 먹으면 1~2주 안에 태어날 때 몸무게로 돌아와요."]]},
{k:"steth",e:"🩺",name:"청진기",mk:[266,22],look:"몸속에서 나는 작은 소리를 크게 들려주는 도구예요.",q:[
 ["청진기를 대고 '숨을 크게 쉬어 보세요'라고 하는 이유는?","공기가 폐를 드나드는 소리를 또렷하게 들으려고","심장이 잠깐 쉬게 하려고","청진기가 따뜻해지게 하려고","숨을 크게 쉬면 공기가 폐 구석구석까지 들어가서, 이상한 소리가 있는지 잘 들려요."],
 ["의사 선생님이 청진기를 등에도 대는 이유는?","폐는 등 쪽에도 넓게 자리 잡고 있어서","등뼈가 움직이는 소리를 들으려고","등에서는 심장 소리가 더 크게 나서","폐의 아래쪽은 앞보다 등에서 더 잘 들려요. 그래서 앞과 뒤를 모두 들어 봐요."]]},
{k:"thermo",e:"🌡️",name:"귀 체온계",mk:[278,82],look:"귀에 살짝 넣으면 1초 만에 체온을 알려 줘요.",q:[
 ["체온을 손바닥이 아니라 귀 안에서 재는 이유는?","귀 안쪽이 몸속 온도와 더 비슷해서","귀가 몸에서 가장 차가운 곳이라서","귀에서 열이 만들어져서","손바닥은 바깥 공기에 따라 차가워지거나 따뜻해져요. 귀 안쪽은 몸속 온도에 가까워요."],
 ["체온이 보통 몇 도쯤부터 '열이 난다'고 할까?","38도쯤부터","36도쯤부터","34도쯤부터","우리 몸은 보통 36.5도쯤이에요. 균과 싸울 때 몸이 일부러 온도를 올려요."]]},
{k:"tongue",e:"👅",name:"혀 누르개와 작은 손전등",mk:[350,80],look:"'아~' 하고 입을 벌리면 나무 막대로 혀를 누르고 불빛을 비춰요.",q:[
 ["나무 막대로 혀를 살짝 누르는 이유는?","혀가 목 안쪽을 가리지 않게 하려고","혀가 튼튼한지 힘을 재려고","침이 덜 나오게 하려고","혀는 생각보다 두툼해서 목 안쪽을 가려요. 살짝 누르면 편도까지 잘 보여요."],
 ["목 안을 볼 때 의사 선생님이 찾는 것은?","편도가 빨갛게 부었는지, 하얀 점이 있는지","이가 모두 몇 개인지","혀가 얼마나 긴지","편도는 목 안쪽 양옆에 있는 면역 군인들의 초소예요. 균과 싸우면 빨갛게 부어요."]]},
{k:"vax",e:"💉",name:"예방접종 표",mk:[128,20],look:"언제 어떤 예방주사를 맞는지 적힌 표예요. 맞은 주사에는 초록 표시를 해요.",q:[
 ["예방주사를 맞은 자리가 조금 붓거나 미열이 날 수 있는 이유는?","면역 군인들이 싸우는 연습을 하고 있어서","주사약이 오래되어 상해서","바늘이 뼈에 닿아서","가짜 적을 보고 면역 군인들이 훈련하는 중이에요. 보통 하루 이틀이면 가라앉아요."],
 ["어떤 예방주사는 왜 여러 번 나누어 맞을까?","몸이 더 잘, 더 오래 기억하게 하려고","한 번에 넣기에는 약이 너무 차가워서","맞을 때마다 다른 병을 막아 줘서","공부도 복습하면 오래 기억하는 것처럼, 면역도 여러 번 연습하면 오래가요."]]},
{k:"bed",e:"🛏️",name:"진찰 침대",mk:[212,116],look:"누워서 배를 진찰받는 침대예요. 한 사람이 쓰고 나면 종이를 새로 깔아요.",q:[
 ["배를 진찰할 때 누워서 무릎을 세우라고 하는 이유는?","배 근육에 힘이 빠져서 속을 잘 만져 볼 수 있어서","다리에 피가 잘 통하게 하려고","누우면 배가 덜 아파서","무릎을 세우면 배가 말랑해져요. 배에 힘이 들어가면 속이 잘 만져지지 않아요."],
 ["의사 선생님이 배를 여기저기 눌러 보는 이유는?","어디가 아픈지, 딱딱하게 만져지는 곳이 있는지 찾으려고","소화가 빨리 되도록 도와주려고","배 속 공기를 빼 주려고","아픈 자리에 따라 어떤 장기가 아픈지 짐작할 수 있어요."]]},
{k:"toy",e:"🧸",name:"곰 인형",mk:[196,180],look:"진료실 바닥에 앉아 있는 곰 인형이에요.",q:[
 ["소아청소년과 진료실에 인형과 장난감을 두는 이유는?","무서운 마음을 줄여서 진찰을 편하게 받게 하려고","기다리는 동안 팔려고","의사 선생님이 쉬는 시간에 놀려고","마음이 편해야 울지 않고, 울지 않아야 숨소리와 심장 소리가 잘 들려요."],
 ["의사 선생님이 인형에게 먼저 청진기를 대 보이기도 해요. 왜일까?","어떻게 하는지 미리 보여 줘서 안심시키려고","인형도 감기에 걸릴 수 있어서","청진기가 고장 났는지 확인하려고","무엇을 할지 미리 알면 덜 무서워요. 아림이도 친구에게 이렇게 알려 줄 수 있어요."]]}
]},
dent:{doc:[56,134],mask:1,svg:`<rect width="360" height="150" fill="#dff3f1"/><rect y="150" width="360" height="80" fill="#c7dde3"/><rect y="147" width="360" height="5" fill="#b3cfd6"/>
<path d="M102 62L92 106L130 114L136 64z" fill="#fff9c9" opacity=".5"/>
<g class="ob" data-o="lamp"><rect class="hit" x="86" y="0" width="84" height="72"/><path d="M158 0v24l-34 26" fill="none" stroke="#9aa7b4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="118" cy="56" rx="22" ry="10" fill="#fff7c2" stroke="#e0b94f" stroke-width="2"/><circle cx="118" cy="56" r="4" fill="#ffe27a"/></g>
<ellipse cx="180" cy="199" rx="42" ry="5" fill="#000" opacity=".13"/><g class="ob" data-o="chair"><rect class="hit" x="84" y="100" width="128" height="100"/><ellipse cx="178" cy="194" rx="30" ry="6" fill="#8a97a8"/><ellipse cx="178" cy="191" rx="30" ry="6" fill="#aab6c3"/><rect x="172" y="158" width="12" height="34" fill="#9aa7b4"/><path d="M150 154L104 124" stroke="#4f9cc4" stroke-width="15" stroke-linecap="round"/><path d="M150 156H204" stroke="#4f9cc4" stroke-width="15" stroke-linecap="round"/><path d="M204 156L236 170" stroke="#4f9cc4" stroke-width="13" stroke-linecap="round"/><path d="M150 150L104 120" stroke="#6fb6d9" stroke-width="15" stroke-linecap="round"/><path d="M150 152H204" stroke="#6fb6d9" stroke-width="15" stroke-linecap="round"/><path d="M204 152L236 166" stroke="#6fb6d9" stroke-width="13" stroke-linecap="round"/><path d="M112 119L146 141M156 147H200" stroke="#a9d8ee" stroke-width="3" stroke-linecap="round" opacity=".8"/><ellipse cx="97" cy="111" rx="11" ry="7" fill="#4f9cc4" transform="rotate(34 97 111)"/><path d="M152 138h28" stroke="#4f9cc4" stroke-width="5" stroke-linecap="round"/></g>
<path d="M246 120V192" stroke="#aab6c3" stroke-width="4"/><ellipse cx="246" cy="193" rx="14" ry="4" fill="#8a97a8"/>
<g class="ob" data-o="mirror"><rect class="hit" x="214" y="80" width="60" height="44"/><path d="M218 115L226 107H280L272 115z" fill="#f4f7fa" stroke="#aab6c3"/><rect x="218" y="114" width="54" height="6" rx="2" fill="#cfd8e2" stroke="#aab6c3"/><path d="M228 112L240 95" stroke="#8a97a8" stroke-width="2.5" stroke-linecap="round"/><circle cx="242" cy="91" r="5.5" fill="#e9f6ff" stroke="#8a97a8" stroke-width="2"/><path d="M252 112L259 95q2 -4 5 -1" fill="none" stroke="#8a97a8" stroke-width="2" stroke-linecap="round"/></g>
<ellipse cx="318" cy="194" rx="40" ry="4" fill="#000" opacity=".12"/><path d="M282 129L292 119H358L350 129z" fill="#fff" stroke="#b9c6d2" stroke-width="1.2"/><path d="M350 129L358 119V182L350 192z" fill="#d5dde6" stroke="#b9c6d2" stroke-width="1.2"/><rect x="282" y="128" width="68" height="64" rx="3" fill="#f4f7fa" stroke="#b9c6d2" stroke-width="1.5"/><path d="M288 150h56M288 170h56" stroke="#dbe2ea" stroke-width="1.5"/>
<g class="ob" data-o="drill"><rect class="hit" x="280" y="84" width="34" height="46"/><rect x="293" y="99" width="7" height="30" rx="3" fill="#b9c6d2" stroke="#8a97a8"/><rect x="288" y="93" width="14" height="8" rx="3" fill="#8a97a8"/><path d="M290 101v7" stroke="#5b6b7a" stroke-width="1.6" stroke-linecap="round"/></g>
<g class="ob" data-o="suction"><rect class="hit" x="316" y="84" width="36" height="46"/><path d="M330 128V104q0 -9 9 -10" fill="none" stroke="#5aa9e6" stroke-width="6" stroke-linecap="round"/><circle cx="341" cy="93" r="3.5" fill="#fff" stroke="#5aa9e6" stroke-width="2"/></g>
<path d="M8 113L14 106H100L96 113z" fill="#dbe3ea"/><rect x="8" y="112" width="88" height="6" rx="2" fill="#b9c6d2"/><path d="M18 118v8M86 118v8" stroke="#b9c6d2" stroke-width="3"/>
<g class="ob" data-o="model"><rect class="hit" x="8" y="76" width="44" height="38"/><path d="M14 111q18 -30 36 0z" fill="#f4a9b5"/><path d="M19 107q13 -20 26 0" fill="none" stroke="#fff" stroke-width="5.5" stroke-dasharray="4 1.4"/></g>
<g class="ob" data-o="paste"><rect class="hit" x="54" y="72" width="42" height="42"/><path d="M70 99L78 81" stroke="#f08a5d" stroke-width="3" stroke-linecap="round"/><rect x="74.5" y="75" width="7" height="6" rx="1.5" fill="#fff" stroke="#c9bfb6" transform="rotate(24 78 78)"/><path d="M60 96h14l-2 16h-10z" fill="#bfe3ff" stroke="#7fb6dd" stroke-width="1.2"/><rect x="79" y="103" width="14" height="8" rx="2" fill="#fff" stroke="#58c29b" stroke-width="1.2"/><rect x="76.5" y="105" width="3" height="4" fill="#58c29b"/></g>
<g class="ob" data-o="xray"><rect class="hit" x="234" y="10" width="82" height="64"/><rect x="240" y="16" width="70" height="46" rx="5" fill="#1f2a3a" stroke="#8a97a8" stroke-width="2"/><path d="M250 32q25 22 50 0" fill="none" stroke="#e8eef5" stroke-width="7" stroke-dasharray="5 2"/><path d="M254 46q21 12 42 0" fill="none" stroke="#aab6c3" stroke-width="4" stroke-dasharray="4 2"/><rect x="270" y="62" width="10" height="6" fill="#8a97a8"/></g>`,
obs:[
{k:"chair",e:"💺",name:"치과 의자",mk:[196,136],look:"버튼을 누르면 위아래로 움직이고 뒤로 눕혀지는 의자예요.",q:[
 ["치과 의자가 뒤로 눕혀지는 이유는?","선생님이 입안 깊은 곳까지 잘 볼 수 있게 하려고","누우면 이가 덜 아프게 느껴져서","침이 목으로 잘 넘어가게 하려고","앉아 있으면 윗니 안쪽과 어금니가 잘 안 보여요. 눕히면 불빛도 잘 들어가요."],
 ["치료받다가 아프거나 불편하면 어떻게 하기로 약속할까?","손을 들어서 알려요","입을 꽉 다물어요","벌떡 일어나 앉아요","입을 벌리고 있어서 말을 못 하니까 손으로 신호를 보내요. 갑자기 움직이면 다칠 수 있어요."]]},
{k:"lamp",e:"💡",name:"큰 조명",mk:[146,46],look:"천장에서 내려온 팔 끝에 달린 밝은 등이에요. 손잡이로 방향을 바꿔요.",q:[
 ["치과 조명이 크고 밝은 이유는?","어둡고 좁은 입안을 그림자 없이 비추려고","빛으로 입안을 따뜻하게 데우려고","빛으로 충치 세균을 없애려고","입안은 동굴처럼 어두워요. 작은 구멍까지 찾으려면 아주 밝아야 해요."],
 ["치료받는 사람에게 색안경을 씌워 주기도 해요. 왜일까?","눈이 부시지 않고, 물이 튀어도 눈을 지키려고","잠이 잘 오게 하려고","입안이 더 잘 보이게 하려고","밝은 빛과 튀는 물방울에서 눈을 보호해요. 선생님도 보호 안경을 써요."]]},
{k:"mirror",e:"🪞",name:"치과 거울과 탐침",mk:[224,90],look:"손잡이 끝에 동그란 거울이 달려 있어요. 옆의 갈고리는 이를 살살 긁어 보는 탐침이에요.",q:[
 ["작은 치과 거울로 무엇을 할까?","바로 보이지 않는 이의 뒷면을 비춰 봐요","이를 문질러 하얗게 닦아요","흔들리는 이를 눌러 고정해요","거울에 비추면 윗니 안쪽이나 맨 뒤 어금니의 뒷면도 볼 수 있어요."],
 ["거울을 입에 넣기 전에 살짝 따뜻하게 하기도 해요. 왜일까?","입김 때문에 거울이 뿌옇게 되지 않게 하려고","차가우면 이가 깨질 수 있어서","따뜻하면 세균이 달아나서","추운 날 안경에 김이 서리는 것과 같아요. 거울이 따뜻하면 김이 덜 서려요."]]},
{k:"drill",e:"🌀",name:"치과 드릴",mk:[284,88],look:"끝이 아주 빠르게 돌면서 썩은 부분을 조금씩 갈아 내요.",q:[
 ["드릴을 쓸 때 물이 함께 나오는 이유는?","빠르게 돌 때 생기는 열을 식히려고","드릴 소리를 작게 줄이려고","물로 이를 단단하게 하려고","손바닥을 빨리 비비면 뜨거워지죠? 드릴도 이와 닿으면 뜨거워져서 물로 식혀 줘요."],
 ["충치를 그냥 두면 점점 더 아파지는 이유는?","구멍이 깊어져 이 속의 신경에 가까워져서","썩은 이가 점점 커져서","잇몸이 점점 단단해져서","이의 겉은 느낌이 없지만, 가운데에는 신경과 핏줄이 있어요. 일찍 치료할수록 덜 아파요."]]},
{k:"suction",e:"💨",name:"침 빨아들이는 관",mk:[352,88],look:"'쉬익' 소리를 내며 입안에 고인 물과 침을 빨아들이는 관이에요.",q:[
 ["치료 중에 물과 침을 계속 빨아들이는 이유는?","사레들지 않고, 치료할 곳이 잘 보이게 하려고","침에 세균이 하나도 없게 하려고","입안을 바짝 말려야 이가 하얘져서","누워 있으면 물이 목으로 넘어가기 쉬워요. 또 물이 고이면 이가 잘 안 보여요."],
 ["이를 메우기 전에 그 자리를 잘 말리는 이유는?","젖어 있으면 메우는 재료가 잘 붙지 않아서","마르면 이가 덜 아파서","물이 있으면 재료의 색이 변해서","젖은 종이에 스티커가 잘 안 붙는 것과 같아요."]]},
{k:"model",e:"🦷",name:"이 모형",mk:[14,80],look:"이 닦는 법을 알려 줄 때 쓰는 커다란 이 모형이에요.",q:[
 ["앞니와 어금니는 왜 모양이 다를까?","앞니는 자르고, 어금니는 잘게 갈아야 해서","앞니가 먼저 나서 닳았기 때문에","어금니가 더 오래된 이라서","앞니는 가위처럼 얇고, 어금니는 맷돌처럼 넓적해요. 하는 일에 맞는 모양이에요."],
 ["이의 가장 바깥쪽 하얀 껍질은 우리 몸에서 어떤 곳일까?","몸에서 가장 단단한 곳이에요","몸에서 가장 말랑한 곳이에요","머리카락처럼 계속 자라는 곳이에요","뼈보다도 단단해요. 하지만 한번 녹거나 깨지면 스스로 다시 자라지 않아요."]]},
{k:"paste",e:"🪥",name:"칫솔과 치약",mk:[94,76],look:"컵에 꽂힌 칫솔과 치약이에요.",q:[
 ["치약에 들어 있는 불소는 무슨 일을 할까?","이의 겉을 더 단단하게 해서 충치를 막아요","이를 달콤하게 만들어요","새 이가 빨리 나오게 해요","불소는 이의 겉껍질을 산에 더 잘 견디게 해 줘요."],
 ["어금니 씹는 면의 홈을 미리 메워 두는 치료는 왜 할까?","홈에 찌꺼기가 끼어 썩는 것을 막으려고","어금니를 더 크게 만들려고","나중에 뽑기 쉽게 하려고","어금니의 홈은 칫솔 털보다 좁아서 잘 안 닦여요. 미리 메우면 충치가 덜 생겨요."]]},
{k:"xray",e:"🖥️",name:"이 엑스레이 사진",mk:[316,14],look:"위아래 이를 한 번에 찍은 엑스레이 사진이에요.",q:[
 ["치과 엑스레이로 눈에 안 보이는 무엇을 볼 수 있을까?","잇몸 속의 이 뿌리와 숨어 있는 이","이의 색깔과 얼룩","혀에 있는 맛봉오리","이는 보이는 부분보다 잇몸 속 뿌리가 더 길어요. 이 사이에 숨은 충치도 찾을 수 있어요."],
 ["여섯 살 어린이의 엑스레이를 찍으면 젖니 아래에 무엇이 보일까?","나올 준비를 하는 어른 이","텅 비어 있어요","또 다른 젖니","어른 이는 잇몸 속에서 자라다가 젖니 뿌리를 녹이며 올라와요. 그래서 젖니가 흔들려요."]]}
]},
rad:{doc:[326,144],svg:`<rect width="360" height="150" fill="#e6ecf7"/><rect y="150" width="360" height="80" fill="#cbd3e1"/><rect y="147" width="360" height="5" fill="#b6c0d1"/>
<path d="M74 70L56 66M74 76L56 102" stroke="#f2b84b" stroke-width="1.5" stroke-dasharray="3 3"/>
<g class="ob" data-o="xray"><rect class="hit" x="12" y="54" width="50" height="60"/><rect class="hit" x="70" y="0" width="56" height="94"/><rect x="34" y="30" width="7" height="150" fill="#9aa7b4"/><ellipse cx="38" cy="182" rx="18" ry="5" fill="#8a97a8"/><path d="M54 62L60 58V102L54 106z" fill="#cfd6de" stroke="#8a97a8" stroke-width="1.2"/><rect x="20" y="62" width="34" height="44" rx="4" fill="#f4f6fa" stroke="#8a97a8" stroke-width="2"/><path d="M37 70v28M26 84h22" stroke="#cfd6de" stroke-width="1.5"/><rect x="97" y="0" width="8" height="62" fill="#9aa7b4"/><rect x="74" y="66" width="12" height="13" fill="#5b6b7a"/><rect x="84" y="60" width="36" height="25" rx="6" fill="#f2b84b" stroke="#c9902a" stroke-width="1.5"/></g>
<g class="ob" data-o="view"><rect class="hit" x="128" y="18" width="48" height="64"/><rect x="132" y="24" width="40" height="54" rx="4" fill="#1f2a3a" stroke="#8a97a8" stroke-width="2"/><path d="M142 66V50M147 66V42M152 66V38M157 66V42" stroke="#e8eef5" stroke-width="2.8" stroke-dasharray="7 1.8" stroke-linecap="round"/><path d="M162 66L166 55" stroke="#e8eef5" stroke-width="2.8" stroke-dasharray="6 1.8" stroke-linecap="round"/><rect x="140" y="67" width="23" height="6" rx="2" fill="#e8eef5"/></g>
<g class="ob" data-o="apron"><rect class="hit" x="178" y="20" width="44" height="86"/><circle cx="190" cy="27" r="2.2" fill="#8a97a8"/><circle cx="210" cy="27" r="2.2" fill="#8a97a8"/><path d="M190 28q-2 12 -6 16v54h32v-54q-4 -4 -6 -16q-10 12 -20 0z" fill="#4e8fb5" stroke="#3a7396" stroke-width="1.5" stroke-linejoin="round"/><path d="M184 68h32" stroke="#3a7396" stroke-width="3"/></g>
<g class="ob" data-o="sign"><rect class="hit" x="226" y="0" width="64" height="34"/><rect x="230" y="7" width="36" height="15" rx="3" fill="#e8504f"/><text x="248" y="18" text-anchor="middle" font-size="8.5" fill="#fff" font-family="Jua,sans-serif">촬영 중</text><circle cx="278" cy="15" r="9.5" fill="#ffd23f" stroke="#33302e" stroke-width="1.2"/><g fill="#33302e"><circle cx="278" cy="15" r="1.6"/><circle cx="278" cy="9.6" r="2.7"/><circle cx="282.7" cy="17.7" r="2.7"/><circle cx="273.3" cy="17.7" r="2.7"/></g></g>
<g class="ob" data-o="booth"><rect class="hit" x="224" y="38" width="66" height="62"/><rect x="228" y="42" width="58" height="40" rx="4" fill="#bfe3ff" stroke="#8a97a8" stroke-width="3"/><path d="M236 50l10 -6M240 58l16 -10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/><rect x="238" y="68" width="38" height="12" rx="2" fill="#5b6b7a"/><circle cx="246" cy="74" r="2" fill="#58c29b"/><circle cx="254" cy="74" r="2" fill="#ffd23f"/><circle cx="262" cy="74" r="2" fill="#e8504f"/><path d="M226 87L232 81H282L288 87z" fill="#c3ccd8"/><rect x="226" y="86" width="62" height="8" rx="2" fill="#9aa7b4"/></g>
<g class="ob" data-o="mri"><rect class="hit" x="298" y="30" width="56" height="110"/><rect x="298" y="30" width="56" height="120" fill="#b6c0d1"/><rect x="302" y="34" width="48" height="116" rx="2" fill="#f4f6fa" stroke="#8a97a8" stroke-width="2"/><circle cx="308" cy="98" r="2.5" fill="#8a97a8"/><text x="326" y="52" text-anchor="middle" font-size="11" fill="#5b6b7a" font-family="Jua,sans-serif">MRI</text><circle cx="326" cy="80" r="14" fill="#fff" stroke="#e8504f" stroke-width="3"/><path d="M319 87v-8a7 7 0 0 1 14 0v8" fill="none" stroke="#e8504f" stroke-width="4.5"/><path d="M319 87v-3M333 87v-3" stroke="#8a97a8" stroke-width="4.5"/><path d="M316 90L336 70" stroke="#e8504f" stroke-width="2.5"/></g>
<ellipse cx="160" cy="210" rx="56" ry="6" fill="#000" opacity=".13"/><g class="ob" data-o="ct"><rect class="hit" x="106" y="118" width="140" height="96"/><circle cx="162" cy="162" r="40" fill="#d3dae4" stroke="#8a97a8" stroke-width="2"/><rect x="200" y="184" width="14" height="22" fill="#9aa7b4"/><ellipse cx="207" cy="207" rx="19" ry="4.5" fill="#8a97a8"/><circle cx="150" cy="168" r="40" fill="#f4f6fa" stroke="#8a97a8" stroke-width="2"/><circle cx="150" cy="168" r="19" fill="#3f4b59" stroke="#8a97a8" stroke-width="2"/><path d="M137 160a15 15 0 0 1 22 -6" fill="none" stroke="#6b7c93" stroke-width="3" stroke-linecap="round"/><path d="M140 178L148 171H244L238 178z" fill="#b4e6da"/><rect x="140" y="177" width="98" height="8" rx="3" fill="#8fd0c0"/><text x="150" y="141" text-anchor="middle" font-size="9" fill="#5b6b7a" font-family="Jua,sans-serif">CT</text></g>
<ellipse cx="274" cy="206" rx="24" ry="4" fill="#000" opacity=".13"/><g class="ob" data-o="us"><rect class="hit" x="250" y="110" width="50" height="104"/><rect x="254" y="116" width="38" height="26" rx="3" fill="#1f2a3a" stroke="#8a97a8" stroke-width="2"/><path d="M273 121l-10 15q10 5 20 0z" fill="#aab6c3"/><rect x="270" y="142" width="6" height="8" fill="#8a97a8"/><path d="M288 154L294 149V192L288 198z" fill="#cfd6de" stroke="#8a97a8" stroke-width="1.2"/><rect x="258" y="152" width="30" height="46" rx="3" fill="#f4f6fa" stroke="#8a97a8" stroke-width="1.5"/><rect x="254" y="150" width="38" height="6" rx="2" fill="#dfe6ee" stroke="#8a97a8"/><rect x="263" y="166" width="8" height="15" rx="2" fill="#7fd6e8"/><rect x="265" y="162" width="4" height="5" fill="#4fb4c9"/><path d="M288 162q10 6 6 18" fill="none" stroke="#5b6b7a" stroke-width="1.5"/><rect x="290" y="178" width="7" height="14" rx="3" fill="#dfe6ee" stroke="#8a97a8"/><circle cx="263" cy="202" r="4" fill="#5b6b7a"/><circle cx="283" cy="202" r="4" fill="#5b6b7a"/></g>`,
obs:[
{k:"xray",e:"🩻",name:"엑스레이 기계",mk:[124,56],look:"노란 통에서 엑스레이가 나와서, 맞은편 하얀 판에 사진이 찍혀요.",q:[
 ["가슴 엑스레이에서 공기가 가득 든 폐는 어떤 색으로 보일까?","까맣게 보여요","하얗게 보여요","회색 줄무늬로 보여요","엑스레이가 잘 지나간 곳은 까맣게, 막힌 곳은 하얗게 나와요. 공기는 엑스레이를 막지 못해요."],
 ["가슴 사진을 찍을 때 '숨 들이마시고 참으세요'라고 하는 이유는?","폐가 크게 부풀고, 흔들리지 않아야 잘 보여서","숨을 참으면 엑스레이가 덜 들어와서","심장이 잠깐 멈춰야 해서","풍선을 불어야 무늬가 잘 보이는 것처럼, 폐도 부풀어야 구석구석 보여요."]]},
{k:"view",e:"🖐️",name:"손 엑스레이 사진",mk:[172,22],look:"어린이의 손을 찍은 엑스레이 사진이에요. 손가락뼈가 마디마디 보여요.",q:[
 ["어린이 손 사진에는 뼈 끝마다 가느다란 틈이 보여요. 무엇일까?","뼈가 자라는 성장판","뼈가 부러진 금","사진이 잘못 찍힌 자국","성장판은 말랑한 연골이라 까맣게 보여요. 다 자란 어른은 이 틈이 닫혀서 안 보여요."],
 ["뼈가 부러지면 엑스레이에서 어떻게 보일까?","하얀 뼈를 가로지르는 까만 금이 보여요","뼈 전체가 까맣게 변해요","부러진 뼈는 사진에 안 찍혀요","뼈가 갈라진 틈으로 엑스레이가 지나가서 까만 선으로 나타나요."]]},
{k:"apron",e:"🦺",name:"납 앞치마",mk:[220,24],look:"들어 보면 깜짝 놀랄 만큼 무거운 앞치마예요. 안에 납이 들어 있어요.",q:[
 ["앞치마 안에 무거운 납을 넣는 이유는?","납은 엑스레이를 잘 막아 줘서","무거워야 몸이 흔들리지 않아서","납이 몸을 따뜻하게 해 줘서","엑스레이는 살은 잘 지나가지만 납처럼 빽빽한 것은 잘 지나가지 못해요."],
 ["사진을 찍지 않는 곳을 납으로 가리는 이유는?","필요 없는 곳에는 엑스레이가 닿지 않게 하려고","가리면 사진이 더 밝게 나와서","가린 곳도 함께 찍히게 하려고","엑스레이는 꼭 필요한 곳에, 꼭 필요한 만큼만 써요."]]},
{k:"booth",e:"🪟",name:"조종실 유리창",mk:[232,60],look:"방사선사 선생님이 이 유리창 뒤에서 버튼을 눌러 사진을 찍어요.",q:[
 ["사진을 찍을 때 선생님이 유리창 뒤로 가는 이유는?","하루에도 수십 번 찍으니 엑스레이를 덜 받으려고","환자가 부끄러워할까 봐","기계가 뜨거워져서","한 번은 아주 적은 양이지만, 날마다 여러 번 받으면 쌓여요. 그래서 일하는 사람은 피해 있어요."],
 ["가끔 찍는 엑스레이 한 장은 왜 크게 걱정하지 않아도 될까?","아주 적은 양을 아주 잠깐만 쓰기 때문에","엑스레이가 옷을 통과하지 못해서","찍고 나서 물을 마시면 모두 빠져나가서","가슴 사진 한 장은 우리가 열흘쯤 지내며 자연에서 받는 양과 비슷할 만큼 적어요."]]},
{k:"ct",e:"🍩",name:"CT 기계",mk:[190,130],look:"침대에 누우면 도넛 구멍 속으로 천천히 들어가요. 도넛 안에서 엑스레이가 빙글빙글 돌아요.",q:[
 ["CT를 찍기 전에 '조영제'라는 약을 넣기도 해요. 왜일까?","혈관과 장기가 더 또렷하게 보이게 하려고","검사하는 동안 잠들게 하려고","엑스레이를 막아 몸을 지키려고","조영제가 흐르는 곳은 사진에서 하얗게 빛나요. 그래서 혈관의 모양을 알 수 있어요."],
 ["엑스레이 한 장으로는 어렵지만 CT로는 알 수 있는 것은?","앞뒤로 겹쳐 있는 장기를 따로따로 보는 것","피부의 색깔을 보는 것","뼈가 하얗게 보이는 것","엑스레이 한 장은 모든 것이 겹쳐 보여요. CT는 여러 방향에서 찍어 한 겹씩 나누어 보여 줘요."]]},
{k:"mri",e:"🧲",name:"MRI 방 문",mk:[348,38],look:"문에 '쇠붙이 금지' 표시가 붙어 있어요. 문 뒤에 MRI 기계가 있어요.",q:[
 ["MRI 방에 들어가기 전에 시계와 머리핀을 빼는 이유는?","큰 자석이 쇠붙이를 세게 끌어당겨서","사진에 얼굴이 예쁘게 안 나와서","검사 중에 잃어버릴까 봐","MRI 자석은 아주 강해서 쇠로 된 물건이 날아가 붙을 수 있어요. 그래서 꼭 확인해요."],
 ["MRI를 찍을 때 귀마개나 헤드폰을 쓰는 이유는?","기계에서 쿵쿵 큰 소리가 나서","소리로 사진을 찍기 때문에","귀에 자석이 들어갈까 봐","자석 속 부품이 빠르게 떨리면서 큰 소리가 나요. 귀를 보호하려고 막아요."]]},
{k:"us",e:"🔊",name:"초음파 기계",mk:[300,114],look:"손잡이처럼 생긴 탐촉자를 몸에 대면 화면에 몸속이 보여요. 옆에 젤 통이 있어요.",q:[
 ["초음파 검사를 할 때 미끌미끌한 젤을 바르는 이유는?","기계와 피부 사이의 공기를 없애 소리가 잘 전해지게 하려고","피부를 소독하려고","기계가 뜨거워서 식히려고","초음파는 공기를 만나면 튕겨 나와요. 젤이 틈을 메워서 소리가 몸속으로 들어가게 해요."],
 ["초음파로 뼈 뒤쪽이나 공기가 찬 폐 속을 잘 못 보는 이유는?","소리가 뼈와 공기에서 튕겨 나와 더 못 들어가서","뼈와 폐가 너무 멀리 있어서","화면이 너무 작아서","벽에 공을 던지면 튕겨 나오는 것과 같아요. 그래서 폐는 엑스레이로, 뼈 속은 MRI로 봐요."]]},
{k:"sign",e:"☢️",name:"촬영 중 표시등",mk:[294,22],look:"빨간 불이 켜지면 엑스레이를 찍고 있다는 뜻이에요. 노란 표시는 방사선을 쓰는 곳이라는 표시예요.",q:[
 ["문 위에 '촬영 중' 빨간 불이 켜져 있으면 어떻게 할까?","문을 열지 않고 불이 꺼질 때까지 기다려요","얼른 문을 열고 들어가요","문을 두드려 알려요","찍는 중에 문을 열면 필요 없는 엑스레이를 받을 수 있어요."],
 ["배 속에 아기가 있는 엄마는 엑스레이를 찍기 전에 꼭 말해야 해요. 왜일까?","자라는 아기는 엑스레이에 더 민감해서 조심하려고","아기 때문에 사진이 가려져서","엄마가 숨을 참기 어려워서","빠르게 자라는 세포일수록 엑스레이에 약해요. 그래서 다른 검사로 바꾸거나 배를 가려요."]]}
]}
};
const SDOC={ped:"#5a4636",dent:"#33302e",rad:"#7a5a3a"};
const osid=(id,k)=>SCN[id].obs.find(x=>x.k===k).lib?"_lib":id;
const ocur=(id,k)=>{const o=SCN[id].obs.find(x=>x.k===k),sd=o.lib?"_lib":id;return Math.min(o.q.length,(st.o[sd]&&st.o[sd][k])||0);};
const otot=id=>SCN[id]?SCN[id].obs.reduce((a,o)=>a+o.q.length,0):0;
const osol=id=>SCN[id]?SCN[id].obs.reduce((a,o)=>a+ocur(id,o.k),0):0;
let osel=null,ow=0;
const SCOL={ped:["#fff4d6","#f3deaa","#fffbf0","#f1d7ad","#dcbb86"],dent:["#dff3f1","#c2e0dd","#f4fbfa","#c7dde3","#a5c4cd"],rad:["#e6ecf7","#c9d3e6","#f5f8fc","#cbd3e1","#a9b5c9"]};
function sceneSvg(id){
  const S=SCN[id],C=SCOL[id]||FPAL[DM[id].f];let fl="";
  [18,72,126,180,234,288,342].forEach(x=>{fl+="M"+x+" 141L"+Math.round(180+(x-180)*2.1)+" 230";});
  [150,163,182,208].forEach(y=>{fl+="M0 "+y+"H360";});
  const FP="M18 141H342L360 160V230H0V160z";
  return `<svg viewBox="0 0 360 230" role="img" aria-label="${DM[id].name} 진료실"><defs>
   <linearGradient id="gW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".08"/></linearGradient>
   <linearGradient id="gF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".16"/><stop offset=".28" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".22"/></linearGradient>
   <linearGradient id="gS" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>
   <clipPath id="cF"><path d="${FP}"/></clipPath>
   <filter id="sh" x="-4%" y="-4%" width="110%" height="112%"><feDropShadow dx="1.4" dy="2.4" stdDeviation="1.3" flood-color="#28303c" flood-opacity=".26"/></filter></defs>
   <svg x="0" y="0" width="360" height="141" viewBox="0 0 1672 704" preserveAspectRatio="none" style="filter:hue-rotate(${({1:0,2:35,3:185,4:-55,5:65,6:115,0:160})[DM[id].f]||0}deg)"><image href="map/in_room.webp" width="1672" height="941"/></svg>
   <svg x="0" y="141" width="360" height="89" viewBox="0 704 1672 237" preserveAspectRatio="none"><image href="map/in_room.webp" width="1672" height="941"/></svg>
   <g transform="translate(18,6) scale(.9)"><g filter="url(#sh)">${S.svg.replace(/^(<rect [^>]*\/>){3}/,"")}${docG(S.doc[0],S.doc[1],SDOC[id]||S.hair,{mask:S.mask,long:(S.doc[0]+id.length)%2===0})}</g><g id="spt"></g><g id="smk"></g></g></svg>`;
}
function sceneMarks(id){
  const S=SCN[id],sc=$("scn");if(!sc)return;
  let h="";
  const sg=osel&&sc.querySelector('.ob[data-o="'+osel+'"] .hit');
  if(sg)h+=`<rect class="selr" x="${+sg.getAttribute("x")-2}" y="${+sg.getAttribute("y")-2}" width="${+sg.getAttribute("width")+4}" height="${+sg.getAttribute("height")+4}" rx="9"/>`;
  if(enc){
    if(enc.step===2)S.obs.forEach(o=>{h+=enc.used.includes(o.k)?`<text class="mkd" x="${o.mk[0]}" y="${o.mk[1]+5}" text-anchor="middle" font-size="13">✅</text>`:`<circle class="mkn mke" cx="${o.mk[0]}" cy="${o.mk[1]}" r="5.5"/>`;});
    sc.querySelector("#smk").innerHTML=h;
    $("scap").innerHTML=enc.step===2?"👆 그림 속 도구를 눌러서 살펴봐요":"🩺 진료 중이에요";
    $("encb").style.display="none";return;
  }
  S.obs.forEach(o=>{const c=ocur(id,o.k);h+=c>=o.q.length?`<text class="mkd" x="${o.mk[0]}" y="${o.mk[1]+5}" text-anchor="middle" font-size="14">⭐</text>`:`<circle class="mkn" cx="${o.mk[0]}" cy="${o.mk[1]}" r="5.5"/>`;});
  if(solved(id)<qlen(id))h+=`<circle class="mkn" cx="${S.doc[0]+16}" cy="${S.doc[1]}" r="5.5"/>`;
  sc.querySelector("#smk").innerHTML=h;
  const a=osol(id),t=otot(id);
  $("scap").innerHTML=a>=t?"🎉 진료실의 물건을 모두 살펴봤어요!":"🔎 반짝이는 물건을 눌러서 살펴봐요 <b>"+a+" / "+t+"</b>";
  const n=(st.ec&&st.ec[id])||0,eb=$("encb"),cl=encLeft(id).length===0;eb.style.display=ECASE[id]?"":"none";eb.classList.toggle("closed",cl);
  const pk=prepOk(id);eb.classList.toggle("prepb",!pk);
  eb.innerHTML=!pk?"📖 먼저 진료 준비를 해요":(cl?"🌙 오늘 진료 시간이 끝났어요 <small>내일 새 환자가 와요</small>":"🚪 다음 환자, 들어오세요!"+(n?" <small>지금까지 "+n+"명 진료</small>":""));
}
function openScene(id){
  const d=DM[id];osel=null;enc=null;if(eg&&eg.room)eg=null;if(prep&&prep.id!==id)prep=null;
  card.classList.add("wide");
  card.innerHTML=`<div class="top"><div class="e">${d.e}</div><div><h2>${d.name} 진료실</h2><div class="en">${d.en}</div><span class="where">${d.f?d.f+"층":"별관"} · ${FL[d.f][0]}</span></div><button class="x" data-act="close" aria-label="닫기">✕</button></div>
   <div class="scwrap"><div><div class="scn" id="scn">${sceneSvg(id)}</div><div class="scap" id="scap"></div><button class="btn encb" id="encb" data-act="en-new" data-id="${id}"></button></div>
   <div><div class="box b-ob" id="obox"><h3>👀 무엇을 해 볼까?</h3><p>🚪 <b>환자를 불러서</b> 묻고, 진찰하고, 치료해 봐요.<br>🔎 반짝이는 <b>물건과 선생님</b>을 누르면 숨은 문제가 나와요.</p></div>
   <div class="box b-q" id="qbox" style="display:none"></div></div></div>
   <div class="box b-work"><h3>🩺 무슨 일을 할까?</h3><p>${d.say}</p><div class="tools">${d.tools.map(t=>`<span class="tool">${t}</span>`).join("")}</div></div>
   <div class="dzh">${d.dzt||"🤒 이런 병을 치료해요"}</div>
   ${d.dz.map(z=>`<details><summary><span class="e">${z[0]}</span>${z[1]}</summary><div class="dzb"><div class="s"><b>${d.dzt?"언제?":"😣 이럴 때 아파요"}</b><br>${z[2]}</div><div class="c"><b>${d.dzt?"어떻게?":"💊 이렇게 치료해요"}</b><br>${z[3]}</div></div></details>`).join("")}`;
  renderQ(id);sceneMarks(id);
  $("scn").onclick=e=>{const g=e.target.closest(".ob");if(!g)return;
    if(eg&&eg.room)return;
    if(enc){if(enc.step===2&&g.dataset.o!=="doc")encExam(g.dataset.o);return;}
    osel=g.dataset.o;
    if(osel==="doc"){$("obox").style.display="none";$("qbox").style.display="block";renderQ(id);}
    else{$("qbox").style.display="none";$("obox").style.display="block";renderOb(id,osel);}
    sceneMarks(id);(osel==="doc"?$("qbox"):$("obox")).scrollIntoView({block:"nearest",behavior:"smooth"});};
  sheet.classList.add("open");card.scrollTop=0;
  if(!prepOk(id))prepStart(id);
}
function renderOb(id,k){
  const o=SCN[id].obs.find(x=>x.k===k),c=ocur(id,k),n=o.q.length,box=$("obox");ow=0;
  let h=`<div class="qhead"><h3>${o.e} ${o.name}</h3><span class="dots">${dots(c,c,n)}</span></div>${OEN[k]?`<button class="saybtn word" data-act="eg-say" data-t="${OEN[k]}">🔊 영어로 ${OEN[k]}</button>`:""}<p class="look">${o.look}</p>`;
  if(c>=n)h+=`<p class="odone">⭐ 이 물건의 문제를 모두 풀었어요. 다른 물건도 살펴볼까?</p>`;
  else{const q=o.q[c];
    h+=`<p class="oq">🤔 ${q[0]}</p><div class="opts" style="margin-top:10px">${shuffle([1,2,3]).map(i=>`<button class="opt" data-act="opick" data-id="${id}" data-o="${k}" data-k="${i}">${q[i]}</button>`).join("")}</div>
     <div class="msg" id="omsg"></div><div class="ans" id="oans"><div class="pr"></div><p>${q[4]}</p><button class="btn" data-act="onext" data-id="${id}" data-o="${k}">${c+1<n?"한 문제 더 →":"다른 물건 살펴보기 🔎"}</button></div>`;}
  box.innerHTML=h;
}
function obPick(b){
  if(b.classList.contains("wrong")||b.classList.contains("right"))return;
  const id=b.dataset.id,k=b.dataset.o;
  if(b.dataset.k==="1"){
    b.classList.add("right");card.querySelectorAll('[data-act="opick"]').forEach(x=>{if(x!==b)x.remove();});
    $("omsg").textContent="";const a=$("oans");a.querySelector(".pr").textContent=pick(PRAISES);a.classList.add("show");
    const c=ocur(id,k),sd=osid(id,k);(st.o[sd]=st.o[sd]||{})[k]=c+1;save();refresh();sceneMarks(id);
    window.TOWN&&TOWN.solved("h:"+sd+":o:"+k+":"+c,ow);
    a.scrollIntoView({block:"nearest",behavior:"smooth"});
  }else{ow++;b.classList.add("wrong");$("omsg").textContent="음, 다시 생각해 볼까? 💭";}
}
/* 오늘의 환자 */
const TPN=5;
const dnum=()=>{const n=new Date();return Math.floor((n.getTime()-n.getTimezoneOffset()*6e4)/864e5);};
const tpn=()=>{const v=st.tp||0;return Math.floor(v/10)===dnum()?Math.min(TPN,v%10):0;};
let tp=null,tpLast=null;
function tpSrc(d){
  const id=d.id,k=solved(id);
  if(k<qlen(id))return {t:"q",i:k,q:QS[id][k],fresh:1};
  if(SCN[id]){const os=SCN[id].obs.filter(o=>ocur(id,o.k)<o.q.length);if(os.length){const o=pick(os),c=ocur(id,o.k);return {t:"o",o:o,i:c,q:o.q[c],fresh:1};}}
  const i=Math.floor(Math.random()*qlen(id));return {t:"r",i:i,q:QS[id][i]};
}
function tpNew(){
  const all=D.filter(d=>d.id!==tpLast).map(d=>({d:d,s:tpSrc(d)})),fr=all.filter(x=>x.s.fresh);
  const c=pick(fr.length&&(Math.random()<.75||fr.length===all.length)?fr:all),d=c.d;tpLast=d.id;
  tp={d:d,s:c.s,p:pick(PATIENTS),step:d.pt?0:1,w:0,opts:shuffle([1,2,3])};
  if(d.pt){const others=shuffle(TARGETS.filter(x=>x.id!==d.id&&(!d.g||x.g!==d.g))).slice(0,2);tp.depts=shuffle([d,...others]);}
  tpDraw();
}
function tpDraw(){
  const n=tpn();card.classList.remove("wide");
  let h=`<div class="top"><div class="e">🚑</div><div><h2>오늘의 환자</h2><span class="where">${"💮".repeat(n)}${"○".repeat(TPN-n)} ${n} / ${TPN}</span></div><button class="x" data-act="close" aria-label="닫기">✕</button></div>`;
  if(!tp){h+=`<div class="result" style="margin-top:14px"><b>오늘의 환자 ${TPN}명을 모두 도왔어요! 🎉</b><br>내일 새로운 환자가 찾아와요.</div><button class="btn" data-act="close">병원 구경하기 🏥</button>`;card.innerHTML=h;return;}
  const d=tp.d,q=tp.s.q;
  if(d.pt)h+=`<div class="pt" style="margin-top:12px"><div class="face">${tp.p[0]}</div><div class="bubble"><b>${tp.p[1]} 병원에 왔어요!</b><br>"${d.pt}"</div></div>`;
  else h+=`<div class="pt" style="margin-top:12px"><div class="face">📟</div><div class="bubble"><b>${d.e} ${d.name}에서 불러요!</b><br>"아림 선생님, 도와주세요!"</div></div>`;
  if(tp.step===0)h+=`<div class="box b-q"><h3>🛎️ 어느 진료과로 보낼까?</h3><div class="opts" style="margin-top:8px">${tp.depts.map(o=>`<button class="opt" data-act="tpd" data-id="${o.id}">${o.e} ${o.name}</button>`).join("")}</div><div class="msg" id="tmsg"></div></div>`;
  else h+=`<div class="box b-q"><div class="qhead"><h3>${d.e} ${d.name}${tp.s.t==="o"?" · "+tp.s.o.e+" "+tp.s.o.name:""}</h3><span class="dots">${tp.s.t==="r"?"🔁 복습":"🆕 새 문제"}</span></div><p>${q[0]}</p>
    <div class="opts" style="margin-top:10px">${tp.opts.map(i=>`<button class="opt" data-act="tpa" data-k="${i}">${q[i]}</button>`).join("")}</div><div class="msg" id="tmsg"></div>
    <div class="ans" id="tans"><div class="pr"></div><p>${q[4]}</p><button class="btn" data-act="tpx">${n+1>=TPN?"오늘의 환자 끝! 🎉":"다음 환자 🚪"}</button></div></div>`;
  card.innerHTML=h;card.scrollTop=0;
}
function tpOpen(){sheet.classList.add("open");if(tpn()>=TPN){tp=null;tpDraw();}else if(!tp||tp.done)tpNew();else tpDraw();}
function tpAct(b){
  const a=b.dataset.act;
  if(a==="tpd"){if(b.classList.contains("wrong"))return;
    if(b.dataset.id===tp.d.id){b.classList.add("right");setTimeout(()=>{if(tp&&tp.step===0){tp.step=1;tpDraw();}},650);}
    else{b.classList.add("wrong");$("tmsg").textContent="음, 다시 생각해 볼까? 💭 "+DM[b.dataset.id].name+"는 다른 곳을 치료해요.";}}
  else if(a==="tpa"){if(b.classList.contains("wrong")||b.classList.contains("right")||tp.done)return;
    if(b.dataset.k==="1"){tp.done=1;b.classList.add("right");card.querySelectorAll('[data-act="tpa"]').forEach(x=>{if(x!==b)x.remove();});
      $("tmsg").textContent="";const an=$("tans");an.querySelector(".pr").textContent=pick(PRAISES);an.classList.add("show");
      const id=tp.d.id,s=tp.s;
      if(s.t==="q"&&solved(id)===s.i){st.q[id]=s.i+1;window.TOWN&&TOWN.solved("h:"+id+":"+s.i,tp.w);}
      else if(s.t==="o"&&ocur(id,s.o.k)===s.i){const sd=osid(id,s.o.k);(st.o[sd]=st.o[sd]||{})[s.o.k]=s.i+1;window.TOWN&&TOWN.solved("h:"+sd+":o:"+s.o.k+":"+s.i,tp.w);}
      st.tp=dnum()*10+Math.min(TPN,tpn()+1);save();refresh();an.scrollIntoView({block:"nearest",behavior:"smooth"});
    }else{tp.w++;b.classList.add("wrong");$("tmsg").textContent="음, 다시 생각해 볼까? 💭";}}
  else if(a==="tpx"){if(tpn()>=TPN){tp=null;tpDraw();}else tpNew();}
}
window.HOSP={tpn:tpn,total:TPN,open:tpOpen};
