import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const onSignIn = async () => {
        setErrorMessage("");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    };

    return (
        <div className="centered-box-container">
            <div className="centered-box">
                <h1 className="centered">Sign In</h1>
                {errorMessage && <div>{errorMessage}</div>}
                <div>
                    <input
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button
                    className="full-width"
                    onClick={onSignIn}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};
