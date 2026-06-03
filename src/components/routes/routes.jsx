import HomePage from '../home-page/HomePage'
import ErrorPage from '../error-page/ErrorPage';
import ShopPage from '../shop-page/ShopPage'
import CartPage from '../cart-page/CartPage'
import App from '../App';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'shop-page',
                element: <ShopPage />
            },
            {
                path: 'cart-page',
                element: <CartPage />
            }
        ]
    }
]