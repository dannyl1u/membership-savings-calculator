import { render, screen } from '@testing-library/react';
import App from './App';

test('renders membership cost savings calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/membership cost savings calculator/i);
  expect(linkElement).toBeInTheDocument();
});