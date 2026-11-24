/* Language auto-detection & switcher for GitHub Pages (ko / en / ja / es) */
(function () {
  var SUPPORTED = ['ko', 'en', 'ja', 'es'];
  function norm(code) {
    if (!code) return null;
    var low = String(code).trim().toLowerCase();
    for (var i = 0; i < SUPPORTED.length; i++) {
      var s = SUPPORTED[i];
      if (low === s || low.indexOf(s + '-') === 0 || low.indexOf(s + '_') === 0) return s;
    }
    if (low === 'jp') return 'ja';
    return null;
  }

  function detect() {
    var params = new URLSearchParams(window.location.search);
    var q = norm(params.get('lang'));
    if (q) return q;
    try {
      var saved = norm(localStorage.getItem('meowtryoshka_docs_lang'));
      if (saved) return saved;
    } catch (e) {}
    var navs = navigator.languages || [navigator.language];
    for (var i = 0; i < navs.length; i++) {
      var m = norm(navs[i]);
      if (m) return m;
    }
    return 'ko';
  }

  function applyLang(lang, persist) {
    var active = norm(lang) || 'ko';
    document.documentElement.setAttribute('data-active-lang', active);
    document.documentElement.setAttribute('lang', active);
    if (persist) {
      try { localStorage.setItem('meowtryoshka_docs_lang', active); } catch (e) {}
    }
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-set-lang') === active);
    }
    var localizedImgs = document.querySelectorAll('[data-lang-src]');
    for (var j = 0; j < localizedImgs.length; j++) {
      var tpl = localizedImgs[j].getAttribute('data-lang-src');
      localizedImgs[j].setAttribute('src', tpl.replace('{lang}', active));
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detect(), false);
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        applyLang(this.getAttribute('data-set-lang'), true);
      });
    }
  });
})();
