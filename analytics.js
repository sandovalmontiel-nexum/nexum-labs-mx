/*
 Nexum Labs MX — V7 Analytics
 Configure your Google Analytics 4 Measurement ID below.
 Example: G-ABC1234567
 Leave it as YOUR-GA4-ID until the real ID is available.
*/
window.NEXUM_ANALYTICS = {
  measurementId: "YOUR-GA4-ID",
  enabled: true
};

(function () {
  const cfg = window.NEXUM_ANALYTICS || {};
  const id = cfg.measurementId;

  // Do not load GA4 until a real Measurement ID is supplied.
  if (!cfg.enabled || !id || id === "YOUR-GA4-ID") return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id, {
    anonymize_ip: true,
    page_title: document.title,
    page_location: window.location.href
  });

  document.addEventListener("click", function (event) {
    const el = event.target.closest("[data-analytics]");
    if (!el) return;
    const action = el.getAttribute("data-analytics");
    const label = el.getAttribute("data-analytics-label") || el.textContent.trim();
    gtag("event", action, {
      event_category: "Nexum Labs MX",
      event_label: label
    });
  });
})();
