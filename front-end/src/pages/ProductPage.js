import { useParams, useHistory } from 'react-router-dom';
import { useProductWithId } from '../util/useProductWithId';

export const ProductPage = ({ onAddToCart }) => {
    const { productId } = useParams();
    const product = useProductWithId(productId);

    const price = product && product.prices[0];
    const currencyString = price && (price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceDescription = price && price.type === 'recurring' ? 'per month' : 'each';
    const priceDisplayString = currencyString + ' ' + priceDescription;

    const history = useHistory();

    return product ? (
        <div className="centered-box-container">
            <div className="centered-box">
                <img
                    width="600"
                    src={product.images[0]}
                    alt={product.description} />
                <div>
                    <h3>{product.name}</h3>
                    <p>{priceDisplayString}</p>
                    <p>{product.description}</p>
                </div>
                <button
                    className="full-width"
                    onClick={() => {
                        onAddToCart(price);
                        history.push('/');
                    }}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    ) : <p>Loading...</p>;
}