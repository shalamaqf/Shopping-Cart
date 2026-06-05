import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { routes } from "../routes/routes";


describe('Shop page component', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });


    it('Show 6 products', async () => {
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

        const router = createMemoryRouter(routes, { initialEntries: ['/shop-page'] });
        render(<RouterProvider router={router} />);

        await screen.findByText('Products');
        expect(screen.getAllByRole('article')).toHaveLength(6);
        expect(screen.getByText('Jacket')).toBeInTheDocument();
        expect(screen.getByText('Shirt')).toBeInTheDocument();
        expect(screen.getByText('Hat')).toBeInTheDocument();
        expect(screen.getByText('Jeans')).toBeInTheDocument();
        expect(screen.getByText('Boots')).toBeInTheDocument();
        expect(screen.getByText('Sandals')).toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products?limit=6')
    })

    it('Display error if the fetch is failed', () => {
        const mockProducts = [
            { id: 1, title: 'Jacket', image: 'jacket.jpg', price: 79.9 },
            { id: 2, title: 'Shirt', image: 'shirt.jpg', price: 49.9 },
            { id: 3, title: 'Hat', image: 'hat.jpg', price: 39.9 },
            { id: 4, title: 'Jeans', image: 'jeans.jpg', price: 69.9 },
            { id: 5, title: 'Boots', image: 'boots.jpg', price: 59.9 },
            { id: 6, title: 'Sandals', image: 'sandals.jpg', price: 49.9 }
        ]
        const mockResponse = {
            ok: false,
            json: async () => mockProducts,
        }

        global.fetch.mockResolvedValue(mockResponse);

        const router = createMemoryRouter(routes, { initialEntries: ['/shop-page'] });
        render(<RouterProvider router={router} />);

        expect(screen.queryAllByRole('article')).toHaveLength(0);

    })
})