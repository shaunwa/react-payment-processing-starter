import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuth } from './util/useAuth';

export const NavBar = ({ onCheckout, numberOfItems }) => {
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
            <div className="nav-items-container">
                {user ? (
                    <>
                    <button className="nav-item" onClick={signOut}>Log Out ({user.email})</button>
                    <button className="nav-item" onClick={onCheckout}>Checkout ({numberOfItems} items)</button>
                    </>
                ) : (
                    <Link to="/login" className="nav-item">
                        <button>
                            Log In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}
