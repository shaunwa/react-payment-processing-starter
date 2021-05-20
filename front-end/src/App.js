import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import { LogInPage } from './pages/LogInPage';
import { ProductPage } from './pages/ProductPage';

export const App = () => {
    return (
        <div className="page-container">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <ProductPage />
                    </Route>
                    <Route path="/login">
                        <LogInPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

