import { scale } from "@mobile/utils/resize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    
      padding:16
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
        // backgroundColor:'red'
        
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
      },

    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    containerStyles:{
        backgroundColor:'rgba(255,255,255,0.7)',
        borderRadius: scale(8),
        
    },
    itemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'red'
      },
      itemTextStyle: {
        marginLeft: scale(10),
        fontSize: 16,
      },
      icon:{
        marginLeft: scale(10),
      },
    
 
});

export { styles }