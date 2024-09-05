import { DimensionValue, FlexAlignType, StyleProp, View, ViewStyle } from "react-native";

interface IStyleProps {
    children?: React.ReactNode;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: FlexAlignType;
    alignSelf?: FlexAlignType;
    width?: number;
    height?: number;
    color?:string;
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
    borderBottomWidth?:number
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
    zIndex?: number;
    ref?: React.Ref<View>;
    style?: StyleProp<ViewStyle>;
    flex?: number;
    maxWidth?: DimensionValue;
    opacity?: number;
}

export {IStyleProps}