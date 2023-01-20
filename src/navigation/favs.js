import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Favs, HomeScreen, ProductDetails } from "../screens";

const Stack = createNativeStackNavigator();

const FavsNavigator = () => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Favs"
                component={HomeScreen}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
           
        </Stack.Navigator>
    )
};

export default FavsNavigator;