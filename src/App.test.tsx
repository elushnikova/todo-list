import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello, world" text', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello, world/i);
  expect(helloWorldElement).toBeInTheDocument();
});
