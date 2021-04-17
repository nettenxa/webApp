import React from 'react'

class AddTodo extends React.Component{
    state = {
        content: ''
    }
    onChange = (e) =>{
        // console.log(e.target.value);
        this.setState({content: e.target.value})
    }
    handleSummit = (e)=> {
        e.preventDefault();
        console.log("summit", e.target, this.state.content);
        this.props.addTodo(this.state.content);
        this.setState({content: ''});
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSummit}>
                    <label>Add Movies  </label>
                    <input type="text" placeholder = 'Movie Title.' 
                        value={this.state.content} 
                        onChange={this.onChange} />
                </form>
                {/* <AddTodo/> */}
            </>
        )
    }   
}

export default AddTodo;