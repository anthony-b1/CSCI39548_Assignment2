/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.
In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// Professor Lai's Push function //
Array.prototype.myPush = function(...args) {  // Use rest parameter to accept any number of input arguments
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;  // Increment the array index by 1
    }
    return this.length;  // Return new length of "this" array
};

// Map //
Array.prototype.myMap = function(callbackFn) {
    let resultArray = [];  // New array that will hold the results
    for (let i = 0; i < this.length; i++){  // "this" keyword, calling the array
        resultArray.myPush(callbackFn(this[i]));  // Push callback function element onto the new array
    }
    return resultArray; // Output results to a new array and return it 
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
    // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
    // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
    // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
    // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
    // Place your code here.
};