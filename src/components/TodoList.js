// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
// import App from '../App';

class TodoList extends React.Component{
    render(){
        return(
            <ul>
            {this.state.props.todoList.map((todo) => {
                return <li>{todo.todoList}</li> 
            })}
            </ul>
        );
    }
};

export default TodoList; 