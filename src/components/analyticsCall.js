import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { hotjar } from 'react-hotjar';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('880656202502108');
ReactPixel.pageView();

hotjar.initialize(1822641, 6);

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

            if (window.ldfdr.pageview && typeof window.ldfdr.pageview === 'function') {
                window.ldfdr.pageview();
            }
        },
    };
})();