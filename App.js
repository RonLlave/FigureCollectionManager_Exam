import React, { useRef } from "react";
import { Animated, Easing } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import EditScreen from "./screens/EditScreen";
import { FigureProvider } from "./context/FigureContext";

const Stack = createStackNavigator();

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    cardStyle: {
      opacity,
    },
  };
};

export default function App() {
  return (
    <FigureProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen
            name="Figure Collection Manager"
            component={HomeScreen}
          />
          {/* <Stack.Screen name="Edit" component={EditScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </FigureProvider>
  );
}
