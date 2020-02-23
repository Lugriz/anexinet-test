/**
 * Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
 * For example the array ["November", "is", "the", "coolest", "month", "of", "the", "Year"] gets printed as:
 * 
 *  ************
    * November *
    * is       *
    * the      *
    * coolest  *
    * month    *
    * of       *
    * the      *
    * Year     *
    ************
 */

function printStringsInFrame(arr) {
    const frameWidth = checkLongestString(arr);
    const horizontalBorder = '*'.repeat(frameWidth + 4);

    console.log(horizontalBorder);

    for (let string of arr) {
        const spaces = ' '.repeat(frameWidth - string.length);
        console.log(`* ${string} ${spaces}*`);
    }

    console.log(horizontalBorder);
}

// probably using arr.reduce(...), could works as well
function checkLongestString(arr) {
    let longest = 0;

    for (let string of arr) {
        if (string.length > longest) {
            longest = string.length;
        }
    }

    return longest;
}

module.exports = { printStringsInFrame };