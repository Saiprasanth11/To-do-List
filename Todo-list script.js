const todoList =  JSON.parse(localStorage.getItem('todoList')) || [];
 
rendertodoList();

function rendertodoList() {
let todoListHTML = ''; 

/*here even though the todoListHTML is empty string. The text in the div class is still displayed in the browser itself..*/

todoList.forEach((todoObject) => {

 const {name, dueDate} = todoObject;
  const html = `<div>${name}</div>
    <div>${dueDate}</div>
  <button class="delete-todo-button js-delete-todo-button">Delete
  </button> `;
  todoListHTML += html; // the above html is called generating HTML

});

document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
localStorage.setItem('todoList',JSON.stringify(todoList));
console.log(todoList);

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton, index) => {
  console.log(index);
   deleteButton.addEventListener('click', () => {
    todoList.splice(index,1);
    rendertodoList();
   })
});

}


document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo();
});


function addTodo() {
const inputElement = document.querySelector('.js-name-input');
const name  = inputElement.value;
const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;
todoList.push({
// name: name,
//dueDate: dueDate
 name,    // short-hand property syntax
 dueDate
});
localStorage.setItem('todoList',JSON.stringify(todoList));

inputElement.value = '';

rendertodoList();
}

