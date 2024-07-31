import { useWindow } from "@mobile/hooks/windowHook";
import { DimensionValue, FlexAlignType, StyleProp, View, ViewStyle } from "react-native";
import { styles } from './styles';
import { IStyleProps } from "@mobile/utils/stylesProps";
import { scale } from "@mobile/utils/resize";

const Box = ({
  elevation,
  borderColor,
  borderWidth,
  borderBottomWidth,
  children,
  justifyContent,
  alignItems,
  alignSelf,
  width,
  height,
  backgroundColor,
  position,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  pdTop,
  pdBottom,
  pdLeft,
  pdRight,
  pdVertical,
  pdHorizontal,
  left,
  right,
  bottom,
  top,
  borderRadius,
  shadowBox,
  shadowColor,
  ref,
  style,
  flexDirection,
  flexWrap,
  zIndex,
  flex,
  maxWidth,
}: IStyleProps) => {

  const { widthScale, heightScale } = useWindow();

  const boxStyles = {
    ...styles.container,
    alignItems: alignItems && alignItems,
    flex: flex && flex,
    alignSelf: alignSelf && alignSelf,
    justifyContent: justifyContent && justifyContent,
    flexDirection: flexDirection && flexDirection,
    flexWrap: flexWrap && flexWrap,
    width: width ? scale(width) : undefined,
    height: height ? scale(height) : undefined,
    backgroundColor: backgroundColor && backgroundColor,
    position: position && position,
    paddingHorizontal: pdHorizontal ? scale(pdHorizontal) : undefined,
    paddingVertical: pdVertical ? heightScale(pdVertical) : undefined,
    paddingLeft: pdLeft ? heightScale(pdLeft) : undefined,
    paddingRight: pdRight ? heightScale(pdRight) : undefined,
    paddingTop: pdTop ? heightScale(pdTop) : undefined,
    paddingBottom: pdBottom ? heightScale(pdBottom) : undefined,
    marginHorizontal: marginHorizontal ? heightScale(marginHorizontal) : undefined,
    marginVertical: marginVertical ? heightScale(marginVertical) : undefined,
    marginLeft: marginLeft ? heightScale(marginLeft) : undefined,
    marginRight: marginRight ? heightScale(marginRight) : undefined,
    marginTop: marginTop ? heightScale(marginTop) : undefined,
    marginBottom: marginBottom ? heightScale(marginBottom) : undefined,
    borderColor: borderColor && borderColor,
    left: left ? heightScale(left) : undefined,
    right: right ? scale(right) : undefined,
    bottom: bottom ? scale(bottom) : undefined,
    top: top ? scale(top) : undefined,
    borderRadius: borderRadius && heightScale(borderRadius),
    elevation: elevation || shadowBox ? 5 : undefined,
    shadowColor: shadowColor || shadowBox ? 'black' : undefined,
    shadowOffset: shadowBox ? { width: 0, height: 2 } : undefined,
    shadowOpacity: shadowBox ? 0.25 : undefined,
    shadowRadius: shadowBox ? 3 : undefined,
    zIndex: zIndex && zIndex,
    maxWidth: maxWidth && maxWidth,
    borderWidth: borderWidth && widthScale(borderWidth),
    borderBottomWidth: borderBottomWidth && widthScale(borderBottomWidth)
  }

  return (
    <View ref={ref} style={boxStyles}>
      {children}
    </View>
  )
}

export { Box };