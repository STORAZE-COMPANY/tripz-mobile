import { lightTheme } from "@mobile/theme";
import { fonts, poppinsTypography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
      fontSize: fonts.fontSizeMediumLSmall.fontSize,
      color: lightTheme.colors.textDefault,
      fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
      lineHeight: poppinsTypography.lineHeightNormal.lineHeight,
  },
  inputWrapper: {
      
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: lightTheme.colors.inputColor,
      borderRadius: 7,
      padding: 8,
      flex: 1,
  },
  inputText: {
  
      flex: 1,
      height: 45,
   
      borderRadius: 7,
      backgroundColor: lightTheme.colors.inputColor,
      padding: 8,
      bottom: 1,
  },
  strengthContainer: {
      flexDirection: 'row',
      marginTop: 3,
  },
  strengthBar: {
      height: 4,
      flex: 1,
      marginHorizontal: 2,
      borderRadius: 2,
  },
  codeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 70,
  },
  codeInputWrapper: {
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
  },
  codeInput: {
      height: 42,
      width: 42,
      elevation: 5,
      textAlign: 'center',
      borderRadius: 8,
      position: 'relative',
      backgroundColor: '#fff',
  },
  dropdownContainer: {
      flex: 1,
      position: 'relative',
  },
  dropdown: {
      height: 50,
      elevation: 5,
      shadowColor: 'gray',
      padding: 10,
      borderRadius: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
  },
  dropdownText: {
      flex: 1,
      color: lightTheme.colors.disableIndicator,
      justifyContent: 'flex-start',
  },
  dropdownList: {
      position: 'absolute',
      top: 45,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      elevation: 2,
      borderRadius: 4,
      zIndex: 1000,
  },
  dropdownItem: {
      padding: 10,
  },
  icon: {
      marginRight: 10,
  },
});


