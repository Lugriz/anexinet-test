/**
 * Write a function that receives n (a number) as a parameter and prints all valid 
 * (properly opened and closed) combinations of n-pairs of parentheses.
 * 
 */

function validParentheses(num) {
    const valids = [];

    buildParentheses(num, 0, 0, '', valids);

    return valids;
}

function buildParentheses(num, count1, count2, stack, valids) {
    if (count1 == num && count2 == num) {

        if (isValidParentheses(stack)) {
            valids.push(stack);
        }

        return;
    }

    if (count1 < num) {
        buildParentheses(num, count1 + 1, count2, stack + '(', valids);
    }

    if (count2 < num) {
        buildParentheses(num, count1, count2 + 1, stack + ')', valids);
    }
}

function isValidParentheses(sequence) {
    const stack = [];

    for (let p of sequence) {
        if (p !== '(') {
            if (stack.length == 0) {
                return false;
            }

            stack.pop();
            continue;
        }

        stack.push(p);
    }

    return stack.length == 0;
}

module.exports = { validParentheses };