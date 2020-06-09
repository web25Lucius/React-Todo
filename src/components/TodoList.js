
import React from 'react';
import Todo from '../components/Todo'

const TodoList = props => {
    return (
        <div className="todo-list">
         {props.todo.map(item =>(
           <Todo task={item.task} key={item.id} toggleTodo={props.toggleTodo}  id={item.id}/>
         ))}
        </div>
    )
}
export default TodoList;
