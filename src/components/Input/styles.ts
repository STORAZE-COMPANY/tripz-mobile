import { fonts, latoTypography, poppinsTypography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      width: 360,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 10,
      flexWrap: 'wrap',
    },
    inputText:{
        color:'#A0A0A0',
        width: '100%',
        fontFamily: poppinsTypography.fontFamilyLight.fontFamily,
        fontSize: fonts.fontSizeSmall.fontSize,

    }
  });

export default styles;