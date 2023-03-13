export const calculateCoordinates = (newWidth: number, newHeight: number, oldWidth: number, oldHeight: number, x: number, y: number, w: number, h: number) => {
    console.log("original", oldWidth, oldHeight);
    console.log("new", newWidth, newHeight);
    const xRatio = newWidth / oldWidth;
    const yRatio = newHeight / oldHeight;
    const newX = x * xRatio;
    const newY = y * yRatio;
    const newW = w * xRatio;
    const newH = h * yRatio;
    return {
        x: newX,
        y: newY,
        width: newW,
        height: newH
    };
};
