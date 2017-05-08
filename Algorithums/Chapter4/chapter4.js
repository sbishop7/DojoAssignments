function removeBlanks(string){
    var wordArray = string.split(" ");
    return wordArray.join("");
}

function removeBlanks2(string){
    var str = "";
    for(var i = 0; i < string.length; i++)
        if(string[i] != " "){
            str += string[i];
        }
    return str;
}

function getDigits(string){
    var arr = string.split("");
    var newString = "";
    console.log(arr);
    for(var i = 0; i<arr.length; i++){
        if(Number(arr[i])){
            newString += arr[i];
        }
    }
    return newString;
}

function acronyms(string){
    var acronym = "";
    var wordArray = string.split(" ");
    for(var i = 0; i<wordArray.length; i++){
        wordArray[i] = wordArray[i].split("");
        if(wordArray[i][0]){
            acronym += wordArray[i][0];
        }
    }
    return acronym.toUpperCase();
}

function countNonSpaces(string){
    var count = 0;
    for(var i = 0; i<string.length; i++){
        if(string[i] != " "){
            count += 1;
        }
    }
    return count;
}

function reverseString(string){
    var newString = "";
    for(var i=string.length-1; i>=0; i--){
        newString += string[i];
    }
    return newString;
}

function removeEvenLengthedStrings(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i].length%2 == 0){
            console.log(arr[i] + " is even");
            for(var j = i; j<arr.length-1; j++){
                arr[j] = arr[j+1];
                console.log(arr);
            }
            arr.pop();
            i--;
            console.log(arr);
        }
    }
    return arr;
}

function convertToRomanNumerals(num){
    var string = "";
    var matrix = {
        1000: M,
        900: CM,
        500: D,
        400: CD,
        100: C,
        90: XC,
        50: L,
        40: XL,
        10: X,
        9: IX,
        5: V,
        4: IV,
        1: I
    }
    var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = [M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I];
    if(num <0 ){
        string = "Number must be a positive number";
        return string;
    }
    else if(num >= 4000){
        string = "Number must be less than 4000";
        return string;
    }
    else{
        string = "perfect range";
        while( i in num){
            if(num >= number[i]){
                string += roman[i];
                num -= number[i];
            }
        }
    }
    console.log(arr);
    return string;


}