
import React from 'react'; 

class Todo extends React.Component{
   
    render(){
        console.log("Todo task prop:",this.props)
        return(
            
             <li> {this.props.message} </li> 
        )
    }
}

export default Todo; 