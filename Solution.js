
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {

    intervals.sort((x, y) => compare_ascendingStart_ifStartIsEqual_descendingEnd(x, y));
    let previousEnd = 0;
    let counter_intervalsNotCovered = 0;

    for (let interval of intervals) {
        if (previousEnd < interval[1]) {
            counter_intervalsNotCovered++;
            previousEnd = interval[1];
        }
    }
    return counter_intervalsNotCovered;
};

/**
 * @param {number[]} x
 * @param {number[]} y
 * @return {number}
 */
function compare_ascendingStart_ifStartIsEqual_descendingEnd(x, y) {
    return x[0] === y[0] ? y[1] - x[1] : x[0] - y[0];
}
