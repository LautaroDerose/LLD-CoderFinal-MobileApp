import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { Cart } from "../screens";
import { isIOS } from "../utils";
import { COLORS } from "../constants/themes/colors";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {

    

    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? COLORS.gameOnTeriaryContainer : COLORS.gameOnPrimaryContainer,
                },
                headerTintColor: COLORS.gameOnPrimary,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                },
                presentation: 'card',
                headerBackTitle: '',
                
                
            }}
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
};

export default CartNavigator;