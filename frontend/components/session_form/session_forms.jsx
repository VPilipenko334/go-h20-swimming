import React, {useState} from 'react';
 
const SessionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Welcome' + ${username}`)

    }

    return (
        <div className='outer-login-container'>
            <i class="fa-solid fa-water-ladder"></i>
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

                <button 
                className="sign-up-button">
                    Sign Up
                </button>
            </form>
        </div> 
    )
}

export default SessionForm; 