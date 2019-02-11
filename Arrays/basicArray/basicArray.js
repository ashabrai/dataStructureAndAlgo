'use strict';

// create a function to add values into an empty array

module.exports = function addValuesArray(array) {
    let sum = [];
    for(let i = 0; i < 100; i++){
        sum[i] = i + 1;
    }
    return sum;
};

//--------create a function that would add all indexs and return total sum 

module.exports = function addValuesInArr(array) {
    let sum = 0;
    for(let i =0; i < array.length; i++) {
        sum += array[i];
    } return sum;
};

//--------- adding value to the beginning of array 

module.exports = function insertNumBeg(array, x) {
    for(let i = array.length; i >= 0; --i) {
        array[i] = array[i -1];
    } array[0] = x;
    return array;
};
//----------------------------------------//
// remove an element in the beginning of the array, however this way will lea
// leave extra space 
// return [2, 3,4,5,6, undefined]

module.exports = function removeInt(array) {
    for(let i =0; i < array.length; i++){
        array[i] = array[i + 1]
    } return array;
};
 //------------------------------------------------// 
// adding values to the middle index using splice
// key things with splice:
// starting index/where you want to begin adding nums 
// number of elements to remove (or just 0 - if your adding values)
// and finally what elements you're adding to the array 

// let array = [1,2,3,7,8,9]

// array.splice(3, 0 ,4,5,6) : return array === 1,2,3,4,5,6,7,8,9
// to remove items 

//array.splice(3,3) : return array === 1,2,3

//------------------------------------------------//

// the correct way to sort values when using .sort method 
// without the compare func it sorts the values lexicographically 
// so with the compare func it sorts if numerically

module.exports = function sortNums(array) {
    function compare(num1, num2) {
        return num1 - num2
    }
    return array.sort(compare);
}
//---------------------------------------------//

// check if string is Palindrome
module.exports = function checkPalindrome(string) {
    let stack = new Stack();
    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    }
    let rString = "";
    while(string.length > 0){
        rString += stack.pop();
    }
    if(string === rString) {
        return true;
    }
    return false;
}

// exercises to try 

// Write a function that takes an arithmetic expression as an argument and returns
// the position in the expression where a parenthesis is missing 

// Giving a pez dispenser, that has red, yellow and orange. Using the stack method
//create a function that removes all the yellow pez without changing the order of the other candies in the despensor
