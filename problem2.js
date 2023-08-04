// write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a ear is a leap year insert that year in a new array, return the new array and print the result.

function findLeapYear(years){
    let countLeapYear = [];
    for(let i = 0; i < years.length; i++){
        let result = years[i];
        // console.log(result);
        if(result % 4 === 0){
            countLeapYear.push(result);
        }
    }
    return countLeapYear;
}

let years = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(years);
console.log(leapYear);