"use strict";

//sort without using the sort function
function customSort(inputArray) {
    let outputArray;

    //given an array of x number of items, sort any numeric values in ascending order.

    let numLength = numbers.length;

    //BUBBLE SORT!!!
    for (let i = 0; i < numLength; i++) {//nested for loop to push the greatest value to the back of the array
        for(let y = 0; y < (numLength - i - 1); y++){

            if(inputArray[y] > inputArray[y+1]){ //if greater than next element, swap
                let placeholder = inputArray[y];
                inputArray[y] = inputArray[y + 1];
                inputArray[y + 1] = placeholder;
            }
        }
    }
    outputArray = inputArray;
    return outputArray;
}


let numbers = [12, 52, 10, 28, 69, 10, 6, 92, 52, 83];
let sortedNumbers = customSort(numbers);
console.log(sortedNumbers);