import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import HomePage from './HomePage.jsx';
import userEvent from "@testing-library/user-event";
import App from '../App.jsx'
import ShopPage from "../shop-page/ShopPage.jsx";
import ErrorPage from '../error-page/ErrorPage.jsx'
import CartPage from '../cart-page/CartPage.jsx'

describe('HomePage component', () => {
    it('Render HomePage component to match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
    })

    it("Go to ShopPage if user click on Link 'Shop Now", async () => {
        // Setup test
        const user = userEvent.setup();
        const routes = createMemoryRouter(
                [
                    {
                        path: '/',
                        element: <App />,
                        errorElement: <ErrorPage />,
                        children: [
                            { index: true, element: <HomePage /> },
                            { path: 'shop-page', element: <ShopPage /> },
                            { path: 'cart-page', element: <CartPage /> }, // optional for this test
                        ],
                    },
                ],
            { initialEntries: ['/'] }
        );

        render(<RouterProvider router={routes} />);
        expect(screen.getByText('Shop now')).toBeInTheDocument();
        
        const link = screen.getByRole('link', { name: 'Shop now'});

        await user.click(link);

        expect(screen.getByText('Products')).toBeInTheDocument();
    })
})