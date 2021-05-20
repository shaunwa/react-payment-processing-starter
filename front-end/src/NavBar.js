import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuth } from './util/useAuth';

export const NavBar = () => {
    const { user } = useAuth();
    const history = useHistory();

    const signOut = async () => {
        await firebase.auth().signOut();
        history.push('/login');
    }

    return (
        <nav>
            <h1>Widgets R Us</h1>
            {user && <p>Logged in as {user.email}</p>}
            {user && <button onClick={signOut}>Log Out</button>}
        </nav>
    );
}
