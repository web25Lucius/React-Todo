
import React from 'react';
// lifted to app import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import Todo from './components/Todo';
class App extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     todo: '',
     todoList: [{
                  // id: 0, 
                  formInput: ''
                }]
    };
  } //end of constructor 



  //lifting form state to app
  //handlers for form 
  updateFormInput = (event) => {
    this.setState({formInput: event.target.value})
    console.log("this is updateFormInput", event.target.value)
 //    return this.updateFormInput
};



updateFormSubmit = (event) => {
 event.preventDefault()
 this.setState({formInput: this.state.formInput})
 this.setState({todo: this.state.formInput})
 console.log("this is updateFormSubmit returning state of formInput:", this.state.formInput)
//    return this.updateFormSubmit
};
  

  render(){
    console.log(this.state)
  return(
    <div>
      <h1>Tick Tock- you got *%@# to do!</h1>
      {/* // <form onSubmit={e => this.updateFormSubmit(e)}> */}
            <form onSubmit={this.updateFormSubmit}>
                <label><span role="img" aria-label="open eyes looking emoji">👀</span></label>
                    <input
                    type="text"
                    placeholder="the whole truth"
                    name="list"
                    value={this.state.formInput}
                    // onChange={e => this.updateFormInput(e)}
                    onChange={this.updateFormInput}
                    />
                
                <button type="submit">Submit</button>
                <button>Remove</button>
            </form>
      <TodoList todoList={this.state.todoList} todo={this.state.todo} >
        {/* <Todo task={this.state.todo}/> */}
      </TodoList>
      

    </div>
  )
  }
} export default App;

























// import React from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// // import Todo from './components/Todo';

// class App extends React.Component {
//   constructor(props){
//    super(props);
//    this.state = {
//      todo: '',
//      todoList: [{}]
//     };
//   } //end of constructor 

//    updateTodo = (newTodo) => {
//     console.log(`updateTodo. newTodo: ${newTodo}`)
//     return this.setState({todo: newTodo});
//    }; //updateTodo is a function that takes one parameter. Argue in the new task (called newTodo) and it will set that new task and return the new task as todo.  

//    updateTodoList = (todoList, newTodo) => {
//    console.log(`updateTodoList. todoList: ${todoList} and newTodo: ${newTodo}`) 
//    this.setState([{todoList: todoList,newTodo}])
//    }; 
//    // updateTodoList takes two parameters.  Argue in an array and the state of todo. It will set the todoList with the newTodo from above
  
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <h2>To do in the house!</h2>
//         <h3>What time is it?</h3>
//         <h4>::insert flava flav gif::</h4>
//         <h5>It's time to get some work done!</h5>

//         <TodoForm 
//           newTask={this.updateTodo} 
//           newTaskList={this.updateTodoList}/>

//         <TodoList 
//          todoList={this.state.todoList} 
//          todoTask={this.state.todo}/>

//       </div>
//     );
//   }
// }

// export default App;




//   //  this.updateTodo = this.updateTodo.bind(this);
//   //  this.updateTodoList = this.updateTodoList.bind(this);
//   //  this.updateHandler = this.updateHandler.bind(this);
//   //  this.updateSubmit = this.updateSubmit.bind(this);

//   //old updateTodoList below
//   //  updateTodoList = (todoList, todo) => {
//   //   this.setState([{todoList,todo}])
//   // };



//   // NUUUU updateHandler moved to TodoForm
//   //   updateHandler = (e) => {
//   //   console.log(e.target.value);
//   //   this.setState({[e.target.name]: e.target.value})
//   //   return this.updateHandler
//   // };



//   // NUUUUU  new update submit moved to TodoForm 
//   // updateSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(`this is the event from submit: ${e.target}`);
//   //   this.updateTodo(e.target);
//   //   return this.updateSubmit
//   // };




// //old version of updateSubmit below
//   // updateSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("submit target value:", e.target.value);
//   //   this.updateTodoList(this.state.todoList, e.target.value);
//   //   return this.updateSubmit
//   // };