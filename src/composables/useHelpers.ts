export function useHelpers() {
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
    const formatArticlesTimeline = () =>{

    };
    return{
        getDayFromDatetime,
        getFirstDayOfWeek,
        formatArticlesTimeline
    };
}
