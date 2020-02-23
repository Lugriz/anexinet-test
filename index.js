const { getDateDifference } = require('./1');
const { oddElements } = require('./2');
const { printStringsInFrame } = require('./3');
const { numberDescription } = require('./4');
const { validParentheses } = require('./7');


const [ _, __, num] = process.argv;

switch (num) {
    case '1':
            console.log('\n\nRunning test 1...');
            const date1 = new Date();
            const date2 = new Date();

            // Giving 60 extra minutes
            date2.setMinutes(date1.getMinutes() + 60);

            console.log(getDateDifference(date1, date2));
        break;
    
    case '2':
            console.log('\n\nRunning test 2...');
            console.log(oddElements([1,2,3,4,5,6,7]));
        break;

    case '3':
            console.log('\n\nRunning test 3...');
            printStringsInFrame(["November", "is", "the", "coolest", "month", "of", "the", "Year"]);
        break;

    case '4':
            console.log('\n\nRunning test 4...');
            numberDescription(1, 5);
        break;

    case '7':
            console.log('\n\nRunning test 7...');
            console.log(validParentheses(3));
        break;

    default:
        console.log('The test does not exist. (1,2,3,4,7)');
}