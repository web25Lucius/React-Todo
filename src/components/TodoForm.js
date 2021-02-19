// import React from 'react';

// class TodoForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//          formInput: ''
//          };

//        } //end of constructor 

//    updateFormInput = (event) => {
//        this.setState({formInput: event.target.value})
//        console.log("this is updateFormInput", event.target.value)
//     //    return this.updateFormInput
//    };



//    updateFormSubmit = (event) => {
//     event.preventDefault()
//     this.setState({formSubmit: this.state.formInput})
//     console.log("this is updateFormSubmit", this.state.formInput)
//  //    return this.updateFormSubmit
// };




// //    updateFormSubmit = async (event) => {
// //        event.preventDefault()
// //        await this.setState({formSubmit: this.state.formInput})
// //        console.log("this is updateFormSubmit", this.state.formSubmit)
// //     //    return this.updateFormSubmit
// //    };


//     render(){
//         return(
//             // <form onSubmit={e => this.updateFormSubmit(e)}>
//             <form onSubmit={this.updateFormSubmit}>
//                 <label><span role="img" aria-label="open eyes looking emoji">👀</span></label>
//                     <input
//                     type="text"
//                     placeholder="the whole truth"
//                     name="list"
//                     value={this.state.formInput}
//                     // onChange={e => this.updateFormInput(e)}
//                     onChange={this.updateFormInput}
//                     />
                
//                 <button type="submit">Submit</button>
//                 <button>Remove</button>
//             </form>
//         )
//     }
// } export default TodoForm;













// this.state = {
//     formInput: '', 
//     formSubmit: ''
//     };

//   } //end of constructor 

// updateFormInput = (event) => {
//   console.log("this is updateFormInput", event.target.value)
//   this.setState({formInput: event.target.value})
//   return this.updateFormInput
// };

// updateFormSubmit = (e) => {
//   e.preventDefault()
//   this.setState({formSubmit: this.state.formInput})
//   alert(this.state.formSubmit)
//   return this.updateFormSubmit
// }













// import React from 'react'; 


// class TodoForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           handler:'handler' 
//         };
//        } //end of const

//   updateHandler = (e) => {
//     console.log(e.target.value);
//     this.setState({[e.target.value]: })
//     return this.updateHandler
//         };


//   updateSubmit = (e) => {
//     e.preventDefault();
//     console.log(`this is the event from submit: ${e.target.name}`);
//     this.props.newTask(e.target.value);
//     this.props.newTaskList();
    
//     return this.updateSubmit
//     };//newtask list and newtask

//     render(){
//     return(
        
//         // old <form onSubmit={(e)=> this.props.updateSubmit(e)}>
//         <form onSubmit={ (e) => this.updateSubmit}>
//             <input 
//             type="text" 
//             name={this.state.handler}
//             onChange={this.updateHandler} 
//             value={this.state.handler} 
//             placeholder={'type your task here'}/>

//             <button type='submit'>Add</button>

//             <button>Clear</button>

//         </form>
//     )}
// };

// export default TodoForm; 

// // updateHandler = (e) => {
// //     console.log(e.target.value);
// //     this.setState({[e.target.name]: e.target.value})
// //     return this.updateHandler
// //         };
