import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { hotjar } from 'react-hotjar';

const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
};



export default (function () {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    return {
        componentDidMount() {
            const ReactPixel = require('react-facebook-pixel');
            ReactPixel.default.init('880656202502108', options);
        },
        onRouteUpdate({ location }) {
            window.analytics.page({
                title: document.title,
                path: location.pathname
            });
            hotjar.initialize(1822641, 6);
        },
    };
})();