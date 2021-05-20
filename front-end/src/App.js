import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { CheckoutResultPage } from './pages/CheckoutResultPage';
import { LogInPage } from './pages/LogInPage';
import { ProductsListPage } from './pages/ProductsListPage';
import { ProductPage } from './pages/ProductPage';
import { getStripe } from './getStripe';
import { useAuth } from './util/useAuth';

export const App = () => {
    const { user } = useAuth();
    const [shoppingCartPrices, setShoppingCartPrices] = useState([]);

    const addToCart = newPrice => {
        setShoppingCartPrices(shoppingCartPrices.concat(newPrice));
    }

    const checkout = async () => {
        const stripe = await getStripe();
        const authtoken = await user.getIdToken();
        const response = await axios.post('/checkout-session', { prices: shoppingCartPrices }, { headers: { authtoken } });
        const { sessionId } = response.data;

        await stripe.redirectToCheckout({ sessionId });
    }

    return (
        <div className="page-container">
            <Router>
                <NavBar onCheckout={checkout} numberOfItems={shoppingCartPrices.length} />
                <Switch>
                    <Route path="/" exact>
                        <ProductsListPage />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductPage onAddToCart={addToCart} />
                    </Route>
                    <Route path="/login">
                        <LogInPage />
                    </Route>
                    <Route path="/checkout-result">
                        <CheckoutResultPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

