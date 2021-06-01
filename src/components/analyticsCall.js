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

            fbq('init', '880656202502108');
            fbq('track', 'PageView');

            if (window.ldfdr.pageview && typeof window.ldfdr.pageview === 'function') {
                if (window.ldfdr.pageview && typeof window.ldfdr.pageview === 'function') {
                    window.ldfdr.pageview();
                }
            }
        },
    };
})();