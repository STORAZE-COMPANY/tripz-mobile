import { lightTheme } from "@mobile/theme";
import { scale } from "@mobile/utils/resize";
import { latoTypography } from "@mobile/utils/typograph";
import { StyleSheet, TextStyle } from "react-native";


export const backgroundStyle = {
  gradient1: lightTheme.colors.gradientBackgroundColorOne,
  gradient2: lightTheme.colors.gradientBackgroundColorTwo,
};

export const textStyles: TextStyle = {
  color: lightTheme.colors.primary,
  fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
};

export const textCategoryStyles: TextStyle = {
  color: lightTheme.colors.onBackground,
  fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
  paddingLeft: 3,
  fontSize: 12,
};

export const textDisableStyles: TextStyle = {
  color: lightTheme.colors.textDisable,
};

export const styles = StyleSheet.create({
  container: {

    padding: 16
  },
  dropdown: {

    width: scale(271),
    height: scale(36),
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: scale(8),

  },
  placeholderStyle: {
    fontSize: 16,
    left: scale(8),
    color: 'gray',


  },
  selectedTextStyle: {
    fontSize: 14,


  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,


  },
  itemContainerStyle: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',



  },

  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    backgroundColor: 'white',
    marginRight: scale(2),
    paddingHorizontal: scale(12),
    paddingVertical: scale(3),
    top: scale(8),
    marginBottom: scale(10),
    marginLeft: scale(4),
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,

  },
  containerStyles: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: scale(9),
    borderWidth: 0,
    // Remover sombra
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,

  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red'
  },
  itemTextStyle: {
    marginLeft: scale(27),
    fontSize: 16,

  },
  itemTextSelectedStyle: {
    marginLeft: scale(4),
    fontSize: 16,


  },
  icon: {
    marginLeft: scale(10)
  },


});
