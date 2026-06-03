import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { routes } from "../routes/routes";

describe('Navbar component', () => {
    it("Go to home page if user click on 'Home' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const homeLink = screen.getByRole('link', { name: 'Home'});

        await user.click(homeLink);

        expect(screen.getByText('Shop now')).toBeInTheDocument();
    })

    it("Go to shop page if user click on 'Home' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const shopLink = screen.getByRole('link', { name: 'Shop'});

        await user.click(shopLink);

        expect(screen.getByText('Products')).toBeInTheDocument();
    })

    it("Go to cart page if user click on 'Home' link", async () => {
        const user = userEvent.setup();
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        const cartLink = screen.getByRole('link', { name: 'Cart'});

        await user.click(cartLink);

        expect(screen.getByText('Total: 0')).toBeInTheDocument();
    })
})