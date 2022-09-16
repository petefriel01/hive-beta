// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
    display: {
        mobileBreakpoint: 'md',
        thresholds: {
            xs: 0,
            sm: 414,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
    },
});