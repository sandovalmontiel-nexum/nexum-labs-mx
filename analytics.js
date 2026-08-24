/*
 * Nexum Labs MX — analytics.js
 * Seguimiento de eventos GA4
 */

(function () {
  "use strict";

  window.NexumGA4 = {

    track: function (eventName, params) {
      if (
        typeof window.gtag === "function" &&
        window.NEXUM_GA4_ID &&
        window.NEXUM_GA4_ID !== "YOUR-GA4-ID"
      ) {
        window.gtag("event", eventName, params || {});
      }
    },

    lead: function (params) {
      this.track("generate_lead", params);
    },

    courseInterest: function (params) {
      this.track(
        "select_item",
        Object.assign(
          { item_list_name: "Cursos" },
          params || {}
        )
      );
    },

    serviceInterest: function (params) {
      this.track(
        "service_interest",
        Object.assign(
          { item_list_name: "Servicios" },
          params || {}
        )
      );
    }
  };

  /*
   * Procesador automático de los elementos que contienen
   * data-track o data-analytics.
   */
  document.addEventListener("DOMContentLoaded", function () {

    var elements = document.querySelectorAll(
      "[data-track], [data-analytics]"
    );

    elements.forEach(function (link) {

      link.addEventListener("click", function () {

        var eventName =
          link.getAttribute("data-analytics") ||
          link.getAttribute("data-track");

        if (!eventName) return;

        var params = {};

        var label =
          link.getAttribute("data-analytics-label");

        var service =
          link.getAttribute("data-service");

        var course =
          link.getAttribute("data-course");

        if (label) {
          params.item_name = label;
        }

        if (service) {
          params.service_name = service;
        }

        if (course) {
          params.course_name = course;
        }

        params.page_location = window.location.href;

        window.NexumGA4.track(eventName, params);

      });

    });

  });

})();
