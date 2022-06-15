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
    let filtered = [];  // New array that will hold the results
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){  // Return all values that match the condition passed in the callback function.
            filtered.myPush(this[i])
        }
    }
    return filtered;  // Output new array
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++){  
        if (callbackFn(this[i], i, this)){ // We execute the callback function for each value
            return true;  // If "true" at any point, we exit the loop
        }
    }
    return false;  // Returns "false" when the if-statement never return "true"
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++){  
        if (!callbackFn(this[i], i, this)){ // Execute the callback function for each value
            return false;  // If "false" is returned at any point, exit the loop
        }
    }
    return true;  // Returns "true" when the if-statement never return "false"
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    var res = 0;
    for (let i = 0; i < this.length; i++){ // cycles through each number in the array
        callbackFn(res = res + this[i]) // On every iteration we add the element 
    }
    return res; // Return the total sum
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
    for (let i = 0; i < this.length; i++){
        if (searchElement === this[i]){  // If the searchElement is in the array: return true
            return true;
        }
    }
    return false;  // If the searchElement is not in the array: return false
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
