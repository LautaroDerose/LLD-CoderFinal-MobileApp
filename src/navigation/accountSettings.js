import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Categories, Product, Products, HomeScreen, ProductDetails, accountSettings, Account, accountSettingsScreen } from "../screens";
import { COLORS } from "../constants/themes/colors";
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const AccountSettings = ({navigation, product}) => {

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
            initialRouteName="Account"
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
                headerShown: false,
            }}
        >

            <Stack.Screen 
                name="Account" 
                component={Account} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="accountSettingsScreen" 
                component={accountSettingsScreen} 
                options={({ route }) => ({
                    title:route.params.title,
                })} 
            />
            
        </Stack.Navigator>
    )
};
export default AccountSettings;