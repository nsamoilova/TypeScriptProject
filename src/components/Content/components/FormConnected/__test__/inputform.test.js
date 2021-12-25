import React from "react";
import FormConnected from "..";
// import Input from '../LeftSideForm/index';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should update value', () => {
    // const onChange = jest.fn()
    render (<FormConnected />);

    const inputLeft = screen.getByTestId('inputLeft');
    const inputRight = screen.getByTestId('inputRight')

    fireEvent.change(inputLeft, {target: {value: 'custom'}})
 

    expect(inputRight.value).toBe('custom')
})

it('should update value', () => {
    // const onChange = jest.fn()
    render (<FormConnected />);

    const inputLeft = screen.getByTestId('inputLeft');
    const inputRight = screen.getByTestId('inputRight')

  
    fireEvent.change(inputRight, {target: {value: 'custom'}})

    expect(inputLeft.value).toBe('custom')
})