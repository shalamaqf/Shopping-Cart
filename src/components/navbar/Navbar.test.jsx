import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { routes } from "../routes/routes";

describe('Navbar component', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    it("Go to home page if user click on 'Home' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const homeLink = screen.getByRole('link', { name: 'Home'});

        await user.click(homeLink);

        expect(screen.getByText('➔ Shop now')).toBeInTheDocument();
    })

    it("Go to shop page if user click on 'Shop' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const shopLink = screen.getByRole('link', { name: 'Shop'});

        await user.click(shopLink);

        expect(screen.getByText('Products')).toBeInTheDocument();
    })

    it("Go to cart page if user click on 'Cart' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const cartLink = screen.getByRole('link', { name: 'Cart'});

        await user.click(cartLink);

        expect(screen.getByText('Total: $0.00')).toBeInTheDocument();
    })

    it("Display items in the cart on the side of cart link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });
               
        // Mocking API
        const mockProducts = [
            { id: 1, title: 'Jacket', image: 'jacket.jpg', price: 79.9 },
            { id: 2, title: 'Shirt', image: 'shirt.jpg', price: 49.9 },
            { id: 3, title: 'Hat', image: 'hat.jpg', price: 39.9 },
            { id: 4, title: 'Jeans', image: 'jeans.jpg', price: 69.9 },
            { id: 5, title: 'Boots', image: 'boots.jpg', price: 59.9 },
            { id: 6, title: 'Sandals', image: 'sandals.jpg', price: 49.9 }
        ]
        const mockResponse = {
            ok: true,
            json: async () => mockProducts,
        }
        
        global.fetch.mockResolvedValue(mockResponse);
        
        render(<RouterProvider router={router} />)

        const shopLink = screen.getByRole('link', { name: 'Shop'});
        await user.click(shopLink);

        const addToCartButton = screen.getAllByRole('button', { name: 'Add To Cart'})[0];
        await user.click(addToCartButton);

        const totalItems = screen.getByTestId('total-items');
        expect(totalItems).toHaveTextContent('1');
    })
})