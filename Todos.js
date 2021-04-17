import React from 'react'

const Todos = ({data, deleteTodo}) => {
    const todolist = data.length === 0? (
        <div>You have todo's list</div>
    ): (data.map(e => 
        <div key={e.id}> &gt; {e.content} 
            <span onClick={() => deleteTodo(e.id)}>XXX</span>
        </div>
    ));
        
    // let todolist = <div>You have no todo's</div>
    // if(todolist.length>0){
    //     todolist = data.map(e => <div>{e.content}</div>)
    // }
    return (
        <div>
            {todolist}
        </div>
    );
}

export default Todos