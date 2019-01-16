export default {
    filters: {
        date(dateString) {
            const dateObj = new Date(dateString)
            const month = dateObj.toLocaleString('en-us', { month: 'long' });
            return month + " " + dateObj.getFullYear();
        }
    }
}