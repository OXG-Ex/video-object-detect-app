import { fireEvent, render, screen } from '@testing-library/react';

import EventItem from './EventItem';

import '@testing-library/jest-dom';

describe('EventItem', () => {
    const mockOnClick = jest.fn();
    const timestamp = 412932;

    it('should render the formatted timestamp', () => {
        render(<EventItem onClick={mockOnClick} timestamp={timestamp} />);
        expect(screen.getByText('06:52:652')).toBeInTheDocument();
    });

    it('should call onClick when clicked', () => {
        render(<EventItem onClick={mockOnClick} timestamp={timestamp} />);
        const item = screen.getByRole('button');
        fireEvent.click(item);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
