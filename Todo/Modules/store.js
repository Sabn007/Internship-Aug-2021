export const addItem = (item) => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    todoItems.push(item);

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

export const getItems = () => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    return todoItems;
}
export const removeItemByName = (name) => {
    let todoItems = window.localStorage.getItem('todos');

    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    
    let todoItemsByNameIndex = todoItems.findIndex((item) => {
        return item.name.toLowerCase() == name.toLowerCase();
    })
    console.log('Item index', todoItemsByNameIndex);
    if(todoItemsByNameIndex > -1) {
        todoItems.splice(todoItemsByNameIndex, 1)
    }

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}