import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { routes } from "../routes/routes";


describe('Item component', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    it("Test if user click increment button, it will increment item's quantity by 1 and change subtotal", async () => {
        // Setup
        const user = userEvent.setup();

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

        const router = createMemoryRouter(routes, { initialEntries: ['/'] });
        render(<RouterProvider router={router} />);

        // Implement user flow
        const shopLink = screen.getByRole('link', { name: 'Shop'});
        await user.click(shopLink);

        const addToCartButton1 = screen.getAllByRole('button', { name: 'Add To Cart'})[0];
        const addToCartButton2 = screen.getAllByRole('button', { name: 'Add To Cart'})[1];
        await user.click(addToCartButton1);
        await user.click(addToCartButton2);

        const cartLink = screen.getByRole('link', { name: 'Cart'});
        await user.click(cartLink);

        const incrementButton = screen.getAllByRole('button', { name: '+'})[0];
        await user.click(incrementButton);
        
        expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
        expect(screen.getByText('Subtotal: 159.8')).toBeInTheDocument();
    })

    it("Test if user click decrement button, it will decrement item's quantity by 1 and change subtotal", async () => {
        // Setup
        const user = userEvent.setup();

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

        const router = createMemoryRouter(routes, { initialEntries: ['/'] });
        render(<RouterProvider router={router} />);

        // Implement user flow
        const shopLink = screen.getByRole('link', { name: 'Shop'});
        await user.click(shopLink);

        const addToCartButton1 = screen.getAllByRole('button', { name: 'Add To Cart'})[0];
        const addToCartButton2 = screen.getAllByRole('button', { name: 'Add To Cart'})[1];
        await user.click(addToCartButton1);
        await user.click(addToCartButton2);

        const cartLink = screen.getByRole('link', { name: 'Cart'});
        await user.click(cartLink);

        const decrementButton = screen.getAllByRole('button', { name: '-'})[0];
        const incrementButton = screen.getAllByRole('button', { name: '+'})[0];

        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(screen.getByText('Quantity: 3')).toBeInTheDocument();
        expect(screen.getByText('Subtotal: 239.7')).toBeInTheDocument();
    })
})