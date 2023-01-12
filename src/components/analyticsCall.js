import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { hotjar } from 'react-hotjar';


export default (function () {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    return {
        onRouteUpdate({ location }) {
            window.analytics.page({
                title: document.title,
                path: location.pathname
            });

            hotjar.initialize(1822641, 6);

            if (window.fbq) {
                window.fbq('init', '880656202502108');
                window.fbq('track', 'PageView');
            }

            if (window && window.ldfdr && window.ldfdr.pageview && typeof window.ldfdr.pageview === 'function') {
                window.ldfdr.pageview();
            }
        },
    };
})();
