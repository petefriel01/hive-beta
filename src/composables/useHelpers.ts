export function useHelpers() {

    // returns 2022-09-14
    const getTodayDate = () => new Date().toJSON().slice(0,10);

    const getWeekStarting = () => getTodayDate().slice(0,8)+getFirstDayOfWeek(new Date()).getDate();

    const getDayFromDatetime = (d: string) => {
        if(!d){
            return;
        }
        return d.split('T')[0].split('-')[2];
    };

    const getFirstDayOfWeek = (d: string) => {
        if(!d){
            return;
        }
        const date = new Date(d);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };

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
