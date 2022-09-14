export default {
    install: (app) => {
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.$hivebeta = {
            formatDate(date) {
                if (date) {
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const newDate  = new Date(date);
                    return newDate.toLocaleDateString('en-GB', options);
                }

            },
        };
    },
};
