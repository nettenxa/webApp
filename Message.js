
import React from 'react';
// import movies from './movies.js';

function Message(props){
    const list = props.movies.map((e) => { return <li> {e.title} </li>})

    return(<>

    <ol>{list}</ol>

    </>);
}


export default Message;
