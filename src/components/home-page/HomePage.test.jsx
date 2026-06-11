import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import HomePage from './HomePage.jsx';
import userEvent from "@testing-library/user-event";
import { routes } from '../routes/routes.jsx'

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
        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);
        expect(screen.getByText('➔ Shop now')).toBeInTheDocument();
        
        const link = screen.getByRole('link', { name: '➔ Shop now'});

        await user.click(link);

        expect(screen.getByText('Products')).toBeInTheDocument();
    })
})