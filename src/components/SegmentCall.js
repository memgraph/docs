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
        },
    };
})();