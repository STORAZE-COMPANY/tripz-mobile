import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeSimple}  from './Home/HomeSimple/HomeSimple';
import {CustomMap} from './Home/HomeMap/Map';

const ContentNavigator = () => {

    const ContentStack = createStackNavigator();

    return (
        <ContentStack.Navigator
            screenOptions={{ headerShown: false, presentation: 'transparentModal', }} initialRouteName='HomeSimple'>

            <ContentStack.Screen name="HomeSimple" component={HomeSimple} />
            <ContentStack.Screen name="CustomMap" component={CustomMap} />

        </ContentStack.Navigator>
    );
};

export  {ContentNavigator};
