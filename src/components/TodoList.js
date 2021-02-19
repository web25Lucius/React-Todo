

import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    render(){
        console.log("List props:",this.props)
        return(
            <div>
            <p>Todo List Component</p>
            <ul>
            {this.props.todoList.map(todoItem => 
            <Todo 
                key={todoItem}
                message={todoItem.todo}
            /> 
            )}
            </ul>
            </div>
        );
    }
};

export default TodoList; 