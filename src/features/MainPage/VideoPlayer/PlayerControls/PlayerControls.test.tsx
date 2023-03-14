import { fireEvent, render, screen } from '@testing-library/react';

import { videoRefMock } from '../../../../common/testMocks';
import PlayerControls from "./PlayerControls";

import '@testing-library/jest-dom';

describe("PlayerControls", () => {

    it("renders play icon when not playing", () => {
        render(
            <PlayerControls
                videoRef={videoRefMock}
                playPauseCallback={jest.fn()}
                isPlaying={false}
            />
        );
        expect(screen.getByTestId("PlayArrowIcon")).toBeInTheDocument();
    });

    it("renders pause icon when playing", () => {
        render(
            <PlayerControls
                videoRef={videoRefMock}
                playPauseCallback={jest.fn()}
                isPlaying={true}
            />
        );
        expect(screen.getByTestId("PauseIcon")).toBeInTheDocument();
    });

    it("seeks to correct time on progress click", () => {
        const getBoundingClientRectMock = jest.fn().mockReturnValue({ left: 0, width: 100 });
        Element.prototype.getBoundingClientRect = getBoundingClientRectMock;

        render(
            <PlayerControls
                videoRef={videoRefMock}
                playPauseCallback={jest.fn()}
                isPlaying={false}
            />
        );
        const progressBar = screen.getByRole("progressbar");
        fireEvent.click(progressBar, { clientX: 50, target: progressBar });
        expect(videoRefMock.current.currentTime).toBe(50);

        fireEvent.click(progressBar, { clientX: 75, target: progressBar });
        expect(videoRefMock.current.currentTime).toBe(75);

        fireEvent.click(progressBar, { clientX: 100, target: progressBar });
        expect(videoRefMock.current.currentTime).toBe(100);

        expect(getBoundingClientRectMock).toHaveBeenCalledTimes(3);
    });

    it("adds and removes timeupdate listener on mount/unmount", () => {
        const { unmount } = render(
            <PlayerControls
                videoRef={videoRefMock}
                playPauseCallback={jest.fn()}
                isPlaying={false}
            />
        );
        expect(videoRefMock.current.addEventListener).toHaveBeenCalledWith(
            "timeupdate",
            expect.any(Function)
        );

        unmount();
        expect(videoRefMock.current.removeEventListener).toHaveBeenCalledWith(
            "timeupdate",
            expect.any(Function)
        );
    });
});
