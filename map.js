

var x = [2,4,6];


//Passing array and callback as arguments in the function

function map(arr,callback){
    //Creating a new array
    var arrRes =[];
    // Assigning the counter and looping it to the array(parameter))
    for(var i =0;i<arr.length;i++){
        
        // Pushing the function. Initial value will be callback(arr[0]) which is equal to 2. Now fn(arr[0])is pushed into the end part of array.
        arrRes.push(callback(arr[i]));
    }
    return arrRes;
}
// Declaring the callback function using a single parameter.
function y (num){
    return num * 2;
}


var res = new map(x,y);
console.log(res);














































