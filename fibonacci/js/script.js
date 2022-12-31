'use strict'
void function fib(num = 1){
    let arr = [];
    arr.push(num);
    arr.push(num);
    for(let i = 0; i < 10; i++){
        let newNum = arr[arr.length - 2] + arr[arr.length - 1]
        arr.push(newNum)
    }

    console.log(arr)
}()