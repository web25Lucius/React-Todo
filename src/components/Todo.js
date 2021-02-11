import React from 'react'; 

class Todo extends React.Component{
    render(){
        return(
            <p>{this.state.props.todo}</p>
        )
    }
}

export default Todo; 