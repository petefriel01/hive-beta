export function useHelpers() {

    // returns 2022-09-14
    const getTodayDate = () => new Date().toJSON().slice(0,10);

    const getWeekStarting = () => getTodayDate().slice(0,8)+getFirstDayOfWeek(new Date()).getDate();

    const getDayFromDatetime = (d) => {
        if(!d){
            return null;
        }
        return d.split('T')[0].split('-')[2];
    };

    const getFirstDayOfWeek = (d) => {
        if(!d){
            return null;
        }
        // 👇️ clone date object, so we don't mutate it
        const date = new Date(d);
        const day = date.getDay(); // 👉️ get day of week
        // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };

    // const weekStarting = getFirstDayOfWeek(new Date()).getDate();
    // const monday = today.slice(0,8)+weekStarting;

    const getArticlesPerDay = (articleList: any[]) => {
        const storyStack = [];
        const today = new Date().getDate();
        const monday = getFirstDayOfWeek(new Date()).getDate();
        for(let i = monday; i <= today; i++){
            storyStack.push(articleList.filter((item) => {
                return getDayFromDatetime(item.publishedAt) == i;
            }));
        }
        return storyStack;
    };

    return{
        getTodayDate,
        getWeekStarting,
        getDayFromDatetime,
        getFirstDayOfWeek,
        getArticlesPerDay
    };
}
