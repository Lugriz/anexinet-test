/**
 * Write a function that receives 2 Date parameters and returns the time difference in minutes.
 */

function getDateDifference(from, to) {
    // does not matter if the second param is higher than the first one, the result is absolute
    return Math.abs((to.getTime() - from.getTime()) / 1000 / 60);
}

module.exports = { getDateDifference };