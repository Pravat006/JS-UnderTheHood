// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


// split the string to arrays of strings 
// join the strings excluding special characters like comma etc.

function isPalindrome(s: string): boolean {
    if (s.length === 0) return true
    let leftP: number = 0
    let rightP: number = s.length - 1

    while (leftP < rightP) {


        while (leftP < rightP && !isAlphaNumeric(s[leftP])) {
            leftP++
        }

        while (leftP < rightP && !isAlphaNumeric(s[rightP])) {
            rightP--
        }

        if (s[leftP].toLowerCase() !== s[rightP].toLowerCase()) {
            return false
        }
        leftP++
        rightP--
    }
    return true

};

function isAlphaNumeric(char: string) {
    const code = char.charCodeAt(0);

    return (
        (code >= 48 && code <= 57) ||
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)
    );
}

const p = "A man, a plan, a canal: Panama"

console.log(isPalindrome(p))
