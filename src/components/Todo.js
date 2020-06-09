import React from 'react';



const Todo = props => {
   
    return (
      <div className={`${props.complete ? '.complete' : '.todo'}`} onClick={() => props.toggleTodo(props.id)}>
        <p>{props.task}</p>
    </div>
    );
  
}

export default Todo;




  

