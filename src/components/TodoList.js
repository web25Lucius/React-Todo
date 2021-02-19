

import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    render(){
        return(
            <ul>
            {this.props.todoList.map(todo => <Todo key={todo} task={this.props.todo}/> )}
            </ul>
        );
    }
};

export default TodoList; 