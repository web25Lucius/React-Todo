import React from 'react'; 


class TodoForm extends React.Component {
    render(){
    return(
        <form onSubmit={this.updateSubmit}>
            <input type="text" name={this.props.todo} onChange={this.props.updateHandler} value={this.props.todo} placeholder={'type your task here'}></input>
            <button type={'submit'} onSubmit={this.props.updateSubmit}>Add</button><button>Clear</button>
        </form>
    )}
};

export default TodoForm; 