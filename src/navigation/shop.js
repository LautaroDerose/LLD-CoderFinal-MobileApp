import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Categories, Product, Products, HomeScreen, ProductDetails } from "../screens";
import { COLORS } from "../constants/themes/colors";
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation, product}) => {

    const config = {
        Animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3, 
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        }
    }
    
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
                name="Categories" 
                component={Categories} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ route }) => ({
                    title:route.params.title,
                })} 
            />
            <Stack.Screen 
                name="Product" 
                component={Product}
                // options={({ route }) => ({
                //     title: product.title,
                // })}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
        </Stack.Navigator>
    )
};
export default ShopNavigator;