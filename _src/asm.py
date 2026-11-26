
g=open('/home/claude/hosp_gen.js',encoding='utf8').read();s=open('/home/claude/hosp_scene.js',encoding='utf8').read();e=open('/home/claude/hosp_enc.js',encoding='utf8').read()
full=s.replace('\n/* 오늘의 환자 */','\n'+e+'\n/* 오늘의 환자 */',1)
i=full.index('\nconst SDOC=');full=full[:i]+'\n'+g+full[i:]
full+=open('/home/claude/hosp_cases_a.js',encoding='utf8').read()+open('/home/claude/hosp_cases_b.js',encoding='utf8').read()+open('/home/claude/hosp_extra.js',encoding='utf8').read()
h=open('/home/claude/hospital.html',encoding='utf8').read()
i=h.index('/*SCENE-BEGIN*/\n')+len('/*SCENE-BEGIN*/\n');j=h.index('/*SCENE-END*/')
open('/home/claude/hospital.html','w',encoding='utf8').write(h[:i]+full+h[j:])
