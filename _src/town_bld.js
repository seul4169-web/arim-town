/* 새 건물 6개: 공통 엔진 */
(function(){
const CFG=[
{key:"e",hash:"rescue",name:"아림 119 구급대",short:"119 구급대",emoji:"🚒",color:"#e8504f",bg:"#ffe9e7",icons:["🚒","📞","🚑"],
 ranks:["🚒 구급대 견학생","🧯 꼬마 구급대원","🚑 구급대원","🏅 구급대장"],
 tabs:[
 {id:"aid",label:"🚑 응급처치",type:"quiz",items:[
  ["코피가 나요. 어떻게 할까?","고개를 살짝 앞으로 숙이고 코 아래쪽을 꼭 잡아요","고개를 뒤로 젖혀요","코를 세게 풀어요","고개를 젖히면 피가 목으로 넘어가요. 10분쯤 꼭 잡고 있어요."],
  ["뜨거운 물에 손을 데었어요.","흐르는 시원한 물에 15분쯤 식혀요","얼음을 바로 올려요","치약을 발라요","시원한 물이 열을 빼 줘요. 얼음이나 치약은 피부를 더 다치게 할 수 있어요."],
  ["넘어져서 무릎에서 피가 나요.","깨끗한 물로 씻고, 깨끗한 천으로 꾹 눌러요","흙만 털고 계속 놀아요","입으로 빨아요","씻어서 균을 없애고, 눌러서 피를 멈춰요."],
  ["발목을 삐끗했어요.","움직이지 않고 얼음찜질을 해요","아파도 계속 뛰어요","뜨거운 물에 담가요","쉬고, 차갑게 하고, 높이 올려 두면 붓기가 줄어요."],
  ["벌에 쏘였어요.","어른에게 말하고, 쏘인 곳을 씻고 차갑게 해요","손톱으로 꾹 짜요","벌을 잡으러 쫓아가요","입술이 붓거나 숨쉬기 힘들면 바로 119에 신고해요."],
  ["친구가 음식이 목에 걸려서 캑캑거려요.","기침을 계속하게 하고 바로 어른을 불러요","물을 억지로 먹여요","바닥에 눕혀요","기침은 걸린 것을 밀어내는 힘이에요. 숨을 못 쉬면 바로 119!"],
  ["친구가 갑자기 쓰러져서 불러도 대답이 없어요.","큰 소리로 어른을 부르고 119에 신고해요","혼자서 계속 흔들어 깨워요","무서워서 집에 가요","빨리 알리는 것이 생명을 구해요."],
  ["동생이 약인지 사탕인지 모르는 것을 먹었어요.","바로 어른에게 말하고, 먹은 통을 보여 줘요","괜찮겠지 하고 기다려요","목에 손을 넣어 토하게 해요","무엇을 얼마나 먹었는지 알아야 치료할 수 있어요."],
  ["넘어져서 어른 이(영구치)가 쏙 빠졌어요.","이를 우유에 담가서 빨리 치과에 가요","휴지에 싸서 버려요","비누로 박박 닦아요","뿌리를 만지지 않고 우유에 담가 가면 다시 심을 수도 있어요."],
  ["머리를 세게 부딪혔는데 지금은 안 아파요.","괜찮아 보여도 어른에게 꼭 말해요","비밀로 해요","바로 낮잠을 자요","머리는 시간이 지난 뒤에 증상이 나타날 수 있어요."],
  ["더운 날 밖에서 놀다가 어지럽고 머리가 아파요.","그늘에서 쉬면서 물을 마셔요","계속 뛰어놀아요","두꺼운 옷을 더 입어요","몸이 너무 뜨거워진 거예요. 몸을 식히고 물을 채워 줘요."],
  ["집에 불이 나서 연기가 나요.","몸을 낮추고 밖으로 나가서 119에 신고해요","장난감을 챙기러 방에 가요","옷장 속에 숨어요","연기는 위로 올라가서 아래쪽 공기가 더 맑아요. 숨으면 구조대가 찾기 어려워요."]]},
 {id:"seq",label:"📞 순서",type:"order",items:[
  {t:"119에 신고하는 순서",s:["119를 눌러요","무슨 일인지 말해요","어디인지 말해요","끊으라고 할 때까지 기다려요"],ex:"침착하게 또박또박 말해요. 먼저 끊지 않아요."},
  {t:"뜨거운 것에 데었을 때",s:["뜨거운 것에서 멀어져요","흐르는 시원한 물에 식혀요","깨끗한 천으로 살짝 덮어요","어른과 병원에 가요"],ex:"가장 먼저 열을 식히는 것이 중요해요."},
  {t:"무릎에서 피가 날 때",s:["어른을 불러요","깨끗한 물로 씻어요","깨끗한 천으로 꾹 눌러요","반창고를 붙여요"],ex:"씻기 → 누르기 → 덮기 순서예요."},
  {t:"쓰러진 사람을 봤을 때",s:["어깨를 두드리며 불러 봐요","큰 소리로 어른을 불러요","119에 신고해요","구급대가 올 때까지 곁에 있어요"],ex:"혼자 해결하려 하지 말고 빨리 알려요."},
  {t:"구급차가 환자를 옮기는 순서",s:["119 신고","구급차 출동","구급대원의 응급처치","병원 응급실 도착"],ex:"구급대원은 병원에 가는 동안에도 치료를 해요."}]}]},
{key:"v",hash:"vet",name:"아림 동물병원",short:"동물병원",emoji:"🐾",color:"#e08a1e",bg:"#fff3de",icons:["🐶","🐱","🐰"],
 ranks:["🐾 동물병원 견학생","🐶 꼬마 수의사","🩺 수의사","🏅 동물병원 원장"],
 tabs:[
 {id:"care",label:"🐶 동물 진료",type:"quiz",items:[
  ["🐶 강아지가 초콜릿을 먹었어요. 왜 위험할까?","초콜릿 속 성분이 강아지 몸에는 독이 돼서","너무 달아서 이가 썩어서","배가 불러서","사람은 괜찮아도 강아지는 그 성분을 잘 분해하지 못해요. 바로 동물병원에 가요."],
  ["🐱 고양이가 켁켁거리며 털 뭉치를 토해요.","몸을 핥다가 삼킨 털이 뭉친 거예요","털을 일부러 먹은 거예요","감기에 걸린 거예요","고양이는 혀로 몸을 닦아요. 빗질을 자주 해 주면 줄어요."],
  ["🐰 토끼의 이가 너무 길어졌어요. 왜 그럴까?","토끼 이는 평생 자라서, 건초를 씹어 갈아야 해서","사탕을 먹어서","이를 안 닦아서","딱딱한 건초를 씹으면서 이가 알맞게 닳아요."],
  ["🐕 강아지에게 예방주사를 맞히는 이유는?","무서운 전염병을 미리 막으려고","털이 예뻐지라고","말을 잘 듣게 하려고","동물도 사람처럼 예방접종으로 병을 막아요."],
  ["🩺 수의사 선생님은 말 못 하는 동물이 어디가 아픈지 어떻게 알까?","만져 보고, 청진기로 듣고, 사진과 피검사를 해요","동물 말을 알아들어요","그냥 맞혀요","보호자에게 평소와 달라진 점도 자세히 물어봐요."],
  ["🐶 더운 날 강아지가 혀를 내밀고 헥헥거려요.","몸의 열을 식히는 중이에요","배가 고픈 거예요","웃고 있는 거예요","강아지는 사람처럼 온몸으로 땀을 흘리지 못해요."],
  ["🐹 햄스터를 만질 때 조심할 점은?","살살, 낮은 곳에서 만져요","꼬리를 잡고 들어요","손으로 꽉 쥐어요","작고 약해서 떨어지면 크게 다쳐요."],
  ["🐢 거북이 등껍질이 깨졌어요. 등껍질은 무엇일까?","몸에 붙어 있는 뼈예요","벗을 수 있는 집이에요","돌이에요","등껍질은 갈비뼈와 등뼈가 변한 것이라 벗을 수 없어요."],
  ["🐕 여름에 강아지 산책은 언제가 좋을까?","해가 약한 아침이나 저녁","가장 더운 한낮","언제든 상관없어요","한낮의 길바닥은 아주 뜨거워서 발바닥을 델 수 있어요."],
  ["🐈 고양이를 동물병원에 데려갈 때는?","이동 가방에 넣어서 가요","안고 뛰어가요","목줄 없이 걸어가요","낯선 곳에서 놀라 도망가지 않게 지켜 줘요."]]},
 {id:"cmp",label:"🔍 사람과 동물",type:"quiz",items:[
  ["강아지는 주로 어디로 땀을 흘릴까?","발바닥","등","머리","그래서 혀를 내밀고 헥헥거려서 열을 식혀요."],
  ["고양이가 어두운 곳에서 잘 보는 이유는?","눈 속에 빛을 한 번 더 비춰 주는 반사판이 있어서","눈에서 빛이 나와서","눈이 세 개라서","그래서 밤에 고양이 눈이 반짝여 보여요."],
  ["기린의 목뼈는 몇 개일까?","사람과 같은 7개","70개","1개","뼈 하나하나가 아주 길 뿐이에요."],
  ["소의 위는 몇 개의 방으로 되어 있을까?","4개","1개","10개","삼킨 풀을 다시 꺼내 씹는 '되새김질'을 해요."],
  ["새의 뼈가 가벼운 이유는?","뼈 속이 비어 있어서","뼈가 없어서","뼈가 종이로 되어 있어서","몸이 가벼워야 하늘을 날 수 있어요."],
  ["물고기는 무엇으로 숨을 쉴까?","아가미","폐","코","아가미로 물속에 녹아 있는 산소를 걸러요."],
  ["문어의 심장은 몇 개일까?","3개","1개","8개","다리는 8개, 심장은 3개예요."],
  ["뱀은 냄새를 무엇으로 맡을까?","날름거리는 혀","꼬리","비늘","혀로 공기 속 냄새 알갱이를 모아요."],
  ["개가 사람보다 훨씬 잘하는 것은?","냄새 맡기","색깔 구별하기","글 읽기","개의 코에는 냄새를 맡는 세포가 사람보다 훨씬 많아요."],
  ["사람과 작은 강아지 중 심장이 더 빨리 뛰는 쪽은?","작은 강아지","사람","똑같아요","몸집이 작은 동물일수록 심장이 빨리 뛰어요."]]}]},
{key:"f",hash:"kitchen",name:"튼튼 식당",short:"튼튼 식당",emoji:"🍱",color:"#3f9e48",bg:"#e8f7e4",icons:["🥦","🍚","🥛"],
 ranks:["🍱 식당 견학생","🥕 꼬마 영양사","👩‍🍳 영양사","🏅 영양 박사"],
 tabs:[
 {id:"tray",label:"🍽️ 환자 식판",type:"quiz",items:[
  ["🦴 뼈가 부러진 환자에게 좋은 음식은?","우유, 멸치, 두부","사탕과 젤리","탄산음료","칼슘이 뼈의 재료가 돼요."],
  ["😪 빈혈 환자에게 좋은 음식은?","소고기, 시금치, 달걀노른자","흰 쌀밥만","과자","철분이 적혈구를 만드는 재료예요."],
  ["💩 변비 환자에게 좋은 음식은?","채소, 과일, 물","치즈만 많이","튀김","식이섬유와 물이 똥을 부드럽게 해요."],
  ["🤢 배탈이 난 환자에게 알맞은 음식은?","부드러운 죽","매운 떡볶이","차가운 아이스크림","위와 창자가 쉴 수 있게 부드러운 음식을 먹어요."],
  ["🤧 감기 환자에게 좋은 것은?","따뜻한 물과 과일","차가운 탄산음료","짠 과자","물을 많이 마시면 목이 촉촉해지고 가래가 묽어져요."],
  ["🦷 충치가 잘 생기는 환자가 줄여야 할 것은?","끈적한 사탕과 젤리","우유","오이","끈적한 단것은 이에 오래 붙어 있어요."],
  ["📟 당뇨병 환자가 목마를 때 좋은 것은?","물","콜라","주스","단 음료는 피 속 설탕을 갑자기 올려요."],
  ["💪 근육을 키우려는 사람에게 좋은 음식은?","달걀, 닭고기, 두부","솜사탕","감자튀김","단백질이 근육의 재료예요."],
  ["🩹 수술받은 환자의 상처가 잘 아물려면?","단백질과 비타민을 골고루 먹어요","물만 마셔요","과자만 먹어요","새 살을 만들려면 재료가 필요해요."],
  ["📏 키가 쑥쑥 크려면 어떻게 먹어야 할까?","여러 가지 음식을 골고루","좋아하는 것 한 가지만","밥을 굶기","한 가지 음식에 모든 영양소가 들어 있지는 않아요."]]},
 {id:"nut",label:"🌈 영양소",type:"quiz",items:[
  ["밥, 빵, 국수에 많고 몸을 움직이는 힘을 주는 영양소는?","탄수화물","칼슘","비타민","자동차의 연료 같은 역할이에요."],
  ["고기, 생선, 달걀, 콩에 많고 근육과 살을 만드는 영양소는?","단백질","지방","물","몸을 짓는 벽돌이에요."],
  ["뼈와 이를 튼튼하게 하는 영양소는?","칼슘","철분","설탕","우유와 멸치에 많아요."],
  ["귤과 딸기에 많은 비타민은?","비타민 C","비타민 D","비타민 K","몸을 지키는 면역 군인을 도와줘요."],
  ["우리 몸의 절반보다 많은 부분을 차지하는 것은?","물","뼈","머리카락","몸의 60%쯤이 물이에요."],
  ["햇볕을 쬐면 피부에서 만들어지는 비타민은?","비타민 D","비타민 C","비타민 K","칼슘이 뼈에 잘 붙도록 도와줘요."],
  ["당근에 많고 눈 건강에 좋은 것은?","비타민 A","칼슘","탄수화물","어두운 곳에서 잘 보는 데 필요해요."],
  ["소금을 너무 많이 먹으면 힘들어하는 곳은?","콩팥과 핏줄","머리카락","손톱","혈압이 올라가고 콩팥이 바빠져요."]]}]},
{key:"c",hash:"health",name:"아림 보건소",short:"보건소",emoji:"🏛️",color:"#2f86c4",bg:"#e3f1fb",icons:["💉","📏","🧼"],
 ranks:["🏛️ 보건소 견학생","🧼 꼬마 보건 요원","💉 보건 요원","🏅 보건소장"],
 tabs:[
 {id:"vac",label:"💉 예방접종",type:"quiz",items:[
  ["예방주사 속에는 무엇이 들어 있을까?","힘을 뺀 균이나 균의 일부","비타민 주스","잠자는 약","몸이 균의 얼굴을 미리 외워 두게 해요."],
  ["예방주사를 맞은 뒤 팔이 조금 붓거나 열이 나기도 하는 이유는?","몸이 싸우는 연습을 하는 중이라서","주사를 잘못 맞아서","병에 걸려서","대부분 하루 이틀이면 괜찮아져요."],
  ["많은 사람이 예방접종을 하면 좋은 점은?","주사를 못 맞는 아기와 아픈 사람도 함께 지켜져요","주사가 안 아파져요","병원이 문을 닫아요","이것을 '집단 면역'이라고 해요."],
  ["예방접종 기록은 어디에 적어 둘까?","아기 수첩(예방접종 수첩)","일기장","달력 뒷면","언제 무엇을 맞았는지 알 수 있어요."],
  ["보건소는 어떤 곳일까?","동네 사람들의 건강을 지키는 곳","책을 빌리는 곳","불을 끄는 곳","예방접종, 건강 검사, 전염병 관리를 해요."],
  ["아기가 태어나서 가장 먼저 맞는 예방주사는?","B형 간염과 결핵(BCG)","키 크는 주사","감기 주사","태어난 지 한 달 안에 맞아요."],
  ["주사 맞을 때 덜 아프게 하는 방법은?","팔에 힘을 빼고 숨을 천천히 쉬어요","팔에 힘을 꽉 줘요","팔을 마구 흔들어요","근육이 말랑하면 덜 아파요."],
  ["홍역, 볼거리, 풍진을 한 번에 막는 주사의 이름은?","MMR","ABC","OMG","세 가지 병의 영어 첫 글자를 딴 이름이에요."]]},
 {id:"grow",label:"📏 쑥쑥 성장",type:"cmp"},
 {id:"stop",label:"🧼 전염병 막기",type:"quiz",items:[
  ["손은 어떻게 씻어야 할까?","비누로 30초 넘게","물로 3초","씻는 척만","손가락 사이와 손톱 밑까지 씻어요."],
  ["마스크는 어디까지 가려야 할까?","코와 입 모두","입만","턱만","코로도 균이 드나들어요."],
  ["전염병에 걸리면 집에서 쉬는 이유는?","다른 사람에게 옮기지 않으려고","학교가 싫어서","벌을 받아서","이것을 '격리'라고 해요."],
  ["창문을 열어 환기하면 좋은 이유는?","공기 속 균이 밖으로 나가서","방이 넓어져서","더 조용해져서","갇힌 공기에는 균이 모여 있어요."],
  ["밖에서 돌아오면 가장 먼저 할 일은?","손 씻기","간식 먹기","눈 비비기","밖에서 묻은 균을 먼저 없애요."],
  ["균이 몸으로 들어오는 문이 아닌 것은?","머리카락","입","코","균은 주로 입, 코, 눈으로 들어와요."],
  ["친구와 함께 쓰면 안 되는 것은?","칫솔과 물컵","색연필","공","침을 통해 균이 옮아요."],
  ["모기가 옮기는 병을 막으려면?","긴 옷을 입고, 고인 물을 없애요","모기와 친해져요","밤에 창문을 활짝 열어요","모기는 고인 물에 알을 낳아요."]]}]},
{key:"u",hash:"medschool",name:"아림 의과대학",short:"의과대학",emoji:"🎓",color:"#7a52c7",bg:"#efe8fb",icons:["🦴","🔬","📚"],
 ranks:["🎓 예비 의대생","📖 의대 신입생","🔬 의대 본과생","🏅 수석 졸업생"],
 tabs:[
 {id:"where",label:"🫀 장기 위치",type:"quiz",items:[
  ["심장은 어디에 있을까?","가슴 가운데에서 살짝 왼쪽","배꼽 아래","등 뒤 허리","내 주먹만 한 크기예요."],
  ["간은 어디에 있을까?","배의 오른쪽 위","왼쪽 다리","목","갈비뼈 아래에 숨어 있어요."],
  ["콩팥은 어디에 있을까?","등 쪽 허리 양옆","가슴 앞","무릎","양쪽에 하나씩 있어요."],
  ["위는 어디에 있을까?","배의 왼쪽 위","오른쪽 아랫배","머리","식도와 이어져 있어요."],
  ["충수(맹장 꼬리)는 어디에 있을까?","오른쪽 아랫배","왼쪽 가슴","등","그래서 충수염은 오른쪽 아랫배가 아파요."],
  ["뇌를 지키는 뼈는?","머리뼈","갈비뼈","골반뼈","헬멧처럼 뇌를 감싸고 있어요."],
  ["우리 몸에서 가장 긴 뼈는?","넓적다리뼈(허벅지 뼈)","손가락뼈","코뼈","키의 4분의 1쯤 돼요."],
  ["우리 몸에서 가장 작은 뼈는 어디에 있을까?","귀 속","발가락","코","소리를 전달하는 '등자뼈'예요."],
  ["방광은 어디에 있을까?","아랫배 가운데","가슴","목","오줌을 모아 두는 주머니예요."],
  ["폐는 몇 개일까?","2개","1개","4개","심장을 가운데 두고 오른쪽과 왼쪽에 있어요."]]},
 {id:"cell",label:"🔬 몸의 구성",type:"quiz",items:[
  ["세포가 모이면 무엇이 될까?","조직","돌","물","세포 → 조직 → 장기 → 몸 순서로 모여요."],
  ["근육은 어떻게 몸을 움직일까?","줄었다 늘었다 하면서 뼈를 당겨요","뼈를 밀어내요","피를 만들어요","근육은 뼈에 붙어 있어요."],
  ["피부, 머리카락, 손톱의 공통점은?","계속 새로 자라요","모두 뼈예요","모두 물이에요","그래서 잘라도 다시 자라요."],
  ["어른의 뼈는 모두 몇 개쯤일까?","206개","20개","2000개","아기는 300개쯤이에요."],
  ["우리 몸의 설계도가 들어 있는 것은?","DNA","위액","땀","엄마와 아빠에게서 반씩 물려받아요."],
  ["의사가 되려면 의과대학에서 몇 년쯤 공부할까?","6년","1년","6달","졸업한 뒤에도 인턴, 레지던트로 더 배워요."],
  ["의대생이 몸의 구조를 배우는 과목은?","해부학","체육","미술","뼈, 근육, 장기의 이름과 위치를 배워요."],
  ["몸이 균과 싸워 이기는 힘을 무엇이라고 할까?","면역","소화","반사","백혈구가 면역 군인이에요."]]},
 {id:"seq",label:"📚 순서",type:"order",items:[
  {t:"음식이 지나가는 길",s:["입","식도","위","작은창자","큰창자"],ex:"이 긴 길을 '소화관'이라고 해요."},
  {t:"숨이 들어가는 길",s:["코","기관","기관지","폐포"],ex:"폐포에서 산소가 피로 들어가요."},
  {t:"오줌이 나오는 길",s:["콩팥","요관","방광","요도"],ex:"콩팥에서 만들고, 방광에 모았다가 내보내요."},
  {t:"의사가 되는 길",s:["의대생","인턴","레지던트","전문의"],ex:"전문의가 되기까지 10년이 넘게 걸려요."},
  {t:"수술하는 날의 순서",s:["손 씻기","수술복 입기","마취하기","수술하기","꿰매기"],ex:"가장 먼저 균을 없애는 것부터 시작해요."},
  {t:"피가 도는 길",s:["심장","폐","심장","온몸"],ex:"피는 폐에서 산소를 받고, 심장으로 돌아와 온몸으로 나가요."}]}]},
{key:"l",hash:"lab",name:"아림 연구소",short:"연구소",emoji:"🧪",color:"#238a7d",bg:"#e0f5f1",icons:["🧪","🔎","🧫"],
 ranks:["🧪 연구소 견학생","🔎 꼬마 연구원","🧫 연구원","🏅 연구소장"],
 tabs:[
 {id:"why",label:"🤔 실험 예상",type:"quiz",items:[
  ["실험: 물로만 씻은 손과 비누로 씻은 손을 균 먹이 접시에 찍었어요. 며칠 뒤 균이 더 많이 자란 쪽은?","물로만 씻은 손","비누로 씻은 손","똑같아요","비누가 손의 기름때와 함께 균을 떼어 내요."],
  ["실험: 가만히 있을 때와 줄넘기를 한 뒤에 맥박을 쟀어요. 어느 쪽이 더 빠를까?","줄넘기를 한 뒤","가만히 있을 때","똑같아요","근육이 산소를 더 달라고 해서 심장이 빨리 뛰어요."],
  ["실험: 밥을 삼키지 않고 오래오래 씹으면 무슨 맛이 날까?","단맛","쓴맛","매운맛","침이 밥의 녹말을 단 성분으로 바꿔요."],
  ["실험: 달걀을 식초에 이틀 담가 두면 껍데기는 어떻게 될까?","녹아서 말랑해져요","더 단단해져요","색깔만 변해요","식초의 산이 껍데기의 칼슘을 녹여요. 이가 산에 녹는 것과 같은 원리예요."],
  ["실험: 밝은 곳에서 어두운 곳으로 가면 눈동자(동공)는?","커져요","작아져요","그대로예요","빛을 더 많이 받으려고 커져요."],
  ["실험: 빵 한 조각은 깨끗한 집게로, 한 조각은 안 씻은 손으로 만져서 봉지에 넣었어요. 곰팡이가 먼저 피는 쪽은?","손으로 만진 빵","집게로 집은 빵","똑같아요","손에 있던 균과 곰팡이 씨가 빵으로 옮겨 가요."],
  ["실험: 코를 막고 사과와 양파를 먹으면?","맛을 구별하기 어려워요","더 맛있어요","더 매워요","맛의 많은 부분은 사실 냄새예요."],
  ["실험: 눈을 감고 한 발로 서면?","눈을 떴을 때보다 더 흔들려요","더 잘 서요","똑같아요","몸의 균형은 귀와 눈이 함께 잡아요."],
  ["실험: 숨을 크게 들이쉬었을 때와 내쉬었을 때 가슴둘레를 쟀어요. 더 큰 쪽은?","들이쉬었을 때","내쉬었을 때","똑같아요","폐에 공기가 차서 가슴이 부풀어요."],
  ["과학자가 같은 실험을 여러 번 되풀이하는 이유는?","우연이 아니라 진짜인지 확인하려고","심심해서","실험 도구가 남아서","여러 번 해도 같은 결과가 나와야 믿을 수 있어요."]]}]}
];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const PR=["와, 잘 생각했어요! 🌟","척척박사네! 👏","스스로 알아냈어요! 💖","오늘도 한 뼘 더 똑똑해졌어요! 🧠✨"];
const praise=()=>PR[Math.floor(Math.random()*PR.length)];
const KIDS=["서아","도윤","하린","지호","유나","시우","다인","준우","소율","건우"];
CFG.forEach(c=>{
  let st={i:{},m:{},n:0};
  try{const v=JSON.parse(localStorage.getItem("arim-b-"+c.key)||"null");if(v)st=Object.assign(st,v);}catch(e){}
  const save=()=>{try{localStorage.setItem("arim-b-"+c.key,JSON.stringify(st));}catch(e){}};
  const root=document.createElement("div");root.className="place";root.id="p"+c.key;
  root.innerHTML=`<button class="backhome" onclick="goPlace('home')">← 🏘️ 아림 마을</button>
   <header class="bh"><h1 style="color:${c.color}">${c.emoji} ${c.name}</h1><div class="prog"><span class="rank" data-r></span><span data-s></span></div></header>
   <nav>${c.tabs.map((t,i)=>`<button data-t="${t.id}"${i?"":' class="on"'}>${t.label}</button>`).join("")}</nav>
   <main><div class="qz" data-box></div><div class="stamps" data-info></div></main>`;
  document.body.insertBefore(root,document.getElementById("rv"));
  const q=s=>root.querySelector(s),box=q("[data-box]"),info=q("[data-info]");
  let tab=c.tabs[0];
  c.tabs.forEach(t=>{if(t.items)t.base=t.items.length;});
  const fin=t=>t.type==="cmp"?0:t.items.length;
  const got=t=>t.type==="cmp"?0:t.type==="mission"?t.items.filter((x,i)=>st.m[t.id+":"+i]).length:Math.min(t.items.length,st.i[t.id]||0);
  const totalF=()=>c.tabs.reduce((a,t)=>a+fin(t),0);
  function prog(){
    const total=totalF(),d=c.tabs.reduce((a,t)=>a+got(t),0),f=d/total,r=c.ranks[f>=1?3:f>=.6?2:f>=.25?1:0];
    q("[data-r]").textContent=r;q("[data-s]").textContent="⭐ "+d+" / "+total+(st.n?" · 연습 "+st.n:"");
    window.onProg&&window.onProg(c.key,d,total,r,d+st.n);
  }
  function show(){({quiz:quiz,order:order,mission:mission,cmp:cmp})[tab.type]();prog();}
  function quiz(){
    const N=tab.items.length,k=st.i[tab.id]||0,pr=k>=N,idx=pr?rnd(0,N-1):k,it=tab.items[idx];let w=0,done=false;
    box.innerHTML=`<div class="qtitle" style="margin-top:0">${pr?"🔁 연습 문제":(k>=tab.base?"🆕 새 문제 ":"문제 ")+(k+1)+" / "+N}</div><div class="scene">${it[0]}</div>
      <div class="opts" style="margin-top:10px">${shuffle([1,2,3]).map(i=>`<button class="opt" data-k="${i}">${it[i]}</button>`).join("")}</div>
      <div class="msg" data-msg></div><div class="ans" data-ans><div class="pr"></div><p>${it[4]}</p><button class="btn" data-next>다음 →</button></div>`;
    info.textContent=pr?"모든 문제를 풀었어요! 지금은 섞어서 다시 풀어 보는 연습이에요.":"";
    box.onclick=e=>{
      if(e.target.closest("[data-next]")){show();return;}
      const b=e.target.closest(".opt");if(!b||done||b.classList.contains("wrong"))return;
      if(b.dataset.k==="1"){done=true;b.classList.add("right");box.querySelectorAll(".opt").forEach(x=>{if(x!==b)x.remove();});
        q("[data-msg]").textContent="";const a=q("[data-ans]");a.querySelector(".pr").textContent=praise();a.classList.add("show");
        if(pr)st.n++;else{st.i[tab.id]=k+1;window.TOWN&&TOWN.solved(c.key+":"+tab.id+":"+idx,w);}
        save();prog();
      }else{w++;b.classList.add("wrong");q("[data-msg]").textContent="음, 다시 생각해 볼까? 💭";}
    };
  }
  function order(){
    const N=tab.items.length,k=st.i[tab.id]||0,pr=k>=N,idx=pr?rnd(0,N-1):k,it=tab.items[idx];let pos=0;
    const chips=shuffle(it.s.map((x,i)=>i));
    box.innerHTML=`<div class="qtitle" style="margin-top:0">${pr?"🔁 연습":"순서 "+(k+1)+" / "+N}</div><div class="scene"><b style="font-family:Jua;font-weight:normal">${it.t}</b><br>알맞은 순서대로 눌러 봐!</div>
      <div class="clues" data-list></div><div class="tgrid" style="margin-top:10px">${chips.map(i=>`<button class="tbtn" data-i="${i}">${it.s[i]}</button>`).join("")}</div>
      <div class="msg" data-msg></div><div class="ans" data-ans><div class="pr"></div><p>${it.ex}</p><button class="btn" data-next>다음 →</button></div>`;
    info.textContent=pr?"모든 순서를 맞혔어요! 지금은 다시 해 보는 연습이에요.":"";
    box.onclick=e=>{
      if(e.target.closest("[data-next]")){show();return;}
      const b=e.target.closest(".tbtn");if(!b||b.disabled)return;
      if(it.s[Number(b.dataset.i)]===it.s[pos]){
        b.disabled=true;b.classList.add("used");pos++;
        q("[data-list]").insertAdjacentHTML("beforeend",`<div class="clue"><b>${pos}</b> ${b.textContent}</div>`);q("[data-msg]").textContent="";
        if(pos===it.s.length){const a=q("[data-ans]");a.querySelector(".pr").textContent=praise();a.classList.add("show");
          if(pr)st.n++;else st.i[tab.id]=k+1;save();prog();}
      }else{b.classList.remove("shake");void b.offsetWidth;b.classList.add("shake");q("[data-msg]").textContent="그다음은 뭘까? 다시 생각해 봐 💭";}
    };
  }
  function mission(){
    box.onclick=null;
    box.innerHTML=`<div class="scene">화면 밖에서 하는 미션이에요. 하나씩 해 보고 엄마 아빠에게 확인받아요!</div>`+tab.items.map((x,i)=>`<div class="item" style="margin-top:10px"><b>${st.m[tab.id+":"+i]?"✅":"⬜"} 미션 ${i+1}</b>${x}${st.m[tab.id+":"+i]?"":`<button class="holdbtn" data-h="${i}"><span>👨‍👩‍👧 다 하면 엄마 아빠가 2초 동안 꾹!</span></button>`}</div>`).join("");
    info.textContent="";
    box.querySelectorAll("[data-h]").forEach(b=>window.TOWN&&TOWN.hold(b,()=>{st.m[tab.id+":"+b.dataset.h]=1;save();show();}));
  }
  function cmp(){
    const L=Math.min(2,Math.floor(st.n/5)),n=L===0?2:3,kg=L===2&&Math.random()<.5,big=L===0||Math.random()<.6;
    const names=shuffle(KIDS).slice(0,n),vals=[];
    while(vals.length<n){const v=kg?rnd(16,30):rnd(L===2?104:98,L===2?116:128);if(!vals.includes(v))vals.push(v);}
    const target=big?Math.max(...vals):Math.min(...vals);let done=false;
    box.innerHTML=`<div class="qtitle" style="margin-top:0">📏 ${kg?"몸무게":"키"} 재는 날</div><div class="scene">보건소에서 친구들의 ${kg?"몸무게":"키"}를 쟀어요.<br><b style="font-family:Jua;font-weight:normal">${kg?(big?"가장 무거운":"가장 가벼운"):(big?"가장 큰":"가장 작은")} 친구는 누구일까?</b></div>
      <div class="opts" style="margin-top:10px">${names.map((nm,i)=>`<button class="opt" data-v="${vals[i]}">${nm} — ${vals[i]}${kg?"kg":"cm"}</button>`).join("")}</div>
      <div class="msg" data-msg></div><div class="ans" data-ans><div class="pr"></div><p>${vals.slice().sort((a,b)=>big?b-a:a-b).join(big?" > ":" < ")} 순서예요. 숫자는 앞자리부터 비교해요.</p><button class="btn" data-next>다음 →</button></div>`;
    info.textContent=["쉬움","보통","어려움"][L]+" 단계 · 5개를 맞힐 때마다 조금씩 어려워져요";
    box.onclick=e=>{
      if(e.target.closest("[data-next]")){show();return;}
      const b=e.target.closest(".opt");if(!b||done||b.classList.contains("wrong"))return;
      if(Number(b.dataset.v)===target){done=true;b.classList.add("right");const a=q("[data-ans]");a.querySelector(".pr").textContent=praise();a.classList.add("show");st.n++;save();prog();}
      else{b.classList.add("wrong");q("[data-msg]").textContent="숫자를 다시 비교해 볼까? 💭";}
    };
  }
  root.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{tab=c.tabs.find(t=>t.id===b.dataset.t);root.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x===b));show();});
  if(window.TOWN){
    TOWN.reg(c.key,qid=>{const a=qid.split(":"),t=c.tabs.find(x=>x.id===a[1]),it=t&&t.type==="quiz"&&t.items[a[2]];return it?{q:it,label:c.emoji+" "+c.short}:null;});
    TOWN.addr&&TOWN.addr(c.key,(tid,item)=>{const t=c.tabs.find(x=>x.id===tid);if(!t||t.type!=="quiz")return -1;t.items.push(item);return t.items.length-1;},()=>show());
    TOWN.addBld({key:c.key,hash:c.hash,name:c.short,emoji:c.emoji,color:c.color,bg:c.bg,icons:c.icons});
  }
  show();
});
})();
