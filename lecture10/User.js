import React, {useContext} from 'react';
import { AuthContext } from './AuthContext';
import {Link} from 'react-router-dom';

const User = () => {
    const auth = useContext(AuthContext);
    const {name, email, member} = auth.authState.userInfo;
    return (
        <>
        <Link to='/'>Home</Link>:
        <h1>Welcome {name}</h1>
        <div>
            Your profile: 
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>member type: {member}</p>
        </div>
        <button onClick={()=>auth.logout()}>Log out</button>
        </>
    )
}

export default User;