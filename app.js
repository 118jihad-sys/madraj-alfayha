(async()=>{await window.siteReady;
const teams = {
 fayha:{name:'الفيحاء',logo:'logo.png'},riyadh:{name:'الرياض',logo:'assets/riyadh.png'},khaleej:{name:'الخليج',logo:'assets/khaleej.png'},ahli:{name:'الأهلي',logo:'assets/ahli.png'},hazem:{name:'الحزم',logo:'assets/hazem.png'},shabab:{name:'الشباب',logo:'assets/shabab.png'},ittihad:{name:'الاتحاد',logo:'assets/ittihad.png'},kholood:{name:'الخلود',logo:'assets/kholood.png'}
};
const forms={
 fayha:{source:'teams/582749/overview/al-fayha',games:[['12 سبتمبر','الشباب','الفيحاء',0,0],['8 سبتمبر','الاتحاد','الفيحاء',2,1],['3 سبتمبر','الفيحاء','الخلود',2,2],['28 أغسطس','الفيحاء','أبها',3,2],['25 أغسطس','التعاون','الفيحاء',0,0]]},
 riyadh:{source:'teams/582739/overview/al-riyadh',games:[['13 سبتمبر','الرياض','الخلود',2,0],['7 سبتمبر','الخليج','الرياض',0,0],['4 سبتمبر','الأهلي','الرياض',5,0],['28 أغسطس','الرياض','نيوم',1,0],['25 أغسطس','الشباب','الرياض',3,3]]},
 khaleej:{source:'teams/550433/overview/al-khaleej',games:[['12 سبتمبر','الخليج','النصر',1,1],['7 سبتمبر','الخليج','الرياض',0,0],['3 سبتمبر','نيوم','الخليج',3,0],['28 أغسطس','الخليج','الهلال',1,5],['25 أغسطس','أبها','الخليج',1,1]]},
 ahli:{source:'teams/2530/overview/al-ahli',games:[['19 سبتمبر','صن داونز','الأهلي',2,1,'كأس القارات للأندية'],['14 سبتمبر','الأهلي','باختاكور',1,1,'نخبة آسيا'],['11 سبتمبر','الأهلي','الحزم',3,1],['8 سبتمبر','القادسية','الأهلي',3,2],['4 سبتمبر','الأهلي','الرياض',5,0]]},
 hazem:{source:'teams/101911/overview/al-hazem',games:[['11 سبتمبر','الأهلي','الحزم',3,1],['8 سبتمبر','الحزم','التعاون',1,0],['5 سبتمبر','الفيصلي','الحزم',0,0],['30 أغسطس','الحزم','الشباب',1,1],['24 أغسطس','الاتحاد','الحزم',3,2]]}
};const matches={
 riyadh:{home:'fayha',away:'riyadh',date:'11 أكتوبر 2026',time:'16:40',round:8,stadium:'مدينة المجمعة الرياضية',city:'المجمعة',source:'matches/al-riyadh-vs-al-fayha/8o0flw6t'},
 khaleej:{home:'khaleej',away:'fayha',date:'15 أكتوبر 2026',time:'17:50',round:9,stadium:'استاد الأمير محمد بن فهد',city:'الدمام',source:'matches/al-khaleej-vs-al-fayha/86yd3uzi'},
 ahli:{home:'fayha',away:'ahli',date:'19 أكتوبر 2026',time:'18:05',round:10,stadium:'مدينة المجمعة الرياضية',city:'المجمعة',source:'matches/al-ahli-vs-al-fayha/26olokzh'},
 hazem:{home:'hazem',away:'fayha',date:'22 أكتوبر 2026',time:'16:40',round:11,stadium:'ملعب نادي الحزم',city:'الرس',source:'matches/al-hazem-vs-al-fayha/2zo85b6n'},
 shabab:{home:'shabab',away:'fayha',date:'12 سبتمبر 2026',time:'21:00',round:7,stadium:'اس اتش جي أرينا',city:'الرياض',score:[0,0],source:'matches/al-shabab-vs-al-fayha/2zoa6omq',goals:[],lineups:[
 {formation:'4-4-2',players:['موري دياو','محمد الثاني','مامادو باري','تين يدفاي','ضاري العنزي','عبدالرحمن العبود','جوش براونهيل','ياسين عدلي','يانيك كاراسكو','روجر مارتينيز','ريكاردو ماتياس']},
 {formation:'4-1-4-1',players:['أورلاندو موسكيرا','محمد البقعاوي','مخير الرشيدي','عمر كولي','أحمد بامسعود','هوغو مورا','جيسون ريميسيرو','ألفا سيميدو','منصور البيشي','فاشون ساكالا','لازارو فينيسيوس']}]},
 ittihad:{home:'ittihad',away:'fayha',date:'8 سبتمبر 2026',time:'21:00',round:6,stadium:'ملعب الإنماء بمدينة الملك عبدالله الرياضية',city:'جدة',score:[2,1],source:'matches/al-ittihad-vs-al-fayha/28bfd60i',goals:[
 {minute:'43',team:'ittihad',scorer:'جورج إيلينيخينا',assist:null},
 {minute:'45+4',team:'fayha',scorer:'جيسون ريميسيرو',assist:'أحمد بامسعود'},
 {minute:'68',team:'ittihad',scorer:'يوسف النصيري',assist:null,penalty:true}],lineups:[
 {formation:'4-2-3-1',players:['محمد العبسي','يان كارلو شيميتش','دانيلو بيريرا','حسن كادش','فارس عابدي','ديون لوبي','ريتشارد ريوس','أحمد الغامدي','حسام عوار','ستيفن بيرغوين','جورج إيلينيخينا']},
 {formation:'4-4-1-1',players:['أورلاندو موسكيرا','محمد البقعاوي','باولو أوليفيرا','مخير الرشيدي','أحمد بامسعود','جيسون ريميسيرو','هوغو مورا','الحسين بولعرش','فاشون ساكالا','ألفا سيميدو','لازارو فينيسيوس']}]},
 kholood:{home:'fayha',away:'kholood',date:'3 سبتمبر 2026',time:'18:55',round:5,stadium:'مدينة المجمعة الرياضية',city:'المجمعة',score:[2,2],source:'matches/al-fayha-vs-al-kholood/sb781h75',goals:[
 {minute:'5',team:'fayha',scorer:'هوغو مورا',assist:null},
 {minute:'14',team:'kholood',scorer:'إيكر كورتاخارينا',assist:'جوليان دومينغيس'},
 {minute:'57',team:'fayha',scorer:'فاشون ساكالا',assist:'لازارو فينيسيوس'},
 {minute:'88',team:'kholood',scorer:'جوليان دومينغيس',assist:'منصور كامارا'}],lineups:[
 {formation:'4-3-3',players:['أورلاندو موسكيرا','محمد البقعاوي','باولو أوليفيرا','مخير الرشيدي','أحمد بامسعود','ألفا سيميدو','هوغو مورا','علي الحسين','نواف الحارثي','لازارو فينيسيوس','فاشون ساكالا']},
 {formation:'4-3-3',players:['حامد الشنقيطي','رمزي صولان','إدغاراس أوتكوس','منصور كامارا','شاكيل بيناس','إيكر كورتاخارينا','سيدوبا سيسي','جون باكلي','عبدالعزيز العليوة','جوليان دومينغيس','كوبا دا كوستا']}]}
};

/* ===== V5 · بيانات مراجَعة بتاريخ 27 سبتمبر 2026 ===== */
const sourceBase='https://www.fotmob.com/';
Object.assign(teams,{taawoun:{name:'التعاون',logo:'assets/taawoun.png',fm:205686},abha:{name:'أبها',logo:'assets/abha.png',fm:150414},faisaly:{name:'الفيصلي',logo:'assets/faisaly.png',fm:205687}});
Object.assign(matches,{
 faisaly:{home:'fayha',away:'faisaly',date:'31 أكتوبر 2026',time:'17:55',round:12,stadium:'مدينة المجمعة الرياضية',city:'المجمعة'},
 abha:{home:'fayha',away:'abha',date:'28 أغسطس 2026',time:'',round:4,stadium:'مدينة المجمعة الرياضية',city:'المجمعة',score:[3,2],goals:[
  {minute:'32',team:'fayha',scorer:'لازارو فينيسيوس'},
  {minute:'56',team:'fayha',scorer:'لازارو فينيسيوس'},
  {minute:'84',team:'abha',scorer:'أليماني غوري'},
  {minute:'87',team:'fayha',scorer:'عبدو ديالو',og:true},
  {minute:'90+4',team:'abha',scorer:'ميتشي باتشوايي',penalty:true}]},
 taawoun:{home:'taawoun',away:'fayha',date:'25 أغسطس 2026',time:'',round:3,stadium:'ملعب الأول',city:'بريدة',score:[0,0],goals:[]}
});
const kick={riyadh:'2026-10-11T16:40',khaleej:'2026-10-15T17:50',ahli:'2026-10-19T18:05',hazem:'2026-10-22T16:40',faisaly:'2026-10-31T17:55'};
const UP=Object.keys(kick),PREV=['shabab','ittihad','kholood','abha','taawoun'];
const R=window.remote||{};Object.entries(R.matches||{}).forEach(([i,v])=>{if(matches[i]){Object.assign(matches[i],v.m||{});if(v.k)kick[i]=v.k}});window.SITE={matches,kick,UP};
const S=Object.assign({pos:12,pts:6,p:7,gf:7,ga:11,w:1,d:3,l:3},R.standing||{});
const leaders={goals:[['هوغو مورا','moura',2],['لازارو فينيسيوس','lazaro',2]],assists:[['نواف الحارثي','nawaf',1],['لازارو فينيسيوس','lazaro',1],['أحمد بامسعود','bamsaud',1]]};
const squad=[
 {n:'عبدالرؤوف الدقيل',p:'gk',pos:'حارس مرمى',no:'1',id:1554630},
 {n:'أورلاندو موسكيرا',p:'gk',pos:'حارس مرمى',no:'52',id:531913},
 {n:'سطام الشمري',p:'gk',pos:'حارس مرمى',no:'13',id:1671251},
 {n:'أسامة الثميري',p:'gk',pos:'حارس مرمى',no:'31',id:1554626},
 {n:'مخير الرشيدي',p:'def',pos:'قلب دفاع',no:'2',id:915152},
 {n:'باولو أوليفيرا',p:'def',pos:'قلب دفاع',no:'15',id:193927},
 {n:'زياد الصحفي',p:'def',pos:'قلب دفاع',no:'21',id:702375},
 {n:'عمر كولي',p:'def',pos:'قلب دفاع',no:'25',id:440369},
 {n:'علي ظافر الحرشان',p:'def',pos:'مدافع',no:'42',id:2139535},
 {n:'محمد البقعاوي',p:'def',pos:'ظهير أيمن',no:'22',id:637281,cap:1},
 {n:'محمد الدويش',p:'def',pos:'ظهير أيمن',no:'47',id:1594822},
 {n:'أحمد بامسعود',p:'def',pos:'ظهير أيسر',no:'',id:866401},
 {n:'تركي الجعدي',p:'def',pos:'ظهير أيسر',no:'12',id:1549835},
 {n:'هوغو مورا',p:'mid',pos:'وسط ارتكاز',no:'5',id:1028036},
 {n:'ألفا سيميدو',p:'mid',pos:'وسط ارتكاز',no:'30',id:816274},
 {n:'البراء عداوي',p:'mid',pos:'وسط ارتكاز',no:'29',id:1452721},
 {n:'نواف الحارثي',p:'mid',pos:'وسط',no:'7',id:1002614},
 {n:'منصور البيشي',p:'mid',pos:'وسط',no:'14',id:1054058},
 {n:'علي الحسين',p:'mid',pos:'وسط هجومي',no:'6',id:1671250},
 {n:'ياغو سوزا',p:'mid',pos:'وسط هجومي',no:'40',id:1590255},
 {n:'عبدالله القحطاني',p:'mid',pos:'وسط هجومي',no:'55',id:1039533},
 {n:'عبدالهادي الحراجين',p:'mid',pos:'وسط هجومي',no:'',id:618100},
 {n:'مالك العبدالمنعم',p:'fwd',pos:'مهاجم',no:'9',id:1130172},
 {n:'فاشون ساكالا',p:'fwd',pos:'مهاجم',no:'10',id:825765},
 {n:'لازارو فينيسيوس',p:'fwd',pos:'جناح أيسر',no:'17',id:1111981},
 {n:'جيسون ريميسيرو',p:'fwd',pos:'جناح أيمن',no:'23',id:451984},
 {n:'ريان عناد',p:'fwd',pos:'جناح أيمن',no:'77',id:1780605},
 {n:'سلطان الجابري',p:'fwd',pos:'جناح أيمن',no:'27',id:1920081},
 {n:'فهد ماجد الحبيشي',p:'fwd',pos:'جناح أيمن',no:'43',id:2139541},
 {n:'عمار الخيبري',p:'fwd',pos:'جناح أيمن',no:'41',id:1819089,inj:'إصابة الرباط الصليبي · غياب 6–9 أشهر (إعلان النادي 9 يونيو 2026)'}
];
const products=[
 ['تيشيرت الجمهور البرتقالي','orange.png','https://alfiha-store.com/products/تيشرت-الفريق-الأول-البرتقالي-فئة-الجمهور-2026-2027-1'],
 ['تيشيرت الجمهور الكحلي','navy.png','https://alfiha-store.com/products/تيشرت-الفريق-الأول-البرتقالي-فئة-الجمهور-2026-2027'],
 ['تيشيرت الجمهور الأبيض','white.png','https://alfiha-store.com/products/تيشرت-الفريق-الأول-البرتقالي-فئة-الجمهور-2026-2027-2']
];
/* ===== الدوال ===== */
const $=s=>document.querySelector(s);
const fmLogo=i=>`https://images.fotmob.com/image_resources/logo/teamlogo/${i}.png`;
const badge=(id,c='badge')=>{const T=teams[id];return `<img class="${c}" src="${T.logo||fmLogo(T.fm)}" data-fm="${T.fm||''}" data-n="${T.name[0]}" alt="شعار ${T.name}">`};
const t=id=>teams[id].name;
const st=m=>{const h=m.home==='fayha',f=h?m.score[0]:m.score[1],a=h?m.score[1]:m.score[0];return f>a?['w','فوز']:f<a?['l','خسارة']:['d','تعادل']};
const when=id=>new Date(kick[id]+':00+03:00');
const pair=m=>`<div class="pair"><div class="tm">${badge(m.home)}<span>${t(m.home)}</span><small>صاحب الأرض</small></div><div class="sc" ${m.score?`aria-label="${t(m.home)} ${m.score[0]}، ${t(m.away)} ${m.score[1]}"`:''}>${m.score?`${m.score[0]}–${m.score[1]}<small>انتهت</small>`:`${m.time}<small>بتوقيت السعودية</small>`}</div><div class="tm">${badge(m.away)}<span>${t(m.away)}</span><small>الضيف</small></div></div>`;
const face=(id)=>`<div class="t">${badge(id,'')}<b>${t(id)}</b></div>`;
const next=UP.find(i=>when(i)>Date.now())||UP[UP.length-1];
/* hero */
(function(){
 const m=matches[next],f=forms.fayha.games.map(g=>{const h=g[1]==='الفيحاء',a=h?g[3]:g[4],b=h?g[4]:g[3];return a>b?['w','ف']:a<b?['l','خ']:['d','ت']});
 $('#hero-box').innerHTML=`<span class="notice"><i></i>المباراة القادمة · دوري روشن السعودي · الجولة ${m.round}</span>
 <h1>الفيحاء × ${t(m.home==='fayha'?m.away:m.home)}<br><span>${m.date}</span></h1>
 <p class="sub">${m.stadium} · ${m.city} ${m.home==='fayha'?'· على أرضنا':'· خارج الأرض'}</p>
 <div class="face">${face(m.home)}<div class="mid"><div class="vs">VS</div><div class="time">${m.time}</div><div class="date">بتوقيت السعودية</div></div>${face(m.away)}</div>
 <div class="cd" id="cd" aria-live="off"><div><b>0</b><small>يوم</small></div><div><b>0</b><small>ساعة</small></div><div><b>0</b><small>دقيقة</small></div><div><b>0</b><small>ثانية</small></div></div>
 <div class="acts"><button class="btn or" data-m="${next}">تفاصيل المباراة</button><a class="btn ghost" href="#tickets">التذاكر</a><button class="btn ghost" data-share="${next}">مشاركة</button></div>
 <div class="formrow">آخر 5 للفيحاء: ${f.map(x=>`<span class="dot ${x[0]}">${x[1]}</span>`).join('')}</div>`;
 const bs=[...document.querySelectorAll('#cd b')],T=when(next);
 const tick=()=>{let d=Math.max(0,T-Date.now())/1000|0;const v=[d/86400|0,d%86400/3600|0,d%3600/60|0,d%60];bs.forEach((b,i)=>b.textContent=String(v[i]).padStart(i?2:1,'0'))};
 tick();setInterval(tick,1000);
})();
/* upcoming + results */
$('#upcoming').innerHTML=UP.map(id=>{const m=matches[id];return `<button class="fx" data-m="${id}"><div class="m"><span>الجولة ${m.round}${id===next?' · التالية':''}</span><span>${m.date}</span></div>${pair(m)}<div class="f"><span>${m.stadium}</span><span>التفاصيل ↗</span></div></button>`}).join('');
$('#results').innerHTML=PREV.map(id=>{const m=matches[id],s=st(m);return `<button class="rc" data-m="${id}"><div class="m"><span>الجولة ${m.round} · ${m.date}</span><span class="tag ${s[0]}">${s[1]}</span></div>${pair(m)}<div class="f" style="margin-top:10px;font-size:12px;color:var(--mut);font-weight:700">الأهداف والتفاصيل ↗</div></button>`}).join('');
$('#side').innerHTML=`<div class="card stand"><h3>ترتيب الفيحاء في دوري روشن</h3><div class="pos"><b>${S.pos}</b><span>المركز من 18 فريقًا<br>${S.pts} نقاط بعد ${S.p} جولات</span></div>
<div class="stats4"><div><b>${S.p}</b><small>لعب</small></div><div><b>${S.gf}</b><small>له</small></div><div><b>${S.ga}</b><small>عليه</small></div><div><b>${S.gf-S.ga>0?"+":""}${S.gf-S.ga}</b><small>الفارق</small></div></div>
${R.standing?"":'<table class="mini"><tr><td>11</td><td>الرياض</td><td>8</td></tr><tr class="me"><td>12</td><td>الفيحاء</td><td>6</td></tr><tr><td>13</td><td>الخليج</td><td>5</td></tr></table>'}<p class="note" style="color:#9fb0e6">${S.w} فوز · ${S.d} تعادل · ${S.l} خسائر.${R.standing?"":" الترتيب بتاريخ 27 سبتمبر 2026."}</p></div>
<div class="card"><h3>هدافو الفريق</h3><div class="lead">${leaders.goals.map(p=>`<figure><img src="assets/${p[1]}.png" alt="${p[0]}">${p[0]}<b>${p[2]} هدف</b></figure>`).join('')}</div><h3 style="margin-top:18px">الأكثر صناعة</h3><div class="lead">${leaders.assists.map(p=>`<figure><img src="assets/${p[1]}.png" alt="${p[0]}">${p[0]}<b>${p[2]} تمريرة</b></figure>`).join('')}</div><p class="note">إحصاءات الدوري حتى 27 سبتمبر 2026.</p></div>`;
/* news, store */
const NC={all:'الكل',match:'المباريات',train:'التمارين والجاهزية',transfer:'الانتقالات'};
function drawNews(k){
 $('#nchips').innerHTML=Object.keys(NC).map(x=>`<button class="chip${x===k?' on':''}" data-nf="${x}" aria-pressed="${x===k}">${NC[x]}<small>${x==='all'?NEWS.length:NEWS.filter(n=>n.c===x).length}</small></button>`).join('');
 const L=NEWS.filter(n=>k==='all'||n.c===k).sort((a,b)=>b.d.localeCompare(a.d));
 $('#news-grid').innerHTML=L.map((n,i)=>`<article class="nc${i===0?' big':''}"><div class="top2"><span class="ntag">${n.tag}</span><time datetime="${n.d}">${n.da}</time></div><h3>${n.t}</h3><p>${n.x}</p><a href="${n.l}" target="_blank" rel="noopener">${n.lt} ↗</a></article>`).join('')||'<div class="empty">لا توجد أخبار في هذا القسم بعد.</div>';
}
drawNews('all');
$('#products').innerHTML=products.map(p=>`<article class="pd"><div class="im"><span>فئة الجمهور</span><img src="${p[1]}" alt="${p[0]} موسم 2026–2027" loading="lazy"></div><div class="in"><h3>${p[0]}</h3><small style="color:var(--mut);font-weight:700">موسم 2026–2027</small><div class="pr"><b>56.35 <small style="color:var(--mut)">ر.س</small></b><small>غير متوفر حاليًا</small></div><a class="btn line sm" href="${p[2]}" target="_blank" rel="noopener">عرضه في المتجر ↗</a></div></article>`).join('');
/* squad */
const G={all:'الكل',gk:'حراس',def:'دفاع',mid:'وسط',fwd:'هجوم'};
function drawSquad(k){
 $('#chips').innerHTML=Object.keys(G).map(x=>`<button class="chip${x===k?' on':''}" data-f="${x}" aria-pressed="${x===k}">${G[x]}<small>${x==='all'?squad.length:squad.filter(p=>p.p===x).length}</small></button>`).join('');
 $('#squad-grid').innerHTML=squad.filter(p=>k==='all'||p.p===k).map(p=>`<article class="pc"><div class="ph" data-i="${p.no||p.n[0]}"><span class="no">${p.no}</span><img src="https://images.fotmob.com/image_resources/playerimages/${p.id}.png" alt="${p.n}" loading="lazy"></div>${p.no?`<span class="num">${p.no}</span>`:''}${p.cap?'<span class="cap">القائد</span>':''}${p.inj?`<span class="inj" title="${p.inj}">مصاب</span>`:''}<div class="nm"><b>${p.n}</b><small>${p.pos}</small>${p.inj?`<small style="display:block;color:var(--loss);font-weight:700">${p.inj}</small>`:''}</div></article>`).join('');
}
drawSquad('all');
$('#squad-count').textContent=`${squad.length} لاعبًا · ${squad.filter(p=>p.inj).length} مصاب`;
/* modal */
const dlg=$('#dlg');
const events=m=>!m.goals.length?'<div class="empty">انتهت المباراة بدون أهداف.</div>':`<div class="ev">${m.goals.map(g=>`<div><span class="min">${g.minute}′</span><span><b>${g.scorer}</b>${g.penalty?'<small>ركلة جزاء</small>':g.og?'<small>هدف عكسي</small>':g.assist?`<small>صناعة: ${g.assist}</small>`:''}</span><em>${t(g.team)}</em></div>`).join('')}</div>`;
const lineups=m=>m.lineups?`<h4>التشكيلة الأساسية</h4><div class="lu">${m.lineups.map((l,i)=>`<div><h5>${t(i?m.away:m.home)} <small dir="ltr">${l.formation}</small></h5><ol>${l.players.map(p=>`<li>${p}</li>`).join('')}</ol></div>`).join('')}</div>`:'';
const formOf=id=>{const f=forms[id];if(!f)return `<div><h5>${t(id)}</h5><div class="empty">لا تتوفر نتائج موثّقة بعد.</div></div>`;return `<div><h5>${t(id)}</h5>${f.games.map(g=>{const h=g[1]===t(id),a=h?g[3]:g[4],b=h?g[4]:g[3],s=a>b?['w','فوز']:a<b?['l','خسارة']:['d','تعادل'];return `<div class="fr"><span class="tag ${s[0]}">${s[1]}</span><span>${g[1]} <span class="s">${g[3]}–${g[4]}</span> ${g[2]}</span><small>${g[0]}${g[5]?' · '+g[5]:''}</small></div>`}).join('')}</div>`};
function openM(id){
 const m=matches[id],fh=m.home==='fayha';
 const facts=[['الملعب',m.stadium],['المدينة',m.city],['الأرض للفيحاء',fh?'داخل الأرض':'خارج الأرض']].filter(x=>x[1]);
 $('#dlg-c').innerHTML=`<div class="mh"><button class="x" data-close>إغلاق ×</button><div class="lg" id="dlg-t">دوري روشن السعودي · الجولة ${m.round}<br>${t(m.home)} × ${t(m.away)}</div>${pair(m)}<p style="text-align:center;color:#b9c4ee;margin-top:14px;font-size:14px">${m.date}${m.time?' · '+m.time+' بتوقيت السعودية':''}</p></div>
 <div class="mb"><div class="facts">${facts.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div>
 ${m.score?`<h4>الأهداف</h4>${events(m)}${lineups(m)}`:`<h4>آخر 5 مباريات للفريقين</h4><div class="fm">${formOf(m.home)}${formOf(m.away)}</div>`}
 <div class="macts">${m.score?'':`<button class="btn or sm" data-share="${id}">مشاركة المباراة</button><a class="btn line sm" href="#tickets" data-close>التذاكر</a>`}${m.source?`<a class="btn line sm" href="${sourceBase+m.source}" target="_blank" rel="noopener">المصدر على FotMob ↗</a>`:''}</div></div>`;
 dlg.showModal();dlg.scrollTop=0;
}
async function share(btn,id){
 const m=matches[id],txt=`${t(m.home)} × ${t(m.away)}\n${m.date}${m.time?' · '+m.time+' بتوقيت السعودية':''}\n${m.stadium} – ${m.city}`,o=btn.textContent;
 try{if(navigator.share){await navigator.share({title:'مباراة الفيحاء',text:txt})}else{await navigator.clipboard.writeText(txt);btn.textContent='تم النسخ ✓';setTimeout(()=>btn.textContent=o,1800)}}catch(e){}
}
document.addEventListener('click',e=>{
 const s=e.target.closest('[data-share]');if(s){share(s,s.dataset.share);return}
 const c=e.target.closest('[data-close]');if(c&&dlg.open)dlg.close();
 const f=e.target.closest('[data-f]');if(f){drawSquad(f.dataset.f);return}
 const nf=e.target.closest('[data-nf]');if(nf){drawNews(nf.dataset.nf);return}
 const b=e.target.closest('[data-m]');if(b)openM(b.dataset.m);
});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
/* intro */
const intro=$('#intro');intro.addEventListener('click',()=>intro.remove());setTimeout(()=>intro.remove(),2150);

/* image fallbacks: club logo -> FotMob logo -> letter · player photo -> number */
document.addEventListener('error',e=>{
 const im=e.target;if(!im||im.tagName!=='IMG')return;
 if(im.closest('.pc')){im.closest('.pc').classList.add('nophoto');return}
 if(im.dataset.n===undefined)return;
 if(im.dataset.fm&&!im.dataset.tried){im.dataset.tried=1;im.src=fmLogo(im.dataset.fm);return}
 const sp=document.createElement('span');sp.className=(im.className+' mono').trim();sp.textContent=im.dataset.n;sp.setAttribute('role','img');sp.setAttribute('aria-label',im.alt);im.replaceWith(sp);
},true);

})();

