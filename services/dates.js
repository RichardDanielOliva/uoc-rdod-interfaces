export default class DatesServices {
    static months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    static format = (date) => {
        if([undefined, null].includes(date)) return '';

        date=new Date(date)
        return `${date.getFullYear()}/${
            date.getMonth() >= 9
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`
            }/${date.getDate()}`;
    }

    static formatLong = (date) => {
        if([undefined, null].includes(date)) return '';

        date=new Date(date);
        let monthNumber = this.months[date.getMonth()];

        return `${date.getDate()} ${monthNumber} ${date.getFullYear()}`;
    }

    static getNextDate = (initialDate= Date.now(), days = 0) => {
        let validDate = (new Date(initialDate))
        validDate.setDate(validDate.getDate() + days );
        return validDate.valueOf()
    }

    static compareDate = (date1, date2) => {
        return date1.getTime() >= date2.getTime()
    }
}