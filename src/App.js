import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css';


class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todoTask: "", 
      todo : [
        {
          task: 'GC 1-6',
          id: 123,
          complete: false
        },
        {
          task: 'Back to School promotion',
          id: 124,
          complete: false
        },
        {
          task: 'mock-ups for retailer options',
          id: 1235,
          complete: false
        },
        {
          task: 'Promotional dashboard',
          id: 1246,
          complete: false
        },
        {
          task: 'Labor Day edits',
          id: 1237,
          complete: false
        },
        {
          task: 'Bitbucket transfer',
          id: 1248,
          complete: false
        }

      ]
    
    };
  };

//end of constructor

addTodo = (e, added) => {
  e.preventDefault();
  const newTask = {
    task: added,
    id: Date.now(),
    complete: false
  };
  this.setState({
    todo: [...this.state.todo, newTask]
  });
};

submitTodo = e => {
  e.preventDefault();
  this.setState({ todoTask: '' });
  this.addTodo(e, this.state.todoTask);
};

// end of onsubmit handler

toggleTodo = todoId => {
  console.log(todoId);

  this.setState({
    todo: this.state.todo.map(item => {
      if (todoId === item.id) {
        return {
          ...item,
          complete: !item.complete
        };
      }
      return item
    })
  });
};

clearComplete = e => {
  e.preventDefault();
  this.setState({
    todo: this.state.todo.filter(task => !task.complete)
  });
};

//
changeHandler = event =>{
  event.persist();
   this.setState({ todoTask: event.target.value}); 
  };
 //end of input onChange handler on TodoForm



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (

      <div className="App">
        <h1>Resistance is futile</h1>
        <h3>You will comply</h3>
        <p className="header">
          
          <ul> 
            <li>Add the tasks you have not yet completed below.</li> 
            <li>Complete them.</li>  
            <li>When a task has been executed, select it with your mouse.</li> 
            <li>clear it from the list by clicking the clear complete button.</li> 
          </ul> 
        </p>  
        <h4>If successful, your task will no longer be present on your list. <br/>You will repeat this until your tasks have been accomplished.<br /> You may begin.</h4>
        <div className="todo-list">
        <TodoForm submitTodo={this.submitTodo} task={this.state.todoTask} changeHandler={this.changeHandler}/>
        <TodoList todo={this.state.todo}  toggleTodo={this.toggleTodo}  clearComplete={this.clearComplete}/>
        </div>
        <button className="clear-btn" onClick={this.clearComplete}>Clear complete</button> 
      </div>
    );
  };
}

export default App;

 