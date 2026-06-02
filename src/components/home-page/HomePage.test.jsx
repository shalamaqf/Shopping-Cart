import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from './HomePage.jsx';

describe('HomePage component', () => {
    it('Render HomePage component to match snapshot', () => {
        const { container } = render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
    })
})