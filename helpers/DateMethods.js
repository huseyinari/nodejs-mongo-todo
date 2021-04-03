const getDateWithTimezone = (date) => {   // Date üretirken gelen sonuca 180 dakika ekleme yapıyorum
    let utcDate = new Date(date);
    utcDate.setMinutes(utcDate.getMinutes() - utcDate.getTimezoneOffset());
    return utcDate;
}

module.exports = {
    getDateWithTimezone
}