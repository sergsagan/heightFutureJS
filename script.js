const num = 266219;
const arr = num.toString().split('');

let sum = 1;
for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
}

console.log('sum', sum);//1296

console.log(sum **= 3); //2176782336

alert(sum.toString().substring(0, 2)); //21
