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
        borderRadius: 20,
        backgroundColor: 'white',
        marginRight: scale(12),
        paddingHorizontal: scale(12),
        paddingVertical: scale(3),
        top: scale(8),
        marginBottom: scale(10),
        marginLeft:scale(4),
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        
      
       
    },
    containerStyles:{
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
      icon:{
      marginLeft: scale(10)
      },
    
 
});

export { styles }