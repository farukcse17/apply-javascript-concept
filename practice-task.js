// Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers.

function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

let numbers = [5,7,8,10,45,30];
let sumOfArrays = sumOfArray(numbers);
// console.log(sumOfArrays);

function findOddNumbers(oddNumbers){
    let oddNumber = [];
    for(let i = 0; i < oddNumbers.length; i++){
        let element = oddNumbers[i];
        if(element % 2 !==0){
        //    console.log (i, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
let oddNumbers = [23, 43, 12, 45, 66, 29, 10, 30];
let result = findOddNumbers(oddNumbers)
console.log(result);
let oddNumSum = sumOfArray(result);
console.log("The summation of array odd number is: ",oddNumSum);