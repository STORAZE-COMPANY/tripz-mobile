// Box.tsx
import React, { useMemo } from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, FlexAlignType } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/scale/scale';

interface IBoxProps {
  children?: React.ReactNode;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: FlexAlignType;
  alignSelf?: FlexAlignType;
  width?: number;
  height?: number;
  backgroundColor?: string;
  position?: "absolute" | "relative";
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
  pdVertical?: number;
  pdHorizontal?: number;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  borderRadius?: number;
  shadowBox?: boolean;
  shadowColor?: string;
  borderColor?: string;
  elevation?: number;
  borderWidth?: number;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  zIndex?: number;
  ref?: React.Ref<View>;
  style?: StyleProp<ViewStyle>;
  flex?: number;
  maxWidth?: number | string;
}

const Box = ({
  elevation,
  borderColor,
  borderWidth,
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
}: IBoxProps) => {

  const styles = useMemo(() => StyleSheet.create({
    BoxContainer: {
      alignItems,
      flex,
      alignSelf,
      justifyContent,
      flexDirection,
      flexWrap,
      width: width ? `${width}%` : undefined,
      height: height ? `${height}%` : undefined,
      backgroundColor,
      position,
      paddingHorizontal: pdHorizontal ? scale(pdHorizontal) : undefined,
      paddingVertical: pdVertical ? verticalScale(pdVertical) : undefined,
      paddingLeft: pdLeft ? scale(pdLeft) : undefined,
      paddingRight: pdRight ? scale(pdRight) : undefined,
      paddingTop: pdTop ? verticalScale(pdTop) : undefined,
      paddingBottom: pdBottom ? verticalScale(pdBottom) : undefined,
      marginHorizontal: marginHorizontal ? scale(marginHorizontal) : undefined,
      marginVertical: marginVertical ? verticalScale(marginVertical) : undefined,
      marginLeft: marginLeft ? scale(marginLeft) : undefined,
      marginRight: marginRight ? scale(marginRight) : undefined,
      marginTop: marginTop ? verticalScale(marginTop) : undefined,
      marginBottom: marginBottom ? verticalScale(marginBottom) : undefined,
      borderColor,
      left: left ? scale(left) : undefined,
      right: right ? scale(right) : undefined,
      bottom: bottom ? verticalScale(bottom) : undefined,
      top: top ? verticalScale(top) : undefined,
      borderRadius: borderRadius ? scale(borderRadius) : undefined,
      elevation: elevation || shadowBox ? 5 : undefined,
      shadowColor: shadowColor || shadowBox ? 'black' : undefined,
      shadowOffset: shadowBox ? { width: 0, height: 2 } : undefined,
      shadowOpacity: shadowBox ? 0.25 : undefined,
      shadowRadius: shadowBox ? 3 : undefined,
      zIndex,
      maxWidth,
      borderWidth,
    }
  }), [
    alignItems,
    flex,
    alignSelf,
    justifyContent,
    flexDirection,
    flexWrap,
    width,
    height,
    backgroundColor,
    position,
    pdHorizontal,
    pdVertical,
    pdLeft,
    pdRight,
    pdTop,
    pdBottom,
    marginHorizontal,
    marginVertical,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    borderColor,
    left,
    right,
    bottom,
    top,
    borderRadius,
    elevation,
    shadowBox,
    shadowColor,
    zIndex,
    maxWidth,
    borderWidth,
  ]);

  return (
    <View
      style={[styles.BoxContainer, style]}
      ref={ref}
    >
      {children}
    </View>
  );
};

export default Box;
