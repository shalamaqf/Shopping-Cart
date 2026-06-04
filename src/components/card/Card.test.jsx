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
    })
})