export const calculateCoordinates = (newWidth: number, newHeight: number, oldWidth: number, oldHeight: number, x: number, y: number, w: number, h: number) => {
    const xRatio = newWidth / oldWidth;
    const yRatio = newHeight / oldHeight;
    const newX = Math.round(x * xRatio);
    const newY = Math.round(y * yRatio);
    const newW = Math.round(w * xRatio);
    const newH = Math.round(h * yRatio);
    return {
        x: newX,
        y: newY,
        width: newW,
        height: newH
    };
};
