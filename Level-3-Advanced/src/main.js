// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }
    return output;
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  var total = [];
  var result = [];
  for(var i = 0; i < collection.length; i++){
    	total.push(callback(collection[i])); //pushing the values into total. and that is the function found in element i with the value as the argument
    	if(total[i] == true){
		result.push(collection[i]);
      }
    }
  return result;
}


// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  var total = [];
  var result = [];
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
    	total.push(callback(collection[i])); //pushing the values into total. and that is the function found in element i with the value as the argument
    	if(total[i] === true){
      }else{
        result.push(collection[i]);
      }
    }
  }else if(typeof collection === 'object'){
    for(var prop in collection){
        if(!callback(collection[prop])){
            result[prop] = collection[prop];
        }
    }
  }
  return result;
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]

function uniq(array) {
    //CODE HERE
	var n = []; 
	for(var i = 0; i < array.length; i++) 
	{
		if (n.indexOf(array[i]) == -1) n.push(array[i]);
	}
	return n;
}


/*
        for (var y = 0; y < result.length; y++) {
            if (array[i] === result[y]) {
                result.push(array[i]);
            }
*/
// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
    //CODE HERE
    var result = -1;
    for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
            result = i;
			return result;
        }
    }
    return result;
}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
    var count = 0;
    var result;
    return function(input) {
        if (count < 1) {
            count = count + 1;
            return result = func(input);
        } else {
            return result;
        }
    }
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
    var result;
  	if(start !== undefined){
        result = start;
        for(var i = 0; i < array.length; i++){
            result = callback(result, array[i]);
        }
      }else{
          result = array[0];
          for(var j = 1; j < array.length; j++){
              result = callback(result, array[j]);
          }
      }
    return result;
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  //return true or false. if/else
  //for loops
  //at least one returns true, then it will return
  //but if none of them return true, or any of them are false. passOne will return false
  //if im looping through an array one at a time, and one of the conditions asks that if even one returns false then it could stop immediately. 
  
  var total = [];
  
  for(var i = 0; i < array.length; i++){
    	total.push(func(array[i])); //pushing the values into total. and that is the function found in element i with the value as the argument
    	if(total[i] == false){
        return false;
      }
    }
  return true;
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  var result = [];
  result = array.reduce(function(a,b){
    return a.concat(b);
  },[]);
  return result;
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  var result = [];
  var trueEnd = [];
  var arrCheck;
  var temp;
  result = array.reduce(function(a,b){
    return a.concat(b);
  },[]);
  for(var i = 0; i < result.length; i++)
    {
      var arrCheck = Array.isArray(result[i]);
      if(arrCheck === true){
        trueEnd = result.reduce(function(a,b){
          return a.concat(b);
        },[]);
      }
    }
  return trueEnd
}