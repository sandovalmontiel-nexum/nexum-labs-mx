/*
 * Nexum Labs MX — analytics.js V9
 * API auxiliar para eventos de conversión.
 *
 * El Measurement ID se configura en index.html:
 *   window.NEXUM_GA4_ID = "G-XXXXXXXXXX";
 *
 * Con YOUR-GA4-ID no se envían datos a Google.
 */
(function(){
  "use strict";
  window.NexumGA4 = {
    track: function(eventName, params){
      if(typeof window.gtag === "function" &&
         window.NEXUM_GA4_ID &&
         window.NEXUM_GA4_ID !== "YOUR-GA4-ID"){
        window.gtag("event", eventName, params || {});
      }
    },
    lead: function(params){
      this.track("generate_lead", params);
    },
    courseInterest: function(params){
      this.track("select_item", Object.assign(
        {item_list_name:"Cursos"}, params || {}
      ));
    },
    serviceInterest: function(params){
      this.track("select_item", Object.assign(
        {item_list_name:"Servicios"}, params || {}
      ));
    }
  };
})();
