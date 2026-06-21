let data=null, outMode='pretty', outFormat='json', lang='id', dark=false, viewMode='flat';
document.getElementById('yr').textContent=new Date().getFullYear();

const T={
  id:{
    'h-sub':'Format, edit & konversi JSON/YAML langsung di browser',
    'lbl-input':'Paste JSON / YAML kamu di sini',
    'btn-parse':'Parse JSON',
    'btn-sample':'Coba contoh',
    'lbl-fields':'Fields',
    'lbl-cmd':'Perintah teks',
    'hint-cmd':'Gunakan dot notation: <em>tambah 1 ke order.summary.totalItems</em> | <em>ganti order.customer.name dengan Budi</em> | <em>tanggal ke order.summary.dueDate</em>',
    'btn-run':'Jalankan',
    'lbl-output':'Output',
    'copy':'Salin','copied':'Tersalin!',
    'today':'Hari ini','set':'Set','update':'Update','now':'Set Now',
    'fields':'field',
    'out-empty':'Output akan muncul di sini setelah JSON diparse.',
    'lbl-bulk':'Set semua per tipe:',
    'bulk-date':'Tanggal &rarr; Hari ini',
    'bulk-datetime':'Datetime &rarr; Now',
    'bulk-number':'&rarr; Semua Angka',
    'bulk-dateseq':'Update Semua Date+Seq',
    'bulk-done-date':' tanggal di-set ke hari ini.',
    'bulk-done-datetime':' datetime di-set ke sekarang.',
    'bulk-done-number':' angka diubah.',
    'bulk-done-dateseq':' date+seq di-update.',
    'bulk-none':'Gak ada field tipe ini yang ditemukan.',
    'err-invalid':'JSON/YAML tidak valid: ',
    'err-notfound':' tidak ditemukan.',
    'err-notnum':' bukan angka.',
    'err-neednum':'Nilai harus angka.',
    'err-cmd':'Perintah tidak dikenali. Gunakan dot notation seperti: tambah 1 ke order.summary.totalItems',
    'ph-cmd':'Ketik perintah...',
    'ph-search':'Cari key atau value...',
    'footer-issue-label':'Ada bug, saran, atau mau bantu donasi? Email:',
    'issue-subject':'[JSONYAMify] Pesan dari Pengguna',
    'issue-body':'Halo,\n\nIni saya mau sampaikan (hapus bagian yang gak relevan):\n\n--- 🐞 LAPOR BUG ---\nDeskripsi masalah:\n\nLangkah reproduksi:\n1. \n2. \n\nHasil yang diharapkan:\n\nHasil yang terjadi:\n\n\n--- 💡 KRITIK & SARAN ---\n\n\n--- 💸 DONASI ---\nSaya mau bantu donasi lewat: (Buy Me a Coffee / Trakteer / lainnya)\n',
    'tt-upload':'Upload file JSON/YAML','tt-download':'Download','tt-copy':'Copy','tt-minify':'Minify','tt-prettify':'Prettify','tt-help':'Cara penggunaan',
    'opt-group-json':'Contoh JSON','opt-group-yaml':'Contoh YAML',
    'opt-json1':'E-commerce Order','opt-json2':'User Profile & Subscription',
    'opt-yaml1':'Server / Infra Config','opt-yaml2':'CI/CD Pipeline',
    'btn-help':'Cara Penggunaan',
    'help-title':'Cara Penggunaan JSONYAMify',
    'help-intro':'Ikuti langkah-langkah singkat berikut untuk mulai mengubah dan mengedit data JSON / YAML kamu.',
    'help-step1-t':'1. Masukkan data',
    'help-step1':'Paste JSON atau YAML di kotak <strong>Input</strong>, atau klik tombol upload untuk membuka file <code>.json</code>/<code>.yaml</code>. Klik <strong>Parse JSON</strong> untuk memproses.',
    'help-step2-t':'2. Rapikan input (opsional)',
    'help-step2':'Gunakan tombol <i>Prettify</i> untuk merapikan indentasi, atau <i>Minify</i> untuk memadatkan jadi satu baris, sebelum diparse.',
    'help-step3-t':'3. Edit lewat Fields',
    'help-step3':'Setelah parse berhasil, semua field akan tampil di panel <strong>Fields</strong>. Pilih mode <strong>Flatten</strong> (daftar rata) atau <strong>Tree</strong> (struktur pohon). Setiap tipe data punya aksi cepat: angka bisa +1/-1, tanggal bisa "Hari ini", datetime ISO bisa "Set Now", dan teks bisa diedit langsung.',
    'help-step4-t':'4. Gunakan perintah teks (opsional)',
    'help-step4':'Ketik perintah seperti <code>tambah 1 ke order.summary.totalItems</code> atau <code>ganti order.customer.name dengan Budi</code> di kolom Perintah Teks untuk mengubah data lebih cepat lewat dot notation.',
    'help-step5-t':'5. Pilih format & mode output',
    'help-step5':'Pilih output sebagai <strong>JSON</strong> atau <strong>YAML</strong>, lalu pilih mode <strong>Compact</strong> (padat) atau <strong>Pretty</strong> (rapi berindentasi). Klik <strong>Salin</strong> atau <strong>Download</strong> untuk menyimpan hasilnya.',
    'help-tips-t':'Tips',
    'help-tip1':'Gunakan kolom pencarian di panel Fields untuk cepat menemukan key/value tertentu pada data besar.',
    'help-tip2':'Mode gelap tersedia lewat ikon bulan di kanan atas.',
    'help-close':'Tutup',
  },
  en:{
    'h-sub':'Format, edit & convert JSON/YAML right in your browser',
    'lbl-input':'Paste your JSON / YAML here',
    'btn-parse':'Parse JSON',
    'btn-sample':'Try example',
    'lbl-fields':'Fields',
    'lbl-cmd':'Text command',
    'hint-cmd':'Use dot notation: <em>add 1 to order.summary.totalItems</em> | <em>set order.customer.name to Budi</em> | <em>today to order.summary.dueDate</em>',
    'btn-run':'Run',
    'lbl-output':'Output',
    'copy':'Copy','copied':'Copied!',
    'today':'Today','set':'Set','update':'Update','now':'Set Now',
    'fields':'field(s)',
    'out-empty':'Output will appear here once the JSON is parsed.',
    'lbl-bulk':'Set all per type:',
    'bulk-date':'Dates &rarr; Today',
    'bulk-datetime':'Datetimes &rarr; Now',
    'bulk-number':'&rarr; All Numbers',
    'bulk-dateseq':'Update All Date+Seq',
    'bulk-done-date':' date field(s) set to today.',
    'bulk-done-datetime':' datetime field(s) set to now.',
    'bulk-done-number':' number field(s) updated.',
    'bulk-done-dateseq':' date+seq field(s) updated.',
    'bulk-none':'No fields of this type were found.',
    'err-invalid':'Invalid JSON/YAML: ',
    'err-notfound':' not found.',
    'err-notnum':' is not a number.',
    'err-neednum':'Value must be a number.',
    'err-cmd':'Command not recognized. Use dot notation like: add 1 to order.summary.totalItems',
    'ph-cmd':'Type a command...',
    'ph-search':'Search key or value...',
    'footer-issue-label':'Found a bug, have feedback, or want to support us? Email:',
    'issue-subject':'[JSONYAMify] Message from a User',
    'issue-body':'Hi,\n\nHere\'s what I want to share (remove the section that doesn\'t apply):\n\n--- 🐞 BUG REPORT ---\nIssue description:\n\nSteps to reproduce:\n1. \n2. \n\nExpected result:\n\nActual result:\n\n\n--- 💡 FEEDBACK / SUGGESTION ---\n\n\n--- 💸 DONATION ---\nI\'d like to support via: (Buy Me a Coffee / Ko-fi / other)\n',
    'tt-upload':'Upload JSON/YAML file','tt-download':'Download','tt-copy':'Copy','tt-minify':'Minify','tt-prettify':'Prettify','tt-help':'How to use',
    'opt-group-json':'JSON Examples','opt-group-yaml':'YAML Examples',
    'opt-json1':'E-commerce Order','opt-json2':'User Profile & Subscription',
    'opt-yaml1':'Server / Infra Config','opt-yaml2':'CI/CD Pipeline',
    'btn-help':'How to Use',
    'help-title':'How to Use JSONYAMify',
    'help-intro':'Follow these quick steps to start transforming and editing your JSON / YAML data.',
    'help-step1-t':'1. Add your data',
    'help-step1':'Paste JSON or YAML into the <strong>Input</strong> box, or click the upload button to open a <code>.json</code>/<code>.yaml</code> file. Click <strong>Parse JSON</strong> to process it.',
    'help-step2-t':'2. Clean up the input (optional)',
    'help-step2':'Use <i>Prettify</i> to format the indentation, or <i>Minify</i> to compact it into one line, before parsing.',
    'help-step3-t':'3. Edit via Fields',
    'help-step3':'Once parsed, every field appears in the <strong>Fields</strong> panel. Choose <strong>Flatten</strong> (flat list) or <strong>Tree</strong> (nested view). Each data type gets quick actions: numbers get +1/-1, dates get "Today", ISO datetimes get "Set Now", and text can be edited inline.',
    'help-step4-t':'4. Use text commands (optional)',
    'help-step4':'Type commands like <code>add 1 to order.summary.totalItems</code> or <code>set order.customer.name to Budi</code> in the Text Command field to edit data faster using dot notation.',
    'help-step5-t':'5. Choose output format & mode',
    'help-step5':'Pick output as <strong>JSON</strong> or <strong>YAML</strong>, then choose <strong>Compact</strong> or <strong>Pretty</strong> mode. Click <strong>Copy</strong> or <strong>Download</strong> to save the result.',
    'help-tips-t':'Tips',
    'help-tip1':'Use the search box in the Fields panel to quickly find a specific key/value in large data.',
    'help-tip2':'Dark mode is available via the moon icon in the top right.',
    'help-close':'Close',
  }
};
function t(k){return T[lang][k]||k;}

function setLang(l){
  lang=l;
  document.getElementById('lb-id').classList.toggle('on',l==='id');
  document.getElementById('lb-en').classList.toggle('on',l==='en');
  document.documentElement.lang=l;
  ['h-sub','lbl-input','btn-parse','btn-sample','lbl-fields','lbl-cmd','btn-run','lbl-output','footer-issue-label'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.textContent=t(id);
  });
  const h=document.getElementById('hint-cmd');if(h)h.innerHTML=t('hint-cmd');
  const p=document.getElementById('cmdInput');if(p)p.placeholder=t('ph-cmd');
  const sp=document.getElementById('fieldSearch');if(sp)sp.placeholder=t('ph-search');
  const c=document.getElementById('copyLabel');if(c)c.textContent=t('copy');
  const ph=document.getElementById('outPlaceholder');if(ph)ph.textContent=t('out-empty');
  document.getElementById('btnUpload').title=t('tt-upload');
  document.getElementById('btnDownloadIn').title=t('tt-download');
  document.getElementById('btnCopyIn').title=t('tt-copy');
  document.getElementById('btnMinifyIn').title=t('tt-minify');
  document.getElementById('btnPrettifyIn').title=t('tt-prettify');
  document.getElementById('btnDownloadOut').title=t('tt-download');
  document.getElementById('btnHelp').title=t('tt-help');
  const bh=document.getElementById('btnHelpLabel');if(bh)bh.textContent=t('btn-help');
  const ht=document.getElementById('helpTitle');if(ht)ht.innerHTML='<i class="ti ti-help-circle"></i> '+t('help-title');
  updateIssueMailLink();
  renderHelpContent();
  renderSampleOptions();
  const lblBulk=document.getElementById('lbl-bulk');if(lblBulk)lblBulk.textContent=t('lbl-bulk');
  const bd=document.getElementById('bulk-date');if(bd)bd.innerHTML='<i class="ti ti-calendar"></i> '+t('bulk-date');
  const bdt=document.getElementById('bulk-datetime');if(bdt)bdt.innerHTML='<i class="ti ti-clock"></i> '+t('bulk-datetime');
  const bn=document.getElementById('bulk-number');if(bn)bn.innerHTML=t('bulk-number');
  const bds=document.getElementById('bulk-dateseq');if(bds)bds.innerHTML='<i class="ti ti-calendar-stats"></i> '+t('bulk-dateseq');
  if(data)renderFields();
}

function updateIssueMailLink(){
  const link=document.getElementById('issueMailLink');
  if(!link)return;
  const subject=encodeURIComponent(t('issue-subject'));
  const body=encodeURIComponent(t('issue-body'));
  link.href='mailto:andiogie@gmail.com?subject='+subject+'&body='+body;
  link.removeAttribute('onclick');
}
updateIssueMailLink();

function toggleDark(){
  dark=!dark;
  document.getElementById('app').classList.toggle('dark',dark);
  document.body.style.background=dark?'#1c1c1e':'';
  document.getElementById('dmIcon').className=dark?'ti ti-sun':'ti ti-moon';
}

/* ===== Help / How-to-use modal ===== */
function renderHelpContent(){
  const box=document.getElementById('helpBody');
  if(!box)return;
  box.innerHTML=
    '<p>'+t('help-intro')+'</p>'+
    '<div class="help-section-title">'+t('help-step1-t')+'</div><p>'+t('help-step1')+'</p>'+
    '<div class="help-section-title">'+t('help-step2-t')+'</div><p>'+t('help-step2')+'</p>'+
    '<div class="help-section-title">'+t('help-step3-t')+'</div><p>'+t('help-step3')+'</p>'+
    '<div class="help-section-title">'+t('help-step4-t')+'</div><p>'+t('help-step4')+'</p>'+
    '<div class="help-section-title">'+t('help-step5-t')+'</div><p>'+t('help-step5')+'</p>'+
    '<div class="help-section-title">'+t('help-tips-t')+'</div><ul><li>'+t('help-tip1')+'</li><li>'+t('help-tip2')+'</li></ul>';
}
function openHelp(){
  renderHelpContent();
  document.getElementById('helpOverlay').classList.add('show');
}
function closeHelp(){
  document.getElementById('helpOverlay').classList.remove('show');
}

/* ===== Sample data (generic dummy e-commerce order, NOT real/sensitive data) ===== */
/* ===== Sample / template data (generic dummy data, NOT real/sensitive data) ===== */
const SAMPLES={
  json1:{
    type:'json',
    data:{
      "order":{
        "id":"ORD-20260619-0042",
        "status":"processing",
        "createdAt":"2026-06-19T08:30:00Z",
        "updatedAt":"2026-06-19T09:15:42Z",
        "customer":{
          "id":"CUST-10293",
          "name":"Budi Santoso",
          "email":"budi.santoso@example.com",
          "isVip":true,
          "loyaltyPoints":1280,
          "address":{
            "street":"Jl. Merdeka No. 12",
            "city":"Jakarta",
            "postalCode":"10110",
            "country":"ID"
          },
          "tags":["new-customer","newsletter-subscriber"]
        },
        "items":[
          {"sku":"SKU-001","name":"Wireless Mouse","qty":2,"price":150000,"currency":"IDR"},
          {"sku":"SKU-014","name":"Mechanical Keyboard","qty":1,"price":850000,"currency":"IDR"},
          {"sku":"SKU-027","name":"USB-C Hub","qty":3,"price":120000,"currency":"IDR"}
        ],
        "summary":{
          "totalItems":6,
          "subtotal":1530000,
          "discount":50000,
          "shippingFee":20000,
          "total":1500000,
          "currency":"IDR",
          "dueDate":20260625
        },
        "shipment":{
          "carrier":"JNE",
          "trackingNumber":"JNE998877665544",
          "estimatedDelivery":"2026-06-23T00:00:00Z",
          "deliveredAt":null
        },
        "metadata":{
          "source":"web-app",
          "version":2,
          "notes":"Dummy data for demo purposes only."
        }
      }
    }
  },
  json2:{
    type:'json',
    data:{
      "user":{
        "id":"USR-77421",
        "username":"ayu_pratiwi",
        "email":"ayu.pratiwi@example.com",
        "emailVerified":true,
        "registeredAt":"2025-11-02T09:12:30Z",
        "lastLoginAt":"2026-06-19T07:45:11Z",
        "subscription":{
          "plan":"pro",
          "isActive":true,
          "startDate":20260101,
          "renewalDate":20270101,
          "price":99000,
          "currency":"IDR",
          "autoRenew":true
        },
        "preferences":{
          "language":"id",
          "theme":"dark",
          "notifications":{
            "email":true,
            "push":false,
            "sms":null
          }
        },
        "roles":["member","beta-tester"],
        "loginHistory":[
          {"device":"iPhone 15","ip":"103.10.20.5","loginAt":"2026-06-18T20:03:00Z"},
          {"device":"Chrome Windows","ip":"36.85.40.12","loginAt":"2026-06-19T07:45:11Z"}
        ],
        "metadata":{
          "source":"mobile-app",
          "betaFeaturesEnabled":3,
          "notes":"Dummy user profile for demo purposes only."
        }
      }
    }
  },
  yaml1:{
    type:'yaml',
    text:`server:
  name: prod-web-01
  environment: production
  region: ap-southeast-1
  active: true
  maintenanceMode: false
  createdAt: 2026-03-01T10:00:00Z
  lastDeployedAt: 2026-06-18T22:14:05Z
  uptimeDays: 142
  expiryDate: 20270301
  tags:
    - backend
    - critical
    - autoscale
  services:
    - name: api-gateway
      port: 8080
      replicas: 3
      healthy: true
      version: "2.4.1"
    - name: auth-service
      port: 8081
      replicas: 2
      healthy: true
      version: "1.9.0"
    - name: worker-queue
      port: 8082
      replicas: 0
      healthy: false
      version: "0.7.3"
  database:
    engine: postgresql
    host: db.internal.example
    port: 5432
    name: prod_db
    maxConnections: 200
    backupEnabled: true
    lastBackupAt: 2026-06-19T01:00:00Z
  monitoring:
    alertEmail: ops@example.com
    cpuThreshold: 85
    memoryThreshold: 90
    incidentCount: 3
    lastIncidentId: null
  metadata:
    owner: platform-team
    costCenter: CC-1042
    notes: Dummy infra config for demo purposes only.`
  },
  yaml2:{
    type:'yaml',
    text:`pipeline:
  name: deploy-production
  trigger: push
  branch: main
  enabled: true
  runNumber: 458
  lastRunAt: 2026-06-19T06:30:00Z
  nextScheduledAt: null
  expiresOn: 20261231
  stages:
    - name: build
      image: "node:20"
      timeoutMinutes: 10
      allowFailure: false
    - name: test
      image: "node:20"
      timeoutMinutes: 15
      allowFailure: false
    - name: deploy
      image: "alpine:3.19"
      timeoutMinutes: 5
      allowFailure: true
  environmentVariables:
    NODE_ENV: production
    LOG_LEVEL: info
    FEATURE_FLAG_NEW_UI: true
  notifications:
    slackChannel: "#deployments"
    onSuccess: true
    onFailure: true
    emailFallback: ops@example.com
  metadata:
    maintainer: devops-team
    notes: Dummy CI/CD pipeline config for demo purposes only.`
  }
};

function renderSampleOptions(){
  const sel=document.getElementById('sampleSelect');
  if(!sel)return;
  const prev=sel.value;
  sel.innerHTML=
    '<optgroup label="'+t('opt-group-json')+'">'+
      '<option value="json1">'+t('opt-json1')+'</option>'+
      '<option value="json2">'+t('opt-json2')+'</option>'+
    '</optgroup>'+
    '<optgroup label="'+t('opt-group-yaml')+'">'+
      '<option value="yaml1">'+t('opt-yaml1')+'</option>'+
      '<option value="yaml2">'+t('opt-yaml2')+'</option>'+
    '</optgroup>';
  if(prev && SAMPLES[prev]) sel.value=prev;
}

function loadSample(key){
  const sel=document.getElementById('sampleSelect');
  key = key || (sel?sel.value:'json1');
  const s=SAMPLES[key];
  if(!s)return;
  document.getElementById('jsonInput').value = s.type==='json'
    ? JSON.stringify(s.data,null,2)
    : s.text.trim();
  parseJSON();
}


function triggerUpload(){document.getElementById('fileInput').click();}

function handleFileUpload(ev){
  const file=ev.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    document.getElementById('jsonInput').value=reader.result;
    parseJSON();
  };
  reader.readAsText(file);
  ev.target.value='';
}

function downloadText(content,filename){
  const blob=new Blob([content],{type:'text/plain'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();
  document.body.removeChild(a);URL.revokeObjectURL(url);
}

function downloadInput(){
  const raw=document.getElementById('jsonInput').value;
  if(!raw.trim())return;
  const trimmed=raw.trim();
  const ext=(trimmed.startsWith('{')||trimmed.startsWith('['))?'json':'yaml';
  downloadText(raw,'input.'+ext);
}

function downloadOutput(){
  if(!data)return;
  const content=document.getElementById('outputBox').textContent;
  const ext=outFormat==='yaml'?'yaml':'json';
  downloadText(content,'output.'+ext);
}

function copyInput(){
  const raw=document.getElementById('jsonInput').value;
  if(!raw)return;
  navigator.clipboard.writeText(raw).then(()=>{
    const btn=document.getElementById('btnCopyIn');
    const icon=btn.querySelector('i');
    icon.className='ti ti-check';
    setTimeout(()=>{icon.className='ti ti-copy';},1200);
  });
}

function minifyInput(){
  const raw=document.getElementById('jsonInput').value.trim();
  if(!raw)return;
  let obj;
  try{obj=JSON.parse(raw);}
  catch(e1){
    try{obj=jsyaml.load(raw);}catch(e2){
      document.getElementById('parseError').textContent=t('err-invalid')+e1.message;
      return;
    }
  }
  document.getElementById('jsonInput').value=JSON.stringify(obj);
  parseJSON();
}

function prettifyInput(){
  const raw=document.getElementById('jsonInput').value.trim();
  if(!raw)return;
  let obj;
  try{obj=JSON.parse(raw);}
  catch(e1){
    try{obj=jsyaml.load(raw);}catch(e2){
      document.getElementById('parseError').textContent=t('err-invalid')+e1.message;
      return;
    }
  }
  document.getElementById('jsonInput').value=JSON.stringify(obj,null,2);
  parseJSON();
}

function parseJSON(){
  const raw=document.getElementById('jsonInput').value.trim();
  const errEl=document.getElementById('parseError');
  if(!raw){errEl.textContent='';['fieldsCard','cmdCard'].forEach(id=>document.getElementById(id).style.display='none');return;}
  let parsed=null, ok=false, lastErr=null;
  try{
    parsed=JSON.parse(raw);ok=true;
  }catch(eJson){
    lastErr=eJson;
    try{
      parsed=jsyaml.load(raw);
      if(typeof parsed!=='object'||parsed===null) throw new Error('YAML root must be an object/array');
      ok=true;
    }catch(eYaml){
      lastErr=eJson;
    }
  }
  if(ok){
    data=parsed;errEl.textContent='';
    renderFields();
    ['fieldsCard','cmdCard'].forEach(id=>document.getElementById(id).style.display='block');
    renderOutput();
  }else{
    errEl.textContent=t('err-invalid')+(lastErr?lastErr.message:'');
    ['fieldsCard','cmdCard'].forEach(id=>document.getElementById(id).style.display='none');
  }
}

function flattenObj(obj,prefix=''){
  const result={};
  const entries=Array.isArray(obj)?obj.map((v,i)=>[String(i),v]):Object.entries(obj);
  for(const [key,val] of entries){
    const path=prefix?prefix+'.'+key:key;
    if(val!==null&&typeof val==='object'){
      Object.assign(result,flattenObj(val,path));
    } else {
      result[path]=val;
    }
  }
  return result;
}

function getByPath(obj,path){
  return path.split('.').reduce((o,k)=>(o!=null&&typeof o==='object'?o[k]:undefined),obj);
}

function setByPath(obj,path,val){
  const keys=path.split('.');
  let cur=obj;
  for(let i=0;i<keys.length-1;i++){
    if(cur[keys[i]]===undefined)cur[keys[i]]={};
    cur=cur[keys[i]];
  }
  cur[keys[keys.length-1]]=val;
}

function detectType(val){
  if(Array.isArray(val))return 'array';
  if(val===null)return 'null';
  if(typeof val==='object')return 'object';
  if(typeof val==='number'){
    const s=String(Math.abs(Math.floor(val)));
    if(s.length===8){
      const y=parseInt(s.slice(0,4)),m=parseInt(s.slice(4,6)),d=parseInt(s.slice(6,8));
      if(y>=1900&&y<=2100&&m>=1&&m<=12&&d>=1&&d<=31)return 'date';
    }
    return 'number';
  }
  if(typeof val==='string')return 'string';
  if(typeof val==='boolean')return 'boolean';
  return 'other';
}

function isValidDateForFmt(str,fmt){
  let y,m,d;
  if(fmt==='YYYYMMDD'){y=+str.slice(0,4);m=+str.slice(4,6);d=+str.slice(6,8);}
  else if(fmt==='DDMMYYYY'){d=+str.slice(0,2);m=+str.slice(2,4);y=+str.slice(4,8);}
  else if(fmt==='MMDDYYYY'){m=+str.slice(0,2);d=+str.slice(2,4);y=+str.slice(4,8);}
  else return false;
  if(y<1900||y>2100)return false;
  if(m<1||m>12)return false;
  if(d<1||d>31)return false;
  return true;
}

function detectDateSeq(val){
  if(typeof val!=='string'||val.length<8)return null;
  const head=val.slice(0,8);
  if(!/^\d{8}$/.test(head))return null;
  const fmts=['YYYYMMDD','DDMMYYYY','MMDDYYYY'];
  let fmt=null;
  for(const f of fmts){ if(isValidDateForFmt(head,f)){fmt=f;break;} }
  if(!fmt)return null;
  const rest=val.slice(8);
  const trailMatch=val.match(/(\d+)$/);
  return {head,rest,format:fmt,trailDigits:trailMatch?trailMatch[1]:null};
}

function formatDateForFmt(d,fmt){
  const y=String(d.getFullYear()).padStart(4,'0');
  const m=String(d.getMonth()+1).padStart(2,'0');
  const day=String(d.getDate()).padStart(2,'0');
  if(fmt==='DDMMYYYY')return day+m+y;
  if(fmt==='MMDDYYYY')return m+day+y;
  return y+m+day;
}

function detectISODateTime(val){
  if(typeof val!=='string')return null;
  const m=val.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.(\d+))?(Z)?$/);
  if(!m)return null;
  return {millisLen:m[8]?m[8].length:0,hasZ:!!m[9]};
}

function nowLikeISO(info){
  const n=new Date();
  const pad=(v,l)=>String(v).padStart(l||2,'0');
  let s=n.getUTCFullYear()+'-'+pad(n.getUTCMonth()+1)+'-'+pad(n.getUTCDate())+'T'+pad(n.getUTCHours())+':'+pad(n.getUTCMinutes())+':'+pad(n.getUTCSeconds());
  if(info.millisLen>0){
    let ms=String(n.getUTCMilliseconds()).padStart(3,'0');
    if(info.millisLen<3) ms=ms.slice(0,info.millisLen); else if(info.millisLen>3) ms=ms.padEnd(info.millisLen,'0');
    s+='.'+ms;
  }
  if(info.hasZ)s+='Z';
  return s;
}

function detectRichType(val){
  const base=detectType(val);
  if(base==='string'){
    if(detectISODateTime(val))return 'datetime';
    if(detectDateSeq(val))return 'dateseq';
  }
  return base;
}

function formatDate(val){
  const s=String(Math.floor(val));
  const y=parseInt(s.slice(0,4)),m=parseInt(s.slice(4,6))-1,d=parseInt(s.slice(6,8));
  return new Date(y,m,d).toLocaleDateString(lang==='id'?'id-ID':'en-GB',{day:'numeric',month:'long',year:'numeric'});
}

function todayNum(){
  const n=new Date();
  return parseInt(`${n.getFullYear()}${String(n.getMonth()+1).padStart(2,'0')}${String(n.getDate()).padStart(2,'0')}`);
}

function setViewMode(m){
  viewMode=m;
  document.getElementById('mode-flat').classList.toggle('on',m==='flat');
  document.getElementById('mode-tree').classList.toggle('on',m==='tree');
  renderFields();
}

function renderFields(){
  const list=document.getElementById('fieldsList');
  list.innerHTML='';
  if(viewMode==='flat') renderFlat(list);
  else renderTree(list,data,'');
  const flat=flattenObj(typeof data==='object'&&!Array.isArray(data)?data:{root:data});
  document.getElementById('fieldCount').textContent=Object.keys(flat).length+' '+t('fields');
  applyFieldFilter();
}

/* ===== Bulk "Set All" actions per detected type ===== */
function setAllType(type){
  if(!data)return;
  const flat=flattenObj(typeof data==='object'&&!Array.isArray(data)?data:{root:data});
  const incEl=document.getElementById('bulkNumInc');
  const incAmt=incEl?(parseFloat(incEl.value)||0):0;
  let count=0;

  Object.entries(flat).forEach(([path,val])=>{
    const rt=detectRichType(val);
    if(rt!==type)return;

    if(type==='date'){
      setByPath(data,path,todayNum());count++;
    } else if(type==='datetime'){
      const info=detectISODateTime(val);
      if(info){setByPath(data,path,nowLikeISO(info));count++;}
    } else if(type==='number'){
      setByPath(data,path,val+incAmt);count++;
    } else if(type==='dateseq'){
      const info=detectDateSeq(val);
      if(info){
        const newDateStr=formatDateForFmt(new Date(),info.format);
        let newRest=info.rest;
        if(info.trailDigits){
          const newNum=String(parseInt(info.trailDigits,10)+incAmt).padStart(info.trailDigits.length,'0');
          newRest=info.rest.slice(0,info.rest.length-info.trailDigits.length)+newNum;
        }
        setByPath(data,path,newDateStr+newRest);count++;
      }
    }
  });

  const fb=document.getElementById('bulkFeedback');
  if(fb){
    fb.textContent = count>0 ? count+t('bulk-done-'+type) : t('bulk-none');
    fb.style.color = count>0 ? 'var(--success)' : 'var(--text3)';
    setTimeout(()=>{fb.textContent='';},2500);
  }
  if(count>0){renderFields();renderOutput();}
}

/* ===== Search / filter fields ===== */
function applyFieldFilter(){
  const input=document.getElementById('fieldSearch');
  if(!input)return;
  const q=input.value.trim().toLowerCase();
  const rows=document.querySelectorAll('#fieldsList .field-row, #fieldsList .tree-node');
  rows.forEach(row=>{
    if(!q){row.classList.remove('hidden-by-filter');return;}
    const text=row.textContent.toLowerCase();
    row.classList.toggle('hidden-by-filter', !text.includes(q));
  });
}

function safeId(path){return 'fv_'+path.replace(/[^a-zA-Z0-9]/g,'_');}

function badgeClass(type){
  if(type==='number')return 'bn';
  if(type==='date'||type==='datetime')return 'bd';
  if(type==='dateseq')return 'bseq';
  if(type==='string')return 'bs';
  if(type==='object')return 'bobj';
  if(type==='array')return 'barr';
  return 'bbo';
}

function renderFlat(list){
  const flat=flattenObj(typeof data==='object'&&!Array.isArray(data)?data:{root:data});
  Object.entries(flat).forEach(([path,val])=>{
    const type=detectRichType(val);
    const row=document.createElement('div');row.className='field-row';

    const keyEl=document.createElement('span');keyEl.className='fkey';keyEl.title=path;keyEl.textContent=path;

    const valEl=document.createElement('span');valEl.className='fval';valEl.id=safeId(path);
    const display=type==='date'?formatDate(val)+' ('+val+')':String(val);
    valEl.textContent=display;valEl.title=display;

    const badge=document.createElement('span');
    badge.className='badge '+badgeClass(type);
    badge.textContent=type==='dateseq'?'date+seq':type;

    const acts=document.createElement('div');acts.className='acts';

    if(type==='number'){
      ['-1','+1'].forEach(lbl=>{
        const b=document.createElement('button');b.className='bsm';b.textContent=lbl;
        b.onclick=()=>{
          const cur=getByPath(data,path);
          setByPath(data,path,cur+(lbl==='+1'?1:-1));
          const nv=getByPath(data,path);
          const el=document.getElementById(safeId(path));
          if(el){el.textContent=String(nv);el.title=String(nv);el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
          renderOutput();
        };
        acts.appendChild(b);
      });
    }
    if(type==='date'){
      const b=document.createElement('button');b.className='bsm';b.textContent=t('today');
      b.onclick=()=>{
        setByPath(data,path,todayNum());
        const nv=getByPath(data,path);
        const el=document.getElementById(safeId(path));
        if(el){const d=formatDate(nv)+' ('+nv+')';el.textContent=d;el.title=d;el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
        renderOutput();
      };
      acts.appendChild(b);
    }
    if(type==='datetime'){
      const b=document.createElement('button');b.className='bsm';b.textContent=t('now');
      b.onclick=()=>{
        const curVal=getByPath(data,path);
        const info=detectISODateTime(curVal);
        if(!info)return;
        const newVal=nowLikeISO(info);
        setByPath(data,path,newVal);
        const el=document.getElementById(safeId(path));
        if(el){el.textContent=newVal;el.title=newVal;el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
        renderOutput();
      };
      acts.appendChild(b);
    }
    if(type==='dateseq'){
      const info=detectDateSeq(val);
      const fmtId='fmt_'+safeId(path);
      const incId='inc_'+safeId(path);
      const sel=document.createElement('select');sel.id=fmtId;sel.className='sel-fmt';
      ['YYYYMMDD','DDMMYYYY','MMDDYYYY'].forEach(f=>{
        const op=document.createElement('option');op.value=f;op.textContent=f;if(f===info.format)op.selected=true;
        sel.appendChild(op);
      });
      const incInp=document.createElement('input');incInp.type='number';incInp.value='1';incInp.className='num-inc';incInp.id=incId;
      const b=document.createElement('button');b.className='bsm';b.textContent=t('update');
      b.onclick=()=>{
        const curVal=getByPath(data,path);
        const curInfo=detectDateSeq(curVal);
        if(!curInfo)return;
        const fmt=document.getElementById(fmtId).value;
        const incAmt=parseInt(document.getElementById(incId).value,10)||0;
        const newDateStr=formatDateForFmt(new Date(),fmt);
        let newRest=curInfo.rest;
        if(curInfo.trailDigits){
          const newNum=String(parseInt(curInfo.trailDigits,10)+incAmt).padStart(curInfo.trailDigits.length,'0');
          newRest=curInfo.rest.slice(0,curInfo.rest.length-curInfo.trailDigits.length)+newNum;
        }
        const newVal=newDateStr+newRest;
        setByPath(data,path,newVal);
        const el=document.getElementById(safeId(path));
        if(el){el.textContent=newVal;el.title=newVal;el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
        renderOutput();
      };
      acts.appendChild(sel);acts.appendChild(incInp);acts.appendChild(b);
    }
    if(type==='string'){
      const bid='si_'+safeId(path);
      const inp=document.createElement('input');inp.type='text';inp.value=val;inp.className='str-inp';inp.id=bid;
      const b=document.createElement('button');b.className='bsm';b.textContent=t('set');
      b.onclick=()=>{
        const nv=document.getElementById(bid).value;
        setByPath(data,path,nv);
        const el=document.getElementById(safeId(path));
        if(el){el.textContent=nv;el.title=nv;el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
        renderOutput();
      };
      acts.appendChild(inp);acts.appendChild(b);
    }
    if(type==='boolean'){
      const b=document.createElement('button');b.className='bsm';
      b.textContent='\u2192 '+(!val);
      b.onclick=()=>{
        const cur=getByPath(data,path);
        const nv=!cur;
        setByPath(data,path,nv);
        const el=document.getElementById(safeId(path));
        if(el){el.textContent=String(nv);el.title=String(nv);el.style.color='var(--success)';setTimeout(()=>{el.style.color='';},600);}
        b.textContent='\u2192 '+(!nv);
        renderOutput();
      };
      acts.appendChild(b);
    }

    row.appendChild(keyEl);row.appendChild(valEl);row.appendChild(badge);row.appendChild(acts);
    list.appendChild(row);
  });
}

function renderTree(container,obj,path,depth){
  depth=depth||0;
  if(typeof obj!=='object'||obj===null)return;
  const entries=Array.isArray(obj)?obj.map((v,i)=>[String(i),v]):Object.entries(obj);
  entries.forEach(([key,val])=>{
    const fullPath=path?path+'.'+key:key;
    const type=detectRichType(val);
    const isExpandable=(type==='object'||type==='array');
    const nodeWrap=document.createElement('div');nodeWrap.className='tree-node';
    const rowEl=document.createElement('div');rowEl.className='tree-row';
    rowEl.style.paddingLeft=(depth*16+4)+'px';

    const togEl=document.createElement('span');togEl.className='tree-toggle';
    togEl.textContent=isExpandable?'▾':'';

    const keyEl=document.createElement('span');keyEl.className='tree-key';keyEl.textContent=key+': ';

    const valEl=document.createElement('span');
    valEl.className='tree-val '+(type==='string'?'str':(type==='number'||type==='date'||type==='datetime'||type==='dateseq')?'num':type==='boolean'?'bool':type==='null'?'null':'');

    if(isExpandable){
      const count=Array.isArray(val)?val.length:Object.keys(val).length;
      valEl.textContent=type==='array'?'['+count+' items]':'{'+count+' keys}';
      valEl.style.color='var(--text3)';
    } else if(type==='date'){
      valEl.textContent=formatDate(val)+' ('+val+')';
    } else {
      valEl.textContent=String(val);
    }

    const badge=document.createElement('span');
    badge.className='badge '+badgeClass(type);
    badge.textContent=type==='date'?'date':type==='dateseq'?'date+seq':type;
    badge.style.marginLeft='4px';

    rowEl.appendChild(togEl);rowEl.appendChild(keyEl);rowEl.appendChild(valEl);rowEl.appendChild(badge);

    if(!isExpandable){
      const acts=document.createElement('div');acts.className='acts';acts.style.marginLeft='auto';
      if(type==='number'){
        ['-1','+1'].forEach(lbl=>{
          const b=document.createElement('button');b.className='bsm';b.textContent=lbl;
          b.onclick=()=>{
            const cur=getByPath(data,fullPath);
            setByPath(data,fullPath,cur+(lbl==='+1'?1:-1));
            const nv=getByPath(data,fullPath);
            valEl.textContent=String(nv);valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
            renderOutput();
          };
          acts.appendChild(b);
        });
      }
      if(type==='date'){
        const b=document.createElement('button');b.className='bsm';b.textContent=t('today');
        b.onclick=()=>{
          setByPath(data,fullPath,todayNum());
          const nv=getByPath(data,fullPath);
          const d=formatDate(nv)+' ('+nv+')';
          valEl.textContent=d;valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
          renderOutput();
        };
        acts.appendChild(b);
      }
      if(type==='datetime'){
        const b=document.createElement('button');b.className='bsm';b.textContent=t('now');
        b.onclick=()=>{
          const curVal=getByPath(data,fullPath);
          const info=detectISODateTime(curVal);
          if(!info)return;
          const newVal=nowLikeISO(info);
          setByPath(data,fullPath,newVal);
          valEl.textContent=newVal;valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
          renderOutput();
        };
        acts.appendChild(b);
      }
      if(type==='dateseq'){
        const info=detectDateSeq(val);
        const sel=document.createElement('select');sel.className='sel-fmt';
        ['YYYYMMDD','DDMMYYYY','MMDDYYYY'].forEach(f=>{
          const op=document.createElement('option');op.value=f;op.textContent=f;if(f===info.format)op.selected=true;
          sel.appendChild(op);
        });
        const incInp=document.createElement('input');incInp.type='number';incInp.value='1';incInp.className='num-inc';
        const b=document.createElement('button');b.className='bsm';b.textContent=t('update');
        b.onclick=()=>{
          const curVal=getByPath(data,fullPath);
          const curInfo=detectDateSeq(curVal);
          if(!curInfo)return;
          const fmt=sel.value;
          const incAmt=parseInt(incInp.value,10)||0;
          const newDateStr=formatDateForFmt(new Date(),fmt);
          let newRest=curInfo.rest;
          if(curInfo.trailDigits){
            const newNum=String(parseInt(curInfo.trailDigits,10)+incAmt).padStart(curInfo.trailDigits.length,'0');
            newRest=curInfo.rest.slice(0,curInfo.rest.length-curInfo.trailDigits.length)+newNum;
          }
          const newVal=newDateStr+newRest;
          setByPath(data,fullPath,newVal);
          valEl.textContent=newVal;valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
          renderOutput();
        };
        acts.appendChild(sel);acts.appendChild(incInp);acts.appendChild(b);
      }
      if(type==='string'){
        const inp=document.createElement('input');inp.type='text';inp.value=val;inp.className='tree-edit-inp';
        const b=document.createElement('button');b.className='bsm';b.textContent=t('set');
        b.onclick=()=>{
          const nv=inp.value;setByPath(data,fullPath,nv);
          valEl.textContent=nv;valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
          renderOutput();
        };
        acts.appendChild(inp);acts.appendChild(b);
      }
      if(type==='boolean'){
        const b=document.createElement('button');b.className='bsm';
        b.textContent='\u2192 '+(!val);
        b.onclick=()=>{
          const cur=getByPath(data,fullPath);
          const nv=!cur;
          setByPath(data,fullPath,nv);
          valEl.textContent=String(nv);valEl.style.color='var(--success)';setTimeout(()=>{valEl.style.color='';},600);
          b.textContent='\u2192 '+(!nv);
          renderOutput();
        };
        acts.appendChild(b);
      }
      rowEl.appendChild(acts);
    }

    nodeWrap.appendChild(rowEl);

    if(isExpandable){
      const childWrap=document.createElement('div');childWrap.className='tree-children';
      renderTree(childWrap,val,fullPath,depth+1);
      nodeWrap.appendChild(childWrap);
      let open=true;
      togEl.style.cursor='pointer';
      togEl.onclick=()=>{
        open=!open;
        childWrap.style.display=open?'':'none';
        togEl.textContent=open?'▾':'▸';
      };
    }

    container.appendChild(nodeWrap);
  });
}

function runCmd(){
  const cmd=document.getElementById('cmdInput').value.trim();
  const errEl=document.getElementById('cmdError');errEl.textContent='';if(!cmd)return;
  const lc=cmd.toLowerCase();

  const addM=lc.match(/^(tambah|add|kurang|subtract|kurangi)\s+(-?\d+(?:\.\d+)?)\s+(ke|to|dari|from|di|pada)\s+(.+)$/);
  if(addM){
    const op=addM[1],num=parseFloat(addM[2]),path=addM[4].trim();
    const cur=getByPath(data,path);
    if(cur===undefined){errEl.textContent='"'+path+'"'+t('err-notfound');return;}
    if(typeof cur!=='number'){errEl.textContent='"'+path+'"'+t('err-notnum');return;}
    setByPath(data,path,cur+(['kurang','subtract','kurangi'].includes(op)?-num:num));
    renderFields();renderOutput();document.getElementById('cmdInput').value='';return;
  }

  const setM=cmd.match(/^(?:ganti|set|ubah|change|replace)\s+(.+?)\s+(?:dengan|ke|menjadi|jadi|to|with)\s+(.+)$/i);
  if(setM){
    const path=setM[1].trim(),newValRaw=setM[2].trim();
    const cur=getByPath(data,path);
    if(cur===undefined){errEl.textContent='"'+path+'"'+t('err-notfound');return;}
    const type=detectType(cur);
    if(type==='number'||type==='date'){
      const n=parseFloat(newValRaw);if(isNaN(n)){errEl.textContent=t('err-neednum');return;}
      setByPath(data,path,n);
    } else {setByPath(data,path,newValRaw);}
    renderFields();renderOutput();document.getElementById('cmdInput').value='';return;
  }

  const todayM=cmd.match(/^(?:tanggal\s+hari\s+ini|today|hari\s+ini|tanggal)\s+(?:ke|to|di|pada|untuk|for)\s+(.+)$/i);
  if(todayM){
    const path=todayM[1].trim();
    if(getByPath(data,path)===undefined){errEl.textContent='"'+path+'"'+t('err-notfound');return;}
    setByPath(data,path,todayNum());
    renderFields();renderOutput();document.getElementById('cmdInput').value='';return;
  }

  errEl.textContent=t('err-cmd');
}

function setOutMode(m){
  outMode=m;
  document.getElementById('btn-compact').classList.toggle('on',m==='compact');
  document.getElementById('btn-pretty').classList.toggle('on',m==='pretty');
  renderOutput();
}

function setOutFormat(f){
  outFormat=f;
  document.getElementById('btn-fmt-json').classList.toggle('on',f==='json');
  document.getElementById('btn-fmt-yaml').classList.toggle('on',f==='yaml');
  renderOutput();
}

function renderOutput(){
  if(!data)return;
  let content;
  if(outFormat==='yaml'){
    content = outMode==='compact'
      ? jsyaml.dump(data,{flowLevel:0}).trim()
      : jsyaml.dump(data,{indent:2});
  } else {
    content = outMode==='compact' ? JSON.stringify(data) : JSON.stringify(data,null,2);
  }
  document.getElementById('outputBox').textContent=content;
}

function copyOutput(){
  navigator.clipboard.writeText(document.getElementById('outputBox').textContent).then(()=>{
    const el=document.getElementById('copyLabel');
    el.textContent=t('copied');
    setTimeout(()=>{el.textContent=t('copy');},1500);
  });
}
