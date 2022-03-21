import React, {useState} from 'react';
 
const SessionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // update = (field) => {
    //     return e => setUsername({
    //         [field]: e.target.value
    //     });
    // }

    // handleSubmit = () => {
        
    // }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className='outer-login-container'>
            <form className="login-form ">
                Username:
                <input
                type="text"
                className="username"
                value={username}
                onChange={handleUsernameChange}/>

                <br/>
                Password:
                <input
                type="password"
                className="password"
                value={password}
                onChange={handlePasswordChange}/>

                <br/>

                <button
                className="submit-button"
                // OnClick={handleSubmit}
                >Log In</button>
            </form>
        </div> 
    )
}

export default SessionForm; 