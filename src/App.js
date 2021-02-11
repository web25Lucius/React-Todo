import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     todo: '',
     todoList: [{}], 
     handler: '', 
   };
   this.updateTodo = this.updateTodo.bind(this);
   this.updateTodoList = this.updateTodoList.bind(this);
   this.updateHandler = this.updateHandler.bind(this);
   this.updateSubmit = this.updateSubmit.bind(this);
  }
   updateTodo(newTodo) {
     this.setState({todo: newTodo})
   };

   updateTodoList(todoList, todo) {
    this.setState([{todoList,todo}])
  };

    updateHandler(e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value);
  };

  updateSubmit(e) {
    e.preventDefault();
    this.updateTodoList(this.state.todoList, e);
    console.log(e);
  };
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To do in the house!</h2>
        <h3>What time is it?</h3>
        <h4>::insert flava flav gif::</h4>
        <h5>It's time to get some work done!</h5>
        <TodoForm name={this.state.todo} onChange={this.updateHandler} value={this.props.todo} onSubmit={this.updateSubmit}/>
        <TodoList todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
