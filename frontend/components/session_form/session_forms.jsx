import React, {useState} from 'react';
 
const SessionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const body = JSON.stringify({
            username,
            password
        });

        fetch('http://localhost:3000/api/session' ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body
        }).then((response) => {
            if (response.status === 200) {
                setSuccess("Success, Thank you for logging in!")
            } else {
                setSuccess("Sorry, this username or password does not exist in our system")
            }
        })
    }

    return (
        <div className='outer-login-container'>
            <i className="fa-solid fa-water-ladder" />
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
                onClick={handleSubmit}
                >Sign Up</button>

                &nbsp;
                
                {/* <button 
                className="sign-up-button">
                    Sign Up
                </button> */}
            </form>
        </div> 
    )
}

export default SessionForm; 