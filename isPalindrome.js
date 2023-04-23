// Write your code below
//Return true if this word is a palindrome. false if it is not. 
//A palindrome is a word that is spelled the same backwards and forwards.

const isPalindrome = (str) => {
    for (let i = 0; i <= str.length; i++) {
        let forwardStr = str[i].toLowerCase()
        for (let j = str.length - 1; j >= 0; j++) {
            let backwardStr = str[j].toLowerCase()
            if (forwardStr === backwardStr) {
                return true
            } else {
                return false
            }
        }
    }
}

console.log(isPalindrome("hamburger"))