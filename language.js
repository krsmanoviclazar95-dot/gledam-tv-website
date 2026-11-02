(function(){
  'use strict';
  var available=['sr','en','hr','de','es'];
  var preferred='sr';
  try { preferred=localStorage.getItem('gledam_site_language')||'sr'; } catch(e) {}
  if (!available.includes(preferred)) preferred='sr';
  function apply(lang){
    var dict=(window.GLEDAM_TRANSLATIONS||{})[lang]; if(!dict)return;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){var key=el.getAttribute('data-i18n');if(dict[key])el.textContent=dict[key];});
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){var key=el.getAttribute('data-i18n-aria');if(dict[key])el.setAttribute('aria-label',dict[key]);});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){var key=el.getAttribute('data-i18n-placeholder');if(dict[key])el.setAttribute('placeholder',dict[key]);});
    var sel=document.getElementById('siteLanguage');if(sel)sel.value=lang;
    document.title=(document.querySelector('h1')?.textContent||'GLEDAM.TV+')+' | GLEDAM.TV+';
    try {localStorage.setItem('gledam_site_language',lang);}catch(e){}
  }
  document.addEventListener('DOMContentLoaded',function(){
    apply(preferred);
    var sel=document.getElementById('siteLanguage');if(sel)sel.addEventListener('change',function(){apply(this.value);});
    var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  });
})();
