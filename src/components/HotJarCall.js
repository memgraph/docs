import { hotjar } from 'react-hotjar';

export default (function () {
    return {
        componentDidUpdate() {
            hotjar.initialize(1822641, 6);
        },
    };
})();