/**
 * Write a function that prints the description of the previous number in a sequence of 
 * numbers, use two parameters, the first is the number to start the sequence and the second 
 * the number of iterations to show after the first number.
 * 
 * For example: sayWhatYouSee(1, 5) the result prints out:
 * 
 *  1
    11
    21
    1211
    111221
    312211
 */

function numberDescription(start, repeats) {
    console.log(start.toString());

    while (repeats > 0) {
        start = describeNumber(start.toString());
        console.log(start);
        repeats--;
    }
}

function describeNumber(number) {
    const description = [];
    let currentDigit = ''
    let index = 0;

    for (let digit of number) {
        if (currentDigit == digit) {
            description[index -2]++;
        } else {
            description.push(1, digit);
            currentDigit = digit;
            index += 2;
        }
    }

    return description.join('');
}

module.exports = { numberDescription };