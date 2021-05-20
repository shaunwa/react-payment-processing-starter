import { Link, useHistory } from 'react-router-dom';
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
            <Link to="/">
                <h1 className="nav-heading">Widgets R Us</h1>
            </Link>
            {user && (
                <div className="nav-items-container">
                    <button className="nav-item" onClick={signOut}>Log Out ({user.email})</button>
                </div>
            )}
        </nav>
    );
}
