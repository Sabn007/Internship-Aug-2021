import {addTodoItems,clearAll,removeEditAndCheckList} from './Modules/logic.js'
//Selectors
let input = document.querySelector('input')  
let date = document.querySelector('#date')
let addButton = document.getElementById('add')
let clearAllTodos= document.getElementById('clear')
let removeTodoItems = document.querySelector('ul')



addButton.addEventListener('click',(e)=>{
    if(input !== " "){
        addTodoItems(input.value,date.value)
        input.value = ' '
        date.value = ' '
    }
    else{
        
    }
    
})

removeTodoItems.addEventListener('click',removeEditAndCheckList)
clearAllTodos.addEventListener('click',clearAll)






