import React from 'react'
import './Todo.css';

const TodoForm = props => {
    

   return (
       <div>
          <form onSubmit={props.submitTodo}>
          <input
            className="textArea"
            placeholder="You will add tasks here!"
            type="text"
            value={props.task}
            name="todo"
            id="todo"
            onChange={props.changeHandler}
          />
          <button>Add task</button> 
      </form>
     
       </div>   
       
   )
}

export default TodoForm