import {addTodoItems,clearAll,removeEditAndCheckList,editButtonLogic} from './Modules/logic.js'
//Selectors
let input = document.querySelector('input')  
let date = document.querySelector('#date')
let addButton = document.getElementById('add')
let editButton = document.getElementById('edit')
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
editButton.addEventListener('click',editButtonLogic)

removeTodoItems.addEventListener('click',removeEditAndCheckList)
clearAllTodos.addEventListener('click',clearAll)






