var childHeight = 54;
function displayifChildIsAbleToRideTheRollerCoaster() {
    if (childHeight > 52) {
        console.log("Get on that ride, kiddo!")}
    else {
        console.log("Sorry kiddo. Maybe next year.")}
    }


//----Challenge Functions----


//Challenge 2 | Get even 1000
//Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise
function sum_even_numbers(){
    var sum = 0;
    for (var i=1; i<=1000; i++) {
        if (i%2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}


//Challenge 3 | Some Odd 5000
//Write a function that returns the sum of all the odd numbers from 1 to 5000
function sum_odd_5000() {
    var sum = 0;
    //your code here
    for (var i=1; i<=5000; i++) {
        if (i%2 !== 0) {
            sum = sum + i;
        }
    }
    return sum; 
}


//Challenge 4 | Iterate an array
//Write a function that returns the sum of all values within an array.
function iterArr(arr) {
    //your code here
    var sum = 0;
    for (var i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum; 
}

//Challenge 5 | Find Max
//Given an array with multiple values, write a function that returns the max number in the array.
function findMax(arr) {
    //your code here
    var max=0;
    for (var i = 0; i<arr.length; i++) {
        if(arr[i]>=max){
            max=arr[i];
        }
        
    }
    return max; 
}

//Challenge 6 | Find Average
//Given an array with multiple values, write a function that returns the average of the values within the array.
function findAvg(arr) {
    //your code here
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    return avg; 
}

//Challenge 7 | Array Odd
//Write a function that would return an array of all the odd numbers between 1 and 50.
function oddNumbers() {
    var arr = [];
    //your code here
    for (var i=0; i<=50; i++) {
        if(i%2!==0) {
            arr.push(i);
        }
    }
    return arr; 
}

//Challenge 8 | Greater than Y
//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
function greaterY(arr, Y) {
    //your code here
    var count = 0;
    
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > Y) {
            count++;
        }
    }
    return count; 
}

//Challenge 9 | Squares
//Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself.
function squareVal(arr) {
    //your code here
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr; 
}

//Challenge 10 | Negatives
//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.  When the program is done, the array should contain no negative values.
function noNeg(arr) {
    //your code here
    for (var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr; 
}

//Challenge 11 | Max/Min/Avg
//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the orginal array.
function maxMinAvg(arr) {
    //your code here
    var arrnew=[];
    var max=0;
    var min=arr[0];
    var avg=0;
    var sum=0;
    
    //FindMax
    for(var i=0; i<arr.length; i++) {
        if(arr[i] >= max) {
            max = arr[i];
        }
    }
    //FindMin
    for(var j=0; j<arr.length; j++) {
        if(arr[j] <= min) {
            min = arr[j];
        }
    }
    //FindAvg
    for(var n=0; n<arr.length; n++) {
        sum = sum + arr[n];
    }
    avg=sum/arr.length;
    
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew; 
}

//Challenge 12 | Swap Values
//Write a function that will swap the first and last values of any given array.
function swap(arr) {
    //your code here
        var x = arr[0]
        var y = arr[arr.length-1]
        
        var arrnew = arr;
        arrnew[0] = y;
        arrnew[arr.length-1] = x;
        
    return arrnew; 
}

//Challenge 13 | Number to String
//Write a function that sets any negative number of an array to the string 'Dojo'.
function numToStr(arr) {
    //your code here
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr; 
}



