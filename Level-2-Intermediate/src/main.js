// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
	//CODE HERE
    var result = [];
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] % 2 != 0)
        {
            result.push(array[i]);
        }
    }
    return result;

}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
    var result = [];
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] % 2 == 0)
        {
            result.push(array[i]);
        }
    }
    return result;
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
	var result = [];
    var tempStore = [];
    for(var i = 0; i < array.length; i++)
    {
        for(var y = 0; y < array.length; y++)
        {
            if(array[y] > array[i])
            {
                
            }
        }


    }
    return result;

}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
    var result;
    result = string.replace(/^\s+|\s+$/gm, '');
    return result;
}

// returns an empty array object. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
	//CODE HERE
    var result = [];
    return result;
}