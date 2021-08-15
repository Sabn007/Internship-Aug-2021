import { getItems, addItem} from './store.js';

/*--- -------- For Adding Todo Items-------- ---*/

export const addTodoItems = (name, submittedListDate) => {
  
  if(!name) {
    throw new Error('Name is required')
}
else{let ul = document.querySelector("ul");
let li = document.createElement("li");

li.innerHTML = ` <span class="class-item"> ${name}</span> <br>
      <span>  ${submittedListDate}</span>

  <button name='edit'> <i class="uil uil-edit"></i></i> </button>    
  <button name='check'> <i class="uil uil-check-square"></i> </button>    
  <button name='delete'> <i class="uil uil-trash-alt"></i> </button>`;
ul.appendChild(li);
li.classList.add('li-list')}
const todoItems = getItems();

for(let item of todoItems) {
    if(item.name.toLowerCase() === name.toLowerCase()) {
        throw new Error('Item already exists')
    }
}

let newTodoItem = {
    id: Math.random(),
    name: name,
    dueDate: null,
    isComplete: false,
    completedDate: null
}
addItem(newTodoItem);
return newTodoItem;




}
export const alert = (e) =>{
  return alert("Please enter todolist")
}
/*--- -------- For Removing All Todo Items-------- ---*/

export const clearAll = (e) => {
  document.querySelector('ul').innerHTML = ' ';
  
};

/*--- -------- For checking editing and removing  Todo Items-------- ---*/

export const removeEditAndCheckList = (e) => {
  if (e.target.name == "delete") {
    deleteTodo(e);
  }
  if (e.target.name == "check") {
    
    checkTodo(e);
  }
  if(e.target.name == 'edit'){
    editTodo(e);
   
  }
};
/*--- For Deleting items ---*/
const deleteTodo = (e) => {
  let item = e.target.parentNode;
  item.remove();
};
/*--- For Checking items ---*/
const checkTodo = (e) => {
  let li = document.createElement("li");
  let item = e.target.parentNode;
  if (item.style.textDecoration === "line-through") {
    return (item.style.textDecoration = "none");
  } else {
    return item.style.textDecoration = "line-through"
    , li.classList.add('li-color');
  }
}

/*--- For Editing items ---*/
const editTodo = (e) =>{
  alert("you just click edit")
}
