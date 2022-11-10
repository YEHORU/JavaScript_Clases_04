
// import { todoList } from "./classes/todo-list.class";
// import { Todo } from "./classes/todo.class";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";
import "./style.css";


export const todoList = new TodoList();

// todoList.todos.forEach(todo => {
//     crearTodoHtml(todo);
// });

todoList.todos.forEach( crearTodoHtml );


//const todoList = new TodoList();
// const tarea = new Todo('Apredender JavaScript');



// todoList.nuevoTodo(tarea);

// tarea.completado = true;

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('')
// }, 1500 );