import React from "react";
import Albums from "../index";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import axios from 'axios';

jest.mock('axios');

const response = {
    data: 
        [
          {id: 1, title: 'my custom title'}
        ]
}

axios.get.mockResolvedValue(response);

it('should render elements', async () => {
   render(<Albums />)

   const element = await screen.findByText(/my custom title/i);
   expect(element).toBeInTheDocument()
})