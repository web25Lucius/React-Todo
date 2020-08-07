import React from 'react'
import './Todo.css';

const TodoForm = props => {
    

   return (
       <div>
          <form onSubmit={props.submitTodo}>
          <input
            className="textArea"
            placeholder="you will add tasks here! &nbsp;"
            type="text"
            value={props.task}
            name="todo"
            id="todo"
            onChange={props.changeHandler}
          />
          <button>SUBMIT</button> 
      </form>
     
       </div>   
       
   )
}

export default TodoForm