export function useHelpers() {

    const getDayFromDatetime = (d) => {
        const date = new Date(d);
        const day = date.getDate();
        return day;
    };

    const getFirstDayOfWeek = (d) => {
        // 👇️ clone date object, so we don't mutate it
        const date = new Date(d);
        const day = date.getDay(); // 👉️ get day of week

        // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);

        return new Date(date.setDate(diff));
    };

    return{
        getDayFromDatetime,
        getFirstDayOfWeek
    };
}
