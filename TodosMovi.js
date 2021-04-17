import React from 'react'

const Todos = ({data, deleteTodo}) => {
    const todolist = data.length === 0? (
        <div>You have todo's list</div>
    ): (data.map(e => 
        <div key={e.id} > &gt; {e.title} 
            <span onClick={() => deleteTodo(e.id)}id="underline"> XXX </span>
        </div>
    ));
        

    return (
        <div>
            {todolist}
        </div>
    );
}

export default Todos