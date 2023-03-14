import { AnalyticEventModel } from "../models/AnalyticEventModel";
import * as reactRedux from "../store/hooks";

export const mockEvents: AnalyticEventModel[] = [
    { "id": 1, "timestamp": 320303, "duration": 907, "zone": { "left": 535, "top": 97, "width": 120, "height": 58 } },
    { "id": 2, "timestamp": 99746, "duration": 813, "zone": { "left": 231, "top": 64, "width": 50, "height": 43 } },
    { "id": 3, "timestamp": 412932, "duration": 344, "zone": { "left": 975, "top": 499, "width": 98, "height": 75 } }
];

export const videoRefMock = {
    current: {
        currentTime: 0,
        duration: 100,
        paused: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        pause: jest.fn(),
        play: jest.fn()
    }
} as unknown as React.RefObject<HTMLVideoElement>;

export const canvasRefMock = {
    current: {
        getContext: jest.fn().mockReturnValue({
            clearRect: jest.fn(),
            strokeStyle: "",
            beginPath: jest.fn(),
            rect: jest.fn(),
            stroke: jest.fn()
        }),
        width: 0,
        height: 0
    }
};

export const useSelectorMock = jest.spyOn(reactRedux, 'useAppSelector');
export const useDispatchMock = jest.spyOn(reactRedux, 'useAppDispatch');
