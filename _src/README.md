# 아림 마을 원본 (만드는 재료)

`index.html`은 이 폴더의 파일들을 합쳐서 만든 결과물입니다. 앱을 고칠 때는 `index.html`을 직접 고치지 말고 여기 원본을 고친 뒤 다시 합칩니다.

## 합치는 순서
1. 이 폴더의 파일을 모두 `/home/claude/`에 복사합니다. (`asm.py`, `merge.py`는 `/tmp/`에 둡니다. 두 스크립트 안의 경로가 `/home/claude/`로 고정돼 있습니다.)
2. `python3 /tmp/asm.py && python3 /tmp/merge.py` → `/home/claude/town.html`이 만들어집니다.
3. `town.html`로 저장소의 `index.html`을 만듭니다.
   - `<meta name="viewport" ...>` 한 줄을, 지금 `index.html`의 viewport부터 `<title>` 앞까지의 머리 부분으로 바꿉니다.
   - 끝의 `fromHash();\nTOWN.start();\n</script>` 부터 뒤쪽을, 지금 `index.html`의 같은 자리부터 끝까지(서비스 워커 등록 포함)로 바꿉니다.
4. `sw.js`의 `arim-town-v숫자`를 1 올립니다. 그림 파일을 더했으면 `CORE` 목록에도 넣습니다.
5. `main`과 `gh-pages` 두 가지에 같은 내용을 올립니다.

## 파일
- `hospital.html`: 대학병원. `/*SCENE-BEGIN*/ … /*SCENE-END*/` 사이는 `asm.py`가 `hosp_scene.js`(+`hosp_enc.js`, `hosp_gen.js`) + `hosp_cases_a.js` + `hosp_cases_b.js` + `hosp_extra.js`로 채웁니다.
- `joriwon.html`: 별관(조리원)
- `town_core.js`: 마을 지도·가게·펫·복습. `/*STUDY*/` 자리에 `town_study.js`(공부방)가 들어갑니다.
- `town_bld.js`, `town_pharm.js`, `town_sync.js`, `town_html.txt`, `town_css.txt`, `town_css_media.txt`
- 그림은 저장소의 `map/` 폴더 (지도 배경·건물·복도·진료실·공부방·가게)

## 지켜야 할 것
- 병원 코드 안에서는 `document.`을 쓰지 않습니다(`$()` 사용). `merge.py`가 검사합니다.
- `family-dashboard/`, `eunjun-town/` 폴더는 다른 앱이므로 건드리지 않습니다.
- 저장소가 공개이므로 아이 사진·가족 코드는 넣지 않습니다.
- 보호자 설정의 "전부 열어서 둘러보기"는 확인용입니다(기록에 저장되지 않음).
