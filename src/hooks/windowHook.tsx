import { useWindowDimensions, Platform, PixelRatio } from 'react-native';
import { useMemo } from 'react';

const guidelineBaseWidth = 350;

const useWindow = () => {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, fontScale: SCREEN_FONT } = useWindowDimensions();

    const wscale = useMemo(() => SCREEN_WIDTH / 375, [SCREEN_WIDTH]);
    const hscale = useMemo(() => SCREEN_HEIGHT / 667, [SCREEN_HEIGHT]);

    const normalize = (size: number, based = 'width') => {
        const newSize = based === 'height' ? size * hscale : size * wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        }
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    };

    return {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        fontScale: SCREEN_FONT,
        widthScale: (value: number) => SCREEN_WIDTH * value / 100,
        heightScale: (value: number) => SCREEN_HEIGHT * value / 100,
        fontScaleSize: (size: number) => size * (SCREEN_WIDTH / guidelineBaseWidth),
        normalizeWidth: (width: number) => normalize(width, 'width'),
        normalizeHeight: (height: number) => normalize(height, 'height'),
        normalizeScale: (scale: number) => normalize(scale),
        widthSize: (value: number) => (value / wscale) * SCREEN_WIDTH,
        heightSize: (value: number) => (value / wscale) * SCREEN_HEIGHT,
    };
};

export { useWindow };