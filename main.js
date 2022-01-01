//שאלה 1
// function digit(sum,num){
//     if (num){
//         sum = sum + num % 10;
//         num = Math.floor(num / 10);
//         return digit(sum, num)
//     }
//     return sum
// }
// console.log(digit(0,357));

//שאלה 2
// let arr = [9,5,4,2,90];
// function minNumber(small,array,i){
//     if(array.length === i){
//         return small;
//     }
//    if(small > arr[i]) small = arr[i];
    
//    return minNumber(small, array, i+1)
// }
// console.log(minNumber(arr[0],arr,0));

//שאלה 3
// let userArray = [];
// function getUserArray() {
//     if (userArray.length === 3) {
//         return userArray;
//     }
//     let input = prompt("enter a number");
//     if (input) {
//         userArray.push(input)
//     }
//     return getUserArray();
// }
// console.log(getUserArray());

//שאלה 4
// let arr = [19,55,41,22,90];
// const _mergeArrays = (a, b) => {
//     const c = []

//     while (a.length && b.length) {
//         c.push(a[0] > b[0] ? b.shift() : a.shift())
//     }

//     //if we still have values, let's add them at the end of `c`
//     while (a.length) {
//         c.push(a.shift())
//     }
//     while (b.length) {
//         c.push(b.shift())
//     }

//     return c
// }

// const mergeSort = (a) => {
//     if (a.length < 2) return a
//     const middle = Math.floor(a.length / 2)
//     const a_l = a.slice(0, middle)
//     const a_r = a.slice(middle, a.length)
//     const sorted_l = mergeSort(a_l)
//     const sorted_r = mergeSort(a_r)
//     return _mergeArrays(sorted_l, sorted_r)
// }
// console.log(arr);
// arr = mergeSort(arr);
// console.log(arr);