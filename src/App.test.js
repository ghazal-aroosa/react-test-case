import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
test('text case', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello piaic/i);
  expect(linkElement).toBeInTheDocument();
});
test('text case', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello sir/i);
  expect(linkElement).toBeInTheDocument();
});