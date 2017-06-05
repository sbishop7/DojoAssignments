function runningLogger(){
    console.log('I am running!');
}

function multiplyByTen(x){
    var result = x * 10;
    return result;
}
// runningLogger();
// console.log(multiplyByTen(5));

function stringReturnOne(){
    return "This is hard coded string 1";
}

function stringReturnTwo(){
    return "This is hard coded string 2";
}

// console.log(stringReturnOne());
// console.log(stringReturnTwo());

function caller(x){
    // console.log(typeof(x))
    if(typeof(x) === "function"){
        x()
    }
}

// caller(runningLogger);
// caller("string");

function myDoubleConsoleLog(x,y){
    if(typeof(x) === "function"){
        console.log(x());
    }
    if(typeof(y) === "function"){
        console.log(y());
    }
}
// myDoubleConsoleLog(runningLogger, stringReturnTwo)

function caller2(){
    console.log("starting");
    setTimeout(function(){
        myDoubleConsoleLog(stringReturnOne,stringReturnTwo);
        console.log("ending?");
    }, 2000);
    return "Interesting";
}

console.log(caller2());