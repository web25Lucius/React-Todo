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
          task: 'Bananas',
          id: 123,
          complete: false
        },
        {
          task: 'Torillas',
          id: 124,
          complete: false
        },
        {
          task: 'Milk',
          id: 1235,
          complete: false
        },
        {
          task: 'Pizza Sauce',
          id: 1246,
          complete: false
        },
        {
          task: 'Raw Honey',
          id: 1237,
          complete: false
        },
        {
          task: 'Granola',
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
        <h1>Welcome to your Todo App</h1>
        <p className="header">Let's get Started!</p>
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

 