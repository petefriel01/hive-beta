export default {
    install: (app: any) => {
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.$hivebeta = {
            formatDate(date: string) {
                if (!date) {
                    return;
                }
                const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
                const newDate  = new Date(date);
                return newDate.toLocaleDateString('en-US', options);
            },
        };
    },
};
