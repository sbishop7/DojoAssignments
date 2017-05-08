function minToFront(arr){
    var min = arr[0];
    var spot = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
            spot = i;
        }
    }
    for(var j=spot; j>0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = min;
    return arr;
}

function reverseArray(arr){
    var temp = arr[0];
    for(var i=0;i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

function rotateArr(arr, shiftBy){
    if(shiftBy >0){
        for(var i = 0; i<shiftBy; i++){
            var temp = arr[arr.length-1];
            for(var j = arr.length-1; j >0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
    }
    else{
        for(var i = 0; i>shiftBy; i--){
            var temp = arr[0];
            for(var j = 0; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr[arr.length-1] = temp;
        }
    }
    return arr;
}

function filterRange(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
        else if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(min, max, arr);
    for(i = 0; i<arr.length; i++){
        if(arr[i] == min || arr[i] == max){
            for(var j = i; j<arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
        }
    }
    return arr;
}

function arrConcat(arr1,arr2){
    var newArr = [];
    for(var i = 0; i<arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for(var i = 0; i<arr2.length; i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}

function skyline(arr){
    var view = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>view){
            view = arr[i];
        }
        else {
            for(var j = i; j<arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
            i -= 1;
        }
    }
    return arr;
}

function removeNegatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            for(var j=i; j<arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

function removeNegatives2(arr){
    var temp = 0;
    for(var i=arr.length-1; i>0; i--){
        if(arr[arr.length-1]<0){
            arr.pop();
        }
        else if(arr[i]<0){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp
            i = arr.length - 1;
        }
    }
    return arr;
}

function secondToLast(arr){
    if(arr.length<2){
        return null;
    }
    return arr[arr.length-2];
}

function secondLargest(arr){
     if(arr.length<2){
        return null;
    }
    var max = arr[i];
    var secondMax = arr[i];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>max){
            secondMax = max;
            max = arr[i];
        }
    }
    return secondMax;
}

function nthToLast(arr, n){
    if(arr.length<n){
        return null;
    }
    return arr[arr.length-n];
}
function returnNthLargest(arr,n){
    if(arr.length<n){
        return null;
    }
    var temp = arr[i];
    for(var i = 0;i<arr.length; i++){
        for(var j = i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    var nthLargest = arr[arr.length - n];

    return nthLargest;
}

function isCreditCardValid(digitArr){
    var lastDigit = digitArr[digitArr.length-1];
    var sum = 0;
    digitArr.pop();
    for(var i = digitArr.length-1; i>0; i -= 2){
        digitArr[i] = digitArr[i] * 2;
        if(digitArr[i]>9){
            digitArr[i] -= 9;
        }
    }
    for(i = 0; i<digitArr.length; i++){
        sum += digitArr[i];
    }
    sum += lastDigit;
    if(sum%10 === 0){
        return true;
    }
    else{
        return false;
    }
}

function shuffle(arr){
    var temp;
    for(var i = 0; i<arr.length; i++){
        var j = Math.trunc(Math.random()*arr.length);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function removeRange(arr,start,end){
    for(var i = start; i<= end; i++){
        arr[i] = null;
    }
    for(i = start; i<arr.length; i++){
        if(arr[i]){
            continue;
        }
        else {
            for(var j=i; j<arr.length; j++){
                arr[j] = arr[j+1]; 
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

function intermediateSums(arr){
    var sum = 0;
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(count == 10){
            for(var j = arr.length-1; j>=i; j--){
                arr[j+1] = arr[j];
            }
            arr[i] = sum;
            sum = 0;
            count = 0;
            continue;
        }
        count += 1;
        sum += arr[i];
    }
    if(count != 10){
        arr.push(sum);
    }
    return arr;
}

function doubleTrouble(arr){
    for(var i = 0; i<arr.length; i += 2){
        for(var j = arr.length-1; j>=i; j--){
            arr[j+1] = arr[j];
        }
    }
    return arr;
}

function zipIt(arr1,arr2){
    var newArr = [];
    var duration = arr1.length;
    if(duration<arr2.length){
        duration = arr2.length;
    }
    for(var i = 0; i<duration; i++){
        if(arr1[i]){
            newArr.push(arr1[i]);
        }
        if(arr2[i]){
            newArr.push(arr2[i]);
        }
    }

    return newArr;
}

function zipIt2(arr1,arr2){
    var duration = arr1.length;
    for(var i = 0; i<arr1.length; i++){
        if(arr1[i+1] && arr2[i]){
            for(var j = arr1.length-1; j>i;j--){
                arr1[j+1] = arr[j]
            }
            arr1[i+1] = arr2[i]
        }
        else if(arr2[i]){
            for(j = i; j<arr2.length; j++){
                arr1.push(arr2[i]);
            }
        }
    }

    return arr1;
}