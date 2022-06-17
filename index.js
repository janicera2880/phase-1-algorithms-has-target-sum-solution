function hasTargetSum(array, target) {
  /*Make a function called hasTargetSum that checks if two numbers from the array add up to some target. Example, 
  if I have and array [1, 2, 3, 4] and the target is 7. Should return true because 3 and 4 is 7. For each number
  check if there's a number that adds to the target.
*/
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space:O(n)
*/

/* 
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)
  iterate through each number in the array
  for the current number, identify a complemet that adds to the target (comp = target - num)
  iterate through the rest of the array
  check if any number is our complement
  if so, return true...
  If i reach the end of array, return false.
  
*/

/*
Other solution here
  create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false...
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
