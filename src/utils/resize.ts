import { PixelRatio, Dimensions } from "react-native";
 
const isTabletLike = () => {
  const pixelDensity = PixelRatio.get();
  const windowDimensions = Dimensions.get("window");
  const adjustedWidth = windowDimensions.width * pixelDensity;
  const adjustedHeight = windowDimensions.height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
};
 
export const scale = (size: number) => {
  const baseWidth = isTabletLike() ? 520 : 350;
  const windowDimensions = Dimensions.get("window");
  const shorterWindowDimension =
    windowDimensions.width > windowDimensions.height
      ? windowDimensions.height
      : windowDimensions.width;
  return (shorterWindowDimension / baseWidth) * size;
};