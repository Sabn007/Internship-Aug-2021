import { arr } from './sort.js';


function specifiedArraySelector(myArray,numberExtraction){
    newArray = myArray.slice(numberExtraction)   
    console.log(newArray)
}
specifiedArraySelector([1,2,3,4,5],3)

console.log(arr)