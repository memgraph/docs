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

!function (ss) {
  window.ldfdr = function () { (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments).concat(ss)); };
  (function (d, s) {
    fs = d.getElementsByTagName(s)[0];
    function ce(src) {
      var cs = d.createElement(s);
      cs.src = src;
      setTimeout(function () { fs.parentNode.insertBefore(cs, fs) }, 1);
    }; ce('https://sc.lfeeder.com/lftracker_v1_' + ss + '.js');
  })(document, 'script');
}('Xbp1oaEBk1L8EdVj');
