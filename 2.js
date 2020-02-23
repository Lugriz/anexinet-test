/**
 * Write a function that returns the elements on odd positions in an array.
 */

function oddElements(arr) {
    const odds = [];

    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2 === 0)) {
            odds.push(arr[i]);
        }
    }

    return odds;
}

module.exports = { oddElements };