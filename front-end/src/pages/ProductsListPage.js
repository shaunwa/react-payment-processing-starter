import { Link } from 'react-router-dom';
import { useProducts } from '../util/useProducts';

export const ProductsListPage = () => {
    const products = useProducts();

    return (
        <div className="centered-column">
            {products.map(product => (
                <Link to={`/products/${product.id}`} key={product.id}>
                    <div className="products-list-item">
                        <div className="image-wrap">
                            <img src={product.images[0]} alt="product" width="100%" />
                        </div>
                        <div className="product-details-wrap">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}