import React from 'react'


const TodoForm = props => {
    

   return (
       <div>
          <form onSubmit={props.submitTodo}>
          <button>Add</button> 
          <input
            type="text"
            value={props.task}
            name="todo"
            id="todo"
            onChange={props.changeHandler}
          />
      </form>
     
       </div>   
       
   )
}

export default TodoForm