import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('should render learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
}, 5000);