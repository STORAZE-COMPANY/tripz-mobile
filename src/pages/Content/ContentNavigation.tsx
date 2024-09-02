import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeSimple}  from './Home/HomeSimple/HomeSimple';
import {CustomMap} from './Home/HomeMap/Map';
import DetalhesLocal from './Home/Details/Details';

const ContentNavigator = () => {

    const ContentStack = createStackNavigator();

    return (
        <ContentStack.Navigator
            screenOptions={{ headerShown: false, presentation: 'transparentModal', }} initialRouteName='HomeSimple'>
            <ContentStack.Screen name="HomeSimple" component={HomeSimple} />
            <ContentStack.Screen name="CustomMap" component={CustomMap} />
            <ContentStack.Screen name="DetalhesLocal" component={DetalhesLocal} />
        </ContentStack.Navigator>
    );
};

export  {ContentNavigator};
