
import React from 'react'; 

class Todo extends React.Component{
   
    render(){
        console.log(this.props.task)
        return(
             <li> {this.props.task} </li> 
        )
    }
}

export default Todo; 