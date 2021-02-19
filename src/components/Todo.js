
import React from 'react'; 

class Todo extends React.Component{
   
    render(){
        console.log("Todo task prop:",this.props)
        return(
            (this.props.message ? <li> {this.props.message} </li> : null)
        )
    }
}

export default Todo; 