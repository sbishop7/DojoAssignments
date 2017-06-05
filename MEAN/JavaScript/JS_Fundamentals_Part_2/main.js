// function sumIntergersBetween(x,y){
//     var sum=0;
//     if(x<y){
//         for(var i=x; i<=y; i++){
//             sum += i;
//         }
//     }
//     else{
//         for(var i=y; i<=x; i++){
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// sumIntergersBetween(2,10);

// function findMin(arr){
//     var min = arr[0];
//     for(i in arr){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min;
// }

// console.log(findMin([1, 5, 90, 25, -3, 0]));

// function findAvg(arr){
//     var arraySum = 0;
//     for(i in arr){
//         arraySum += arr[i];
//     }
//     var avg = arraySum/arr.length;
//     return avg;
// }

// console.log(findAvg([1, 5, 90, 25, -3, 0]));

// var sumIntergersBetween = function(x,y){
//     var sum=0;
//     if(x<y){
//         for(var i=x; i<=y; i++){
//             sum += i;
//         }
//     }
//     else{
//         for(var i=y; i<=x; i++){
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// var findMin = function(arr){
//     var min = arr[0];
//     for(i in arr){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min;
// }
// var findAvg = function(arr){
//     var arraySum = 0;
//     for(i in arr){
//         arraySum += arr[i];
//     }
//     var avg = arraySum/arr.length;
//     return avg;
// }

// console.log(sumIntergersBetween(1,10), findMin([1, 5, 90, 25, -3, 0]), findAvg([1, 5, 90, 25, -3, 0]))

var myFunctions = {
    sumIntergersBetween: function(x,y){
        var sum=0;
        if(x<y){
            for(var i=x; i<=y; i++){
                sum += i;
            }
        }
        else{
            for(var i=y; i<=x; i++){
                sum += i;
            }
        }
        console.log(sum);
    },
    findMin: function(arr){
        var min = arr[0];
        for(i in arr){
            if(arr[i] < min){
                min = arr[i]
            }
        }
        return min;
    },
    findAvg: function(arr){
        var arraySum = 0;
        for(i in arr){
            arraySum += arr[i];
        }
        var avg = arraySum/arr.length;
        return avg;
    }
}

var person = {
    name: "Seth",
    distance_traveled: 0,
    say_name: function(){
        console.log(person.name);
    },
    say_something: function(myString){
        console.log(person.name, "says '", myString, "'");
    },
    walk: function(){
        console.log(person.name, "is walking");
        person.distance_traveled += 3;
        return person;
    },
    run: function(){
        console.log(person.name, "is running");
        person.distance_traveled += 10;
        return person;
    },
    crawl: function(){
        console.log(person.name, "is crawling");
        person.distance_traveled += 1;
        return person;
    }
}

person.walk().crawl().run();

console.log(person.distance_traveled);



