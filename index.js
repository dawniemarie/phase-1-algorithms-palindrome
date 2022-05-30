function isPalindrome(word) {
  const length = word.length
  for (let i=0; i<length / 2; i++) {
    if (word[i] !== word[length-1-i]) {
      return false;
    }
  }
  return true;
}

/* 
Find the string length and loop through half of the string.
If the first and last string are not the same, return false.
If the first and last string are the same, return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(isPalindrome("reviver"))
  console.log(isPalindrome("level"))
  console.log(isPalindrome("cat"))
  console.log(isPalindrome("dog"))
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
