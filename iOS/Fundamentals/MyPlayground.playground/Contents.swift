struct Rectangle {
    var width: Int
    var height: Int
}
var square1 = Rectangle(width: 10, height: 10)
var square2 = square1                         // Here the val inside square 1 (an instance of Rectangle)
                                                // is copied and passed rather than just pointed to.
print("square1's width: \(square1.width), square2's width \(square2.width)")
                                                // They are the same because square2 is a copy of square1
square2.width = 20                            // This only changes square2 because there are
                                                // 2 separate instances of rectangle in memory
square2.height = 20
print("square1's width: \(square1.width), square2's width \(square2.width)")
                                                // They are different now: changing square2 changed a
                                                // completely separate instance from square1.
