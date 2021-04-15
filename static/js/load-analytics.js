!function () {
  var analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
  else {
    analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
    analytics.factory = function (e) {
      return function () {
        var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics
      }
    };
    for (var e = 0; e < analytics.methods.length; e++) {
      var key = analytics.methods[e]; analytics[key] = analytics.factory(key)
    }
    analytics.load = function (key, e) {
      var t = document.createElement("script");
      t.type = "text/javascript";
      t.async = !0;
      t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(t, n);
      analytics._loadOptions = e
    }; analytics.SNIPPET_VERSION = "4.13.1";
    analytics.load("pY2fDe2NM9X7Bg8GUKLItCwaiHi0Xhm9");
    analytics.page();
  }
}();

!function (h, o, t, j, a, r) {
  h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
  h._hjSettings = { hjid: 1822641, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script'); r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
}(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
