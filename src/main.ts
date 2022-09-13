import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import hivebeta from './plugins/hivebeta';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';

loadFonts();

createApp(App)
    .use(router)
    .use(createPinia())
    .use(vuetify)
    .use(hivebeta)
    .mount('#app');
