function minDate(dates) {
    let min = dates[0];

    for (let i = 1; i < dates.length; i++) {
        if (dates[i] < min) {
            min = dates[i];
        }
    }

    return min;
}