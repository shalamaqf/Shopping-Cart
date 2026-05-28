import HomePage from '../home-page/HomePage'

const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />  
    },
    {
        path: '/shop-page',
        element: <ShopPage />
    },
    {
        path: '/cart-page',
        element: <CartPage />
    }
]