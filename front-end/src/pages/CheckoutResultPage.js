import { Link } from 'react-router-dom';

export const CheckoutResultPage = () => {
    const query = new URLSearchParams(window.location.search);
    const status = query.get('status');
    
    if (status === 'success') {
        return (
            <div className="centered-column">
                <h3>Yay! Thanks for your purchase</h3>
                <p>Your widget will be shipping shortly</p>
                <Link to="/">
                    <button className="full-width">Back to Product Page</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="centered-column">
            <h3>Uh oh, looks like you canceled</h3>
            <p>No worries, it'll still be here when you change your mind</p>
            <Link to="/">
                <button className="full-width">Back to Product Page</button>
            </Link>
        </div> 
    );
}