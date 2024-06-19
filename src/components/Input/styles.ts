import { lightTheme } from "@mobile/theme";
import { fonts, poppinsTypography } from "@mobile/utils/typograph";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
      fontSize: fonts.fontSizeMediumLSmall.fontSize,
      color: lightTheme.colors.textDefault,
      fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
      lineHeight: poppinsTypography.lineHeightNormal.lineHeight,
  },
  inputWrapper: {
    backgroundColor: lightTheme.colors.inputColor,
    borderRadius: 7,
    paddingRight:9,
    elevation: 2,
    flexWrap:'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
  },
  inputText: {
      flex: 1,  
        height:45,
      borderRadius: 7,
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

barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
strengthLabel: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
},
modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center'
},
modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
},
modalCloseButton: {
    marginTop: 10,
    color: 'blue',
},
tooltipContainer: {
    flex:1,
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    borderColor: '#fff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxWidth: Dimensions.get('window').width - 40,
    width: 300, 
},
tooltipText: {
    fontSize: 14,
    color: '#333',
},

tooltipArrow: {
    position: 'absolute',
    top: -10, 
    left: '100%',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderTopWidth: 0,
    borderBottomColor: '#fff', 
    borderBottomWidth: 10,
   
}

});


