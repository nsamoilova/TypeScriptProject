import React from "react";
import Button from "../index";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('should display content', () => {
    render(<Button>test</Button>)

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('test');
});

it('should display contents', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>test</Button>)

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClick).toBeCalled();
});

