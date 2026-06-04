import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { routes } from "../routes/routes";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

const item = {
            id: 1,
            name: 'Jacket',
            src: 'jacket.jpg',
            price: 79.9
        }

const addToCart = vi.fn();

describe('Card component', () => {
    it('Test if user type in input field, it will change the quantity', async () => {
        render(<Card item={item}/>)

        const inputField = screen.getByRole('spinbutton');

        fireEvent.change(inputField, { target: { value: 5}})
        expect(inputField).toHaveValue(5);
        expect(screen.getByText('Quantity: 5')).toBeInTheDocument();

        fireEvent.change(inputField, { target: { value: -1}})
        expect(inputField).toHaveValue(1);
        expect(screen.getByText('Quantity: 1')).toBeInTheDocument();

    })

    it('Test if user click increment button, it will change the quantity by +1', async () => {
        const user = userEvent.setup();
        
        render(<Card item={item}/>)

        const incrementButton = screen.getByRole('button', { name: '+'});

        await user.click(incrementButton);

        expect(screen.getByText('Quantity: 2')).toBeInTheDocument();

        await user.click(incrementButton);

        expect(screen.getByText('Quantity: 3')).toBeInTheDocument();

    })

    it('Test if user click decrement button, it will change quantity by -1', async () => {
        const user = userEvent.setup();
        
        render(<Card item={item}/>)

        const decrementButton = screen.getByRole('button', { name: '-'});
        const incrementButton = screen.getByRole('button', { name: '+'});

        await user.click(decrementButton);

        expect(screen.getByText('Quantity: 1')).toBeInTheDocument();

        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    })
})