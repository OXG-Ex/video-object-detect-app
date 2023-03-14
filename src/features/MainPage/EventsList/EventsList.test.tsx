import { fireEvent, render, screen } from '@testing-library/react';

import { mockEvents, videoRefMock } from '../../../common/testMocks';
import * as reactRedux from '../../../store/hooks';
import EventsList from './EventsList';

import '@testing-library/jest-dom';

describe('EventsList', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useAppSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useAppDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useSelectorMock.mockReturnValueOnce(mockEvents);
        useDispatchMock.mockClear();
        useDispatchMock.mockReturnValue(jest.fn());
    });

    it('renders event list and items', () => {
        useSelectorMock.mockReturnValueOnce(false);
        render(<EventsList videoRef={videoRefMock} />);
        const eventListTitle = screen.getByText('Events');
        expect(eventListTitle).toBeInTheDocument();
        const eventItems = screen.getAllByRole('button');
        expect(eventItems).toHaveLength(mockEvents.length);
    });

    it('clicks on event item and sets current video time', () => {
        useSelectorMock.mockReturnValueOnce(false);
        render(<EventsList videoRef={videoRefMock} />);
        const eventItem = screen.getAllByRole('button')[0];
        fireEvent.click(eventItem);
        expect(videoRefMock.current.currentTime).toEqual(320.303);
    });

    it('renders "Loading..." text when isLoading is true', () => {
        useSelectorMock.mockReturnValueOnce(true);
        render(<EventsList videoRef={videoRefMock} />);;
        const loadingText = screen.getByText('Loading...');
        expect(loadingText).toBeInTheDocument();
    });
});
