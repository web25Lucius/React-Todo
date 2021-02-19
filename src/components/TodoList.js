

import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    render(){
        return(
            <ul>
            {this.props.todoList.map(todo => <Todo key={this.props.todoTask} task={this.props.todoTask}/> )}
            </ul>
        );
    }
};

export default TodoList; 