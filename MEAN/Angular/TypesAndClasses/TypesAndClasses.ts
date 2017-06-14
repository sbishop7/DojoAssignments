let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: { name: string} = { name: "Bill"};
let anythingVariable: any = "Hey";
let anythingVariable2: any = 25;
let arrayOne: Array<boolean> = [true, false, true, true]; 
let arrayTwo: Array<any> = [1, 'abc', true, 2];
let myObj2: { x: number, y: number } = { x: 5, y: 10 };
//object constructor
class MyNode {
    val: number;
    _priv: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val
    }
    doSomething(): any{
        this._priv = 10;
    }
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
