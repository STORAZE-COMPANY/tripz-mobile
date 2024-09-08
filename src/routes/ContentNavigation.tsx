import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeSimple } from "../pages/Content/Home/HomeSimple/HomeSimple";
import { CustomMap } from "../pages/Content/Home/MapHome/Map";
import DetalhesLocal from "../pages/Content/Home/Details/Details";

const ContentNavigator = () => {
  const ContentStack = createStackNavigator();

  return (
    <ContentStack.Navigator
      screenOptions={{ headerShown: false, presentation: "transparentModal" }}
      initialRouteName="HomeSimple"
    >
      <ContentStack.Screen name="HomeSimple" component={HomeSimple} />
      <ContentStack.Screen name="CustomMap" component={CustomMap} />
      <ContentStack.Screen name="DetalhesLocal" component={DetalhesLocal} />
    </ContentStack.Navigator>
  );
};

export { ContentNavigator };
