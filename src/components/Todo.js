  
import React from 'react';
import './Todo.css';


const Todo = props => {
   console.log(props.allprops)
    return (
      <div className={props.complete  ? 'complete' : 'todo'} onClick={() => props.toggleTodo(props.id)}>
        <p>{props.task}</p>
      </div>
   
    );
  
}

export default Todo;