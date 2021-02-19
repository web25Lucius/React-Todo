
import React from 'react'; 

class Todo extends React.Component{
   
    render(){
        return(
             <li> Ready to : {this.props.task} </li> 
        )
    }
}

export default Todo; 