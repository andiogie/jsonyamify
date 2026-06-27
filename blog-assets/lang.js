/* ============================================================
   blog-assets/lang.js
   Powers the ID/EN language toggle used on blog/index.html,
   every article in /blog/*.html, and /faq.html.

   Mechanism: toggles a "lang-id"/"lang-en" class on <html>.
   Visibility of .by-lang-id / .by-lang-en is controlled purely
   by CSS rules in blog-assets/blog.css (see html.lang-en / html.lang-id
   selectors there) — this avoids any inline-style vs stylesheet
   specificity conflicts.

   Expects markup like:
     <div class="by-lang-switch">
       <button data-lang="id">ID</button>
       <button data-lang="en">EN</button>
     </div>
     <div class="by-lang-id">...Indonesian content...</div>
     <div class="by-lang-en">...English content...</div>
   ============================================================ */
(function(){
  function applyLang(lang){
    if(lang!=='id' && lang!=='en') lang='id';

    var root = document.documentElement;
    root.classList.toggle('lang-id', lang==='id');
    root.classList.toggle('lang-en', lang==='en');
    root.lang = lang;

    document.querySelectorAll('.by-lang-switch [data-lang]').forEach(function(btn){
      btn.classList.toggle('on', btn.getAttribute('data-lang')===lang);
    });

    try{ localStorage.setItem('jsy-blog-lang', lang); }catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll('.by-lang-switch [data-lang]').forEach(function(btn){
      btn.addEventListener('click', function(){
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    var saved = 'id';
    try{ saved = localStorage.getItem('jsy-blog-lang') || 'id'; }catch(e){}
    applyLang(saved);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', initLangSwitch);
  }else{
    initLangSwitch();
  }
})();
