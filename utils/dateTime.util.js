class DateTimeUtil {
    today() {
        return Date.today;
    }
    
    setYear(date, year) {
        return date.setYear(year);
    }

    daysDifference(dateLeft, dateRight) {
        return Math.round((dateRight - dateLeft)/(1000*60*60*24));
    }
}

module.exports = new DateTimeUtil();