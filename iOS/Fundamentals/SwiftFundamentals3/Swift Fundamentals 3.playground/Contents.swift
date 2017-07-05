import UIKit

// Write a program that adds the numbers 1-255 to an array
var arr = [Int]()
for i in 1...255{
    arr.append(i)
}
//print (arr)

//Swap two random values in the array


//let length = arr.count
//var random1 = Int(arc4random_uniform(UInt32(length)))
//var random2 = Int(arc4random_uniform(UInt32(length)))
//
//var temp = arr[random1]
//arr[random1] = arr[random2]
//arr[random2] = temp

// Now write the code that swaps random values 100 times (You've created a "Shuffle"!)

let length = arr.count

for i in 1...100 {
    var random1 = Int(arc4random_uniform(UInt32(length)))
    var random2 = Int(arc4random_uniform(UInt32(length)))
    
    var temp = arr[random1]
    arr[random1] = arr[random2]
    arr[random2] = temp
    
}
//print (arr)

for idx in 0..<arr.count {
    if(arr[idx] == 42){
        arr.remove(at: idx)
        print ("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index " + String(idx))
        break
    }
}