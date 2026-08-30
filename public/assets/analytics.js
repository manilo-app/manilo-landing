(function () {
  var MEASUREMENT_ID = 'G-XFGZJ1158T';
  var KEY = 'manilo-cookie-consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  function load() {
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(s);
  }

  var consent = null;
  try { consent = localStorage.getItem(KEY); } catch (e) {}
  if (consent === 'granted') load();
  window.addEventListener('manilo-cookie-consent', function (e) {
    if (e.detail === 'granted') load();
  });
})();
