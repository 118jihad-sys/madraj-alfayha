/* V7 · تسجيل دخول اختياري + لوحة تحكم للمشرف (Firebase Auth + Firestore) */
(()=>{
const cfg=window.FIREBASE_CONFIG||{},ADM=(window.ADMIN_EMAIL||'').toLowerCase();
const $=s=>document.querySelector(s),e=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const B='https://www.gstatic.com/firebasejs/10.12.2/';
const ER={'auth/invalid-credential':'البريد أو كلمة المرور غير صحيحة','auth/email-already-in-use':'هذا البريد مسجّل مسبقًا','auth/weak-password':'كلمة المرور ضعيفة (6 أحرف على الأقل)','auth/invalid-email':'البريد غير صالح','auth/too-many-requests':'محاولات كثيرة، حاول لاحقًا','permission-denied':'لا تملك صلاحية الحفظ — راجع قواعد Firestore'};
let F,U=null,ROLE='زائر',D={},tab='news',edit=-1,editPlayer=-1,mode='login';
const fb=()=>F||(F=(async()=>{const[a,au,fs]=await Promise.all([import(B+'firebase-app.js'),import(B+'firebase-auth.js'),import(B+'firebase-firestore.js')]);const app=a.initializeApp(cfg),auth=au.getAuth(app);await au.setPersistence(auth,au.browserLocalPersistence);return{au,fs,auth,db:fs.getFirestore(app)}})());
const dfmt=d=>new Date(d+'T12:00:00').toLocaleDateString('ar-SA-u-ca-gregory-nu-latn',{day:'numeric',month:'long',year:'numeric'});
async function load(){const f=await fb(),[s,n]=await Promise.all([f.fs.getDoc(f.fs.doc(f.db,'site','data')),f.fs.getDoc(f.fs.doc(f.db,'site','news'))]);const d=s.exists()?JSON.parse(s.data().json):{};if(n.exists())d.news=JSON.parse(n.data().json);return Object.keys(d).length?d:null}

/* بيانات الموقع: تُقرأ قبل رسم الصفحة (بحد أقصى 3 ثوانٍ ثم يُعرض المحتوى الافتراضي) */
window.siteReady=(async()=>{if(!cfg.projectId)return;try{const r=await Promise.race([load(),new Promise((_,j)=>setTimeout(j,3000))]);if(r){window.remote=r;if(r.news){NEWS.length=0;NEWS.push(...r.news)}}}catch(x){}})();

/* واجهة */
$('header.top').insertAdjacentHTML('beforebegin','<div class="utl"><div class="wrap"><div class="account-actions"><button id="lg" type="button">دخول / تسجيل</button><span id="role-badge">زائر</span></div></div></div>');
const dlg=document.createElement('dialog');dlg.id='ad';document.body.appendChild(dlg);
const isAdm=()=>ROLE==='Admin',isNewsEditor=()=>ROLE==='محرر أخبار',canEditNews=()=>isAdm()||isNewsEditor();
const lbl=()=>{$('#lg').textContent=U?(canEditNews()?'تعديل':'حسابي'):'دخول / تسجيل';$('#role-badge').textContent=ROLE};
async function refreshRole(u){ROLE='زائر';if(u&&u.emailVerified){const mail=(u.email||'').toLowerCase();if(mail===ADM)ROLE='Admin';else try{const f=await fb(),r=await f.fs.getDoc(f.fs.doc(f.db,'userRoles',mail));if(r.exists()&&r.data().role==='newsEditor')ROLE='محرر أخبار'}catch(x){}}lbl()}
if(cfg.projectId)fb().then(f=>f.au.onAuthStateChanged(f.auth,async u=>{U=u;await refreshRole(u);if(dlg.open)draw()}));
$('#lg').onclick=()=>{draw();dlg.showModal()};
dlg.addEventListener('click',ev=>{if(ev.target===dlg)dlg.close()});
const say=t=>{const m=$('#msg');if(m)m.textContent=t};
const err=x=>say(ER[x.code]||'حدث خطأ: '+(x.code||x.message));

function draw(){
 let b;
 if(!cfg.projectId)b='<h3>الحساب غير مفعّل بعد</h3><p class="hint">لتفعيل التسجيل ولوحة التحكم، أضف إعدادات Firebase في ملف <b>config.js</b> (الخطوات في ملف اقرأني.txt).</p>';
 else if(!U)b=`<h3>${mode==='reg'?'إنشاء حساب':'تسجيل الدخول'}</h3><p class="hint">اختياري — الموقع مفتوح للجميع بدون حساب.</p>
 <label>البريد الإلكتروني<input id="em" type="email" dir="ltr" autocomplete="email"></label>
 <label>كلمة المرور<input id="pw" type="password" dir="ltr" autocomplete="${mode==='reg'?'new-password':'current-password'}"></label>
 <button class="btn or" data-a="${mode==='reg'?'doreg':'dologin'}">${mode==='reg'?'إنشاء الحساب':'دخول'}</button>
 <p class="hint"><a data-a="${mode==='reg'?'tlogin':'treg'}">${mode==='reg'?'لدي حساب — دخول':'حساب جديد'}</a> · <a data-a="forgot">نسيت كلمة المرور؟</a></p><p id="msg" class="msg"></p>`;
 else if(!canEditNews())b=`<h3>أهلًا بك</h3><p class="hint" dir="ltr" style="text-align:right">${e(U.email)}</p>${U.email.toLowerCase()===ADM&&!U.emailVerified?'<p class="msg">فعّل بريدك من الرسالة التي وصلتك لتظهر لوحة التحكم.</p><button class="btn line sm" data-a="recheck">تحقّقت من التفعيل</button><button class="btn line sm" data-a="resend">إعادة إرسال رسالة التفعيل</button>':''}<button class="btn line sm" data-a="out">تسجيل الخروج</button><p id="msg" class="msg"></p>`;
 else b=panel();
 dlg.innerHTML=`<div class="adp"><button class="x" data-a="close" type="button">إغلاق ×</button>${b}</div>`;
}

/* لوحة التحكم */
const T={news:'الأخبار',stand:'الترتيب',match:'المباريات',players:'اللاعبون'};
function panel(){
 const keys=isNewsEditor()?['news']:Object.keys(T);if(!keys.includes(tab))tab='news';
 return `<h3>${isNewsEditor()?'تحرير الأخبار':'لوحة التحكم'}</h3><div class="tabs">${keys.map(k=>`<button class="${k===tab?'on':''}" data-a="tab" data-v="${k}">${T[k]}</button>`).join('')}<button data-a="close">إغلاق</button></div>${tab==='news'?pNews():tab==='stand'?pStand():tab==='match'?pMatch():pSquad()}<p id="msg" class="msg"></p>`;
}
function pNews(){
 const n=D.news[edit]||{c:'match',tag:'',d:new Date().toISOString().slice(0,10),t:'',x:'',l:'',lt:''};
 const L=D.news.map((x,i)=>[x,i]).sort((a,b)=>b[0].d.localeCompare(a[0].d));
 return `<h4>${edit>=0?'تعديل خبر':'خبر جديد'}</h4>
 <div class="g2"><label>التصنيف<select id="nc">${[['match','المباريات'],['train','التمارين والجاهزية'],['transfer','الانتقالات']].map(o=>`<option value="${o[0]}"${o[0]===n.c?' selected':''}>${o[1]}</option>`).join('')}</select></label><label>الوسم (مثل: تمرين اليوم)<input id="ntag" value="${e(n.tag)}"></label></div>
 <div class="g2"><label>التاريخ<input id="nd" type="date" value="${e(n.d)}"></label><label>اسم المصدر<input id="nlt" value="${e(n.lt)}"></label></div>
 <label>العنوان<input id="nt" value="${e(n.t)}"></label><label>التفاصيل<textarea id="nx" rows="3">${e(n.x)}</textarea></label><label>رابط المصدر<input id="nl" type="url" dir="ltr" value="${e(n.l)}"></label>
 <div><button class="btn or sm" data-a="nsave">${edit>=0?'حفظ التعديل':'نشر الخبر'}</button>${edit>=0?' <button class="btn line sm" data-a="ncancel">إلغاء</button>':''}</div>
 <h4>الأخبار المنشورة (${D.news.length})</h4><div class="list">${L.map(([x,i])=>`<div class="it"><span>${e(x.t)}<small>${e(x.da)}</small></span><span><button data-a="nedit" data-i="${i}">تعديل</button><button class="del" data-a="ndel" data-i="${i}">حذف</button></span></div>`).join('')}</div>`;
}
function pStand(){
 const s=D.standing,f=[['pos','المركز'],['pts','النقاط'],['p','لعب'],['w','فوز'],['d','تعادل'],['l','خسارة'],['gf','له'],['ga','عليه']];
 return `<h4>ترتيب الفيحاء</h4><div class="g2">${f.map(x=>`<label>${x[1]}<input id="s_${x[0]}" type="number" value="${s[x[0]]}"></label>`).join('')}</div><div><button class="btn or sm" data-a="ssave">نشر الترتيب</button></div>`;
}
function pMatch(){
 const S=window.SITE;if(!S)return '<p class="hint">حدّث الصفحة ثم افتح اللوحة.</p>';
 return `<h4>المباريات القادمة</h4>${S.UP.map(id=>{const m=S.matches[id];return `<div class="it" style="display:grid"><b>${e(m.date)} — ${e(m.home==='fayha'?'الفيحاء × '+id:id+' × الفيحاء')}</b><div class="g2"><label>الموعد<input id="k_${id}" type="datetime-local" value="${e(S.kick[id])}"></label><label>الملعب<input id="st_${id}" value="${e(m.stadium)}"></label></div><label>المدينة<input id="ci_${id}" value="${e(m.city)}"></label><div><button class="btn or sm" data-a="msave" data-i="${id}">نشر</button></div></div>`}).join('')}<p class="hint">(الأسماء بالإنجليزية هي رمز الفريق فقط؛ الصفحة تعرض الاسم العربي.)</p>`;
}
function pSquad(){
 const p=D.squad[editPlayer]||{n:'',p:'gk',pos:'',no:'',id:'',image:'',injuryType:'',injuryDuration:''};
 const cats=[['gk','حارس'],['def','دفاع'],['mid','وسط'],['fwd','هجوم']];
 return `<h4>${editPlayer>=0?'تعديل بيانات لاعب':'إضافة لاعب'}</h4>
 <div class="g2"><label>اسم اللاعب<input id="pn" value="${e(p.n)}"></label><label>المركز العام<select id="pcat">${cats.map(([v,l])=>`<option value="${v}"${p.p===v?' selected':''}>${l}</option>`).join('')}</select></label></div>
 <div class="g2"><label>المركز التفصيلي<input id="ppos" value="${e(p.pos)}" placeholder="مثل: قلب دفاع"></label><label>رقم القميص<input id="pno" inputmode="numeric" value="${e(p.no)}"></label></div>
 <div class="g2"><label>رابط صورة اللاعب (اختياري)<input id="pimage" type="url" dir="ltr" value="${e(p.image)}"></label><label>معرّف صورة FotMob (اختياري)<input id="pid" inputmode="numeric" value="${e(p.id)}"></label></div>
 <div class="g2"><label>نوع الإصابة (اختياري)<input id="pinjury" value="${e(p.injuryType||p.inj||'')}" placeholder="مثل: شد عضلي"></label><label>مدة الغياب (اختياري)<input id="pduration" value="${e(p.injuryDuration||'')}" placeholder="مثل: أسبوعان"></label></div>
 <div><button class="btn or sm" data-a="psave">${editPlayer>=0?'حفظ بيانات اللاعب':'إضافة اللاعب'}</button>${editPlayer>=0?' <button class="btn line sm" data-a="pcancel">إلغاء</button>':''}</div>
 <h4>قائمة اللاعبين (${D.squad.length})</h4><div class="list">${D.squad.map((x,i)=>`<div class="it"><span>${e(x.n)}<small>${e(x.pos)}${x.injuryType||x.inj?' · مصاب':''}</small></span><span><button data-a="pedit" data-i="${i}">تعديل</button><button class="del" data-a="pdel" data-i="${i}">حذف</button></span></div>`).join('')}</div>`;
}
async function pub(){
 try{const f=await fb();await f.fs.setDoc(f.fs.doc(f.db,'site','data'),{json:JSON.stringify(D)});window.remote={...(window.remote||{}),...D};if(Array.isArray(D.squad)&&Array.isArray(window.DEFAULT_SQUAD)){window.DEFAULT_SQUAD.splice(0,window.DEFAULT_SQUAD.length,...D.squad);window.refreshSquad?.()}say('تم النشر ✓ — يظهر للزوار عند فتح الصفحة أو تحديثها.')}catch(x){err(x)}
}
async function pubNews(){try{if(!canEditNews())return say('لا تملك صلاحية تعديل الأخبار');const f=await fb();await f.fs.setDoc(f.fs.doc(f.db,'site','news'),{json:JSON.stringify(D.news)});window.remote={...(window.remote||{}),news:D.news};say('تم نشر الأخبار ✓')}catch(x){err(x)}}
const v=id=>$('#'+id).value.trim();

dlg.addEventListener('click',async ev=>{
 const el=ev.target.closest('[data-a]');if(!el)return;const a=el.dataset.a,i=el.dataset.i;
 if(a==='close')return dlg.close();
 if(a==='treg'||a==='tlogin'){mode=a==='treg'?'reg':'login';return draw()}
 const f=await fb();
 try{
  if(a==='dologin'){const c=await f.au.signInWithEmailAndPassword(f.auth,v('em'),$('#pw').value);await refreshRole(c.user);if(canEditNews())dlg.close()}
  else if(a==='doreg'){const c=await f.au.createUserWithEmailAndPassword(f.auth,v('em'),$('#pw').value);await f.au.sendEmailVerification(c.user);say('تم إنشاء الحساب. أرسلنا رسالة تفعيل إلى بريدك.')}
  else if(a==='forgot'){if(!v('em'))return say('اكتب بريدك أولًا');await f.au.sendPasswordResetEmail(f.auth,v('em'));say('أرسلنا رابط استعادة كلمة المرور إلى بريدك.')}
  else if(a==='out'){await f.au.signOut(f.auth);dlg.close()}
  else if(a==='resend'){await f.au.sendEmailVerification(U);say('أُعيد إرسال رسالة التفعيل.')}
  else if(a==='recheck'){await U.reload();await U.getIdToken(true);await refreshRole(U);draw()}
  else if(a==='tab'){tab=el.dataset.v;edit=-1;editPlayer=-1;draw()}
  else if(a==='nedit'){edit=+i;draw()}
  else if(a==='ncancel'){edit=-1;draw()}
  else if(a==='ndel'){if(!canEditNews())return say('لا تملك صلاحية تعديل الأخبار');if(confirm('حذف هذا الخبر؟')){D.news.splice(+i,1);edit=-1;draw();await pubNews()}}
  else if(a==='nsave'){
   if(!canEditNews())return say('لا تملك صلاحية تعديل الأخبار');
   if(!v('nt'))return say('اكتب عنوان الخبر');
   const d=v('nd')||new Date().toISOString().slice(0,10),n={c:v('nc'),tag:v('ntag')||'خبر',d,da:dfmt(d),t:v('nt'),x:v('nx'),l:v('nl')||'https://x.com/AlfayhaSC',lt:v('nlt')||'حساب النادي على X'};
   edit>=0?D.news[edit]=n:D.news.unshift(n);edit=-1;draw();await pubNews()}
  else if(a==='ssave'){if(!isAdm())return say('هذه الصلاحية للأدمن فقط');['pos','pts','p','w','d','l','gf','ga'].forEach(k=>D.standing[k]=+$('#s_'+k).value||0);await pub()}
  else if(a==='msave'){if(!isAdm())return say('هذه الصلاحية للأدمن فقط');const k=v('k_'+i);if(!k)return say('اختر الموعد');D.matches[i]={k,m:{date:dfmt(k.slice(0,10)),time:k.slice(11,16),stadium:v('st_'+i),city:v('ci_'+i)}};await pub()}
  else if(a==='pedit'){if(!isAdm())return say('هذه الصلاحية للأدمن فقط');editPlayer=+i;draw()}
  else if(a==='pcancel'){editPlayer=-1;draw()}
  else if(a==='pdel'){if(!isAdm())return say('هذه الصلاحية للأدمن فقط');if(confirm('حذف اللاعب من قائمة الفريق؟')){D.squad.splice(+i,1);editPlayer=-1;draw();await pub()}}
  else if(a==='psave'){
   if(!isAdm())return say('هذه الصلاحية للأدمن فقط');if(!v('pn'))return say('اكتب اسم اللاعب');
   const player={n:v('pn'),p:v('pcat'),pos:v('ppos')||'لاعب',no:v('pno'),image:v('pimage'),id:v('pid'),injuryType:v('pinjury'),injuryDuration:v('pduration')};
   editPlayer>=0?D.squad[editPlayer]=player:D.squad.unshift(player);editPlayer=-1;draw();await pub()}
 }catch(x){err(x)}
});

/* فتح اللوحة: تحضير البيانات الحالية */
$('#lg').addEventListener('click',()=>{edit=-1;editPlayer=-1;D=Object.assign({news:JSON.parse(JSON.stringify(NEWS)),standing:{pos:12,pts:6,p:7,gf:7,ga:11,w:1,d:3,l:3},matches:{},squad:JSON.parse(JSON.stringify(window.DEFAULT_SQUAD||[]))},window.remote||{});draw()},true);
})();

