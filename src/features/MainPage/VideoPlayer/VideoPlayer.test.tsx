import { fireEvent, render, screen } from '@testing-library/react';

import { mockEvents, useDispatchMock, useSelectorMock, videoRefMock } from '../../../common/testMocks';
import VideoPlayer from './VideoPlayer';

import '@testing-library/jest-dom';

describe('VideoPlayer', () => {
    const videoSrc = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    beforeEach(() => {
        useSelectorMock.mockClear();
        useSelectorMock.mockReturnValue(mockEvents);
        useDispatchMock.mockClear();
        useDispatchMock.mockReturnValue(jest.fn());
    });

    it('renders the component without error', () => {
        render(<VideoPlayer videoSrc={videoSrc} videoRef={videoRefMock} />);
        expect(screen.getByTestId<HTMLVideoElement>('video-player')).toBeInTheDocument();
    });

    it('displays the PlayerSkeleton element until the video is loaded', () => {
        render(<VideoPlayer videoSrc={videoSrc} videoRef={videoRefMock} />);
        expect(screen.getByTestId('player-skeleton')).toBeInTheDocument();
        expect(screen.getByTestId<HTMLVideoElement>('video-player')).toHaveAttribute('hidden');
    });

    it('displays video after loading metadata', () => {
        render(<VideoPlayer videoSrc={videoSrc} videoRef={videoRefMock} />);
        const video = screen.getByTestId<HTMLVideoElement>('video-player');

        fireEvent.loadedMetadata(video);
        expect(video).not.toHaveAttribute('hidden');
        expect(screen.queryByTestId('player-skeleton')).not.toBeInTheDocument();

        // Checking that the canvas dimensions match the video dimensions
        const canvas = screen.getByTestId('canvas-events');
        expect(canvas).toHaveAttribute('width', video.videoWidth.toString());
        expect(canvas).toHaveAttribute('height', video.videoHeight.toString());
    });
});

