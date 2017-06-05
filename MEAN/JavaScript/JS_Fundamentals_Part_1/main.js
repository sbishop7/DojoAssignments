var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (item in x){
    console.log(x[item])
}
x.push(100)
var newArray = ["hello", "world", "JavaScript is Fun"] 
x.push(newArray)
console.log(x)
var sum = 0;
for(var i = 1; i<=500; i++){
    sum += i;
}
console.log(sum)
var array = [1, 5, 90, 25, -3, 0]
var min = array[0];
for(i in array){
    if(array[i] < min){
        min = array[i]
    }
}
console.log(min);
var arraySum = 0;
for(i in array){
    arraySum += array[i];
}
var avg = arraySum/array.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

console.log(newNinja);

for(key in newNinja){
    console.log(key, ": ", newNinja[key])
}