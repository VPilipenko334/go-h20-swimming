import React, {useState} from 'react';
 
const SessionForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    update = (field) => {
        return e => setUsername({
            [field]: e.target.value
        });
    }

    handleSubmit = () => {
        
    }

    return (
        <div className='outer-login-container'>
            <form className="login-form ">
                Username:
                <input
                type="text"
                className="username"/>

                <br/>
                Password:
                <input
                type="password"
                className="password"/>

                <br/>

                <button
                className="submit-button"
                OnClick={handleSubmit}
                >Log In</button>
            </form>
        </div> 
    )
}

export default SessionForm; 