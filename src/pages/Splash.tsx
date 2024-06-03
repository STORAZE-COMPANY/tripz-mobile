import { View, Text , StyleSheet } from 'react-native'
import React, { useEffect, useRef  } from 'react'
import LottieView from 'lottie-react-native'
import splash from './../../assets/splash.json'
import { useNavigation, CommonActions } from '@react-navigation/native';


export interface SplashScreenProps {

}

export default function Splash() {
    const animation = React.useRef(null);
    const animationRef = useRef<LottieView>(null);
    const navigation = useNavigation();

    useEffect(() => { 

        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Auth' }]
            }))
        }, 4000)
    }, [])
    // useEffect(() => {
    //     animationRef.current?.play();
    //     // Or set a specific startFrame and endFrame with:
    //     animationRef.current?.play(30, 120);
    //   }, []);

  return (
    <View style={styles.container}>
      <LottieView autoPlay loop 
      resizeMode='contain'
      ref={animation}
      source={splash}
      style={{width: "100%", height: "100%"}}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})