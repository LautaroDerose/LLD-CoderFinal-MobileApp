import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Orders } from "../screens";
import { HomeScreen } from "../screens";
import { WelcomeScreen } from "../screens";
import { isIOS } from "../utils";
import { COLORS } from "../constants/themes/colors";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import AuthNavigator from "./auth";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />
            <Stack.Screen
                name="AuthNavigator"
                component={AuthNavigator}
            />
        </Stack.Navigator>
    )
};

export default HomeNavigator;