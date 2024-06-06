import { typography } from "@mobile/utils/typograph";
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
    Label: {
        fontSize: 16,
        color: '#5E5E5E',
    },
    inputText:{
        color:'#A0A0A0',
        width: '100%',
        fontFamily: typography.fontFamilyLight.fontFamily

    }
  });

export default styles;