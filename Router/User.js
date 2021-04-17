import React from 'react'
const User = ({match}) =>{
    return(
        <h1>Welcomet to User User: Atinodee Mahawan{match.params.name}</h1>
    )
}

export default User