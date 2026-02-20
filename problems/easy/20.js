// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let st = []

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            st.push(char)
        }

        else if (
            char === ')' || char === '}' || char === ']'
        ) {
            if (st.length === 0) return false

            let top = st[st.length - 1];
            if (
                char === ')' && top !== '(' ||
                char === '}' && top !== '{' ||
                char === ']' && top !== '['
            ) {
                return false
            }
            st.pop()
        }
    }
    return st.length === 0;
};

console.log(isValid("{(])}"))