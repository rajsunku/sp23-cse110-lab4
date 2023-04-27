# Part 2 Answers
1. "3" will be printed. This is because `i` is set as being a var, and `prices` is an array with a length of 3.
2. "150" will be printed. This is because `discountedPrices` is a var and is changed in each iteration of the loop, and at the last iteration if the loop, it calculates: `300 * (1-0.5) = 150`.
3. "150" will be printed. Since `finalPrice` is of type `var`, the final calculation it makes in the loop will be printed, which is: `Math.round(150*100) / 100 = 150`.
4. `[50, 100, 150]` is returned. The array, `discounted` is returned on line 16. It basically will contain the 50% discounted prices of the original array, which is what the returned array is.
5. There will be an error. This is because `i` is of type `let`, and is in the scope of the for loop, so since line 12 is outside that scope, there will be an error.
6. Exact same as question 5 with same reasoning.
7. "150" will be printed. Since `finalPrice` is made in the scope of the whole function, it can be accesed anywhere inside of it, including line 14.
8. `[50, 100, 150]` is returned. `discounted` is made in the scope of the function and will be returned the same way as question 4.
9. Exact same as question 5.
10. "3" is printed since the length of `prices` is 3.
11. `[50, 100, 150]` is returned. Although The array `discounted` is of type const, as long as a completely new array is not declared, it is still ok to push new values into it. So, it will still run as before.
12. A. `student.name`
    
    B. `student['Grad Year']`

    C. `student.greeting()`

    D. `student['Favorite Teacher'].name`

    E. `student.courseLoad[0]`
13. A. 32: `'3'` is a string, so `2` gets appended
    
    B. 1: `'3'` gets converted before subtraction

    C. 3: `null` gets converted to `0`

    D. 3null: `null` just gets appended since `'3'` is a string

    E. 4: `true` gets converted to `1`

    F. 0: both values get converted to `0`

    G. 3undefined: `undefined` gets appended since `'3'` is a string

    H. NaN: impossible to add or subtract by `undefined` unless it's a string add.

14. A. true: `'2'` gets converted to `2`
    
    B. false: Since both values are strings, `'2'` is lexicographically greater since the it starts with `2` compared to `1`

    C. true: `'2'` gets converted to `2`

    D. false: One is a string, the other is a number

    E. false: `true` is converted to `1`

    F. true: `Boolean(2)` is evaluated to `true` since `2 != 0`

15. `==` does conversions, while `===` does not. So, `===` essentially checks for type as well.
16. In `part2-question16.js`
17. The result is : `[2,4,6]`. This is because modifyArray essentially just goes through the inputted array and applied the transformation that `callback` specifies to each element. In this case, it just doubles the value of each element.
18. In `part2-question18.js`
19. ```
    1
    4
    3
    2
    ```