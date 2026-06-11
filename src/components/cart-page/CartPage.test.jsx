import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { routes } from '../routes/routes.jsx'

describe('CartPage component', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    it ('Test if cart item is match with the length of cart', async () => {
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

        // Implement user interaction to click shop link in home page
        const shopLink = screen.getByRole('link', { name: 'Shop'});
        await user.click(shopLink);
        
        const addToCartButton1 = screen.getAllByRole('button', { name: 'Add To Cart'})[0];
        const addToCartButton2 = screen.getAllByRole('button', { name: 'Add To Cart'})[1];
        await user.click(addToCartButton1);
        await user.click(addToCartButton2);
    
        const cartLink = screen.getByRole('link', { name: 'Cart'});
        await user.click(cartLink);
       
        const cartItem = screen.getAllByTestId('item')

        expect(cartItem).toHaveLength(2);
        expect(screen.getByText('Total: $129.80')).toBeInTheDocument();
    })
})