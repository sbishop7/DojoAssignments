// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].



var _ = {
   map: function(arr, funct) {
     //code here;
     let newArr = [];
     for(i in arr){
         newArr.push(funct(arr[i]));
     }
     return newArr;
   },
   reduce: function(arr, funct, result) { 
     // code here;
     let el = 0;
     if (!result){
         result = arr[0];
         el = 1
     }
     for(var i = el; i<arr.length; i++){
         result = funct(result, arr[i]);
     }
     return result;
   },
   find: function(arr, funct) {   
     // Goes through a given arr and finds the first value based on the search given in the provded function
     for(idx in arr){
         if(funct(arr[idx])){
            return arr[idx];
         }
     }
   },
   filter: function(arr, funct) { 
     // Return a new array with values in the orignal arrange that when given to callback function, callback function returns true
     let newArr = [];
     for(idx in arr){
         if(funct(arr[idx])){ //if function returns true
            newArr.push(arr[idx]);
         }
     }
     return newArr;
   },
   reject: function(arr, funct) { 
     // code here;
     let newArr = [];
     for(idx in arr){
         if(!funct(arr[idx])){ //if function does not return true (or if it returns false)
            newArr.push(arr[idx]);
         }
     }
     return newArr;
   }
 }
// you just created a library with 5 methods!

let evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

let even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);

let threes = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(threes);

let odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);

let sum = _.reduce([1, 2, 3, 4, 5], function(memo, num){ return memo * num; });
console.log(sum);