import React from "react";
import Counter from "../index";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should have default vale as 0' , () => {
    render(<Counter>0</Counter>);

    const countElement = screen.getByText(/count/i);

    expect(countElement).toHaveTextContent('count 0')

    // expect(countElement).toBeInTheDocument();
})


it('should increment value', () => {
    render(<Counter>0</Counter>)   

    const countElement = screen.getByText(/count/i);
    const plusElement = screen.getByText(/plus/i);

    fireEvent.click(plusElement);

    expect(countElement).toHaveTextContent('count 1');

});


it('should decrement value', () => {
    render(<Counter>0</Counter>)   

    const countElement = screen.getByText(/count/i);
    const minusElement = screen.getByText(/minus/i);
    const plusElement = screen.getByText(/plus/i);

    fireEvent.click(plusElement);
    fireEvent.click(plusElement);
    fireEvent.click(minusElement);

    expect(countElement).toHaveTextContent('count 1');

})