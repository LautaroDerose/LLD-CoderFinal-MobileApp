import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import shopNavigator from "./shop";
import CartNavigator from './cart'
import OrderNavigator from "./orders";
import FavsNavigator from "./favs";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../constants/themes/colors";
import { useSelector } from "react-redux";
import { DrawerNavigator } from "./drawer";
import { HomeScreen } from "../screens";
import { Search } from "../components";
const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {

    const cart = useSelector((state) => state.cart.items);
    
    return(
        <BottomTab.Navigator
            initialRouteName="HomeDraw"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                    marginBottom: 10,
                },
                tabBarStyle:{
                    paddingVertical: 10,
                    height: 60,
                },
                lazy: false ,
                tabBarActiveTintColor: COLORS.gameOnPrimary,
                tabBarInactiveTintColor: COLORS.gameOnSecondary,
                tabBarHideOnKeyboard: true
                
            }}
        >
            <BottomTab.Screen
                name="HomeDraw"           
                component={DrawerNavigator}
                listeners={({ navigation }) => ({
                    tabPress: (event) => {
                      event.preventDefault();
                      navigation.navigate("Home");
                    },
                  })}
                options={{
                
                title: 'Home',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={22}
                    color={COLORS.gameOnSecondary}
                    />
                ),
                
                }}
            />
           

            <BottomTab.Screen name='CartTab' component={CartNavigator}
            options={{
            title: 'cart',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={ focused ? 'cart' : 'cart-outline' }
                    size={22}
                    color={COLORS.gameOnSecondary}
                />
            ),
            tabBarBadge: cart.length === 0 ? null : cart.length,
                tabBarBadgeStyle: {
                    backgroundColor: COLORS.gameOnPrimaryContainer,
                    color: COLORS.gameOnPrimary,
                }
            }}
            />
            
            <BottomTab.Screen name='OrderTab' component={OrderNavigator}
            options={{
            title: "orders",
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={ focused ? 'file-tray' : 'file-tray-outline' }
                    size={22}
                    color={COLORS.gameOnSecondary}
                />
            ),
            }}
            />
            <BottomTab.Screen name='Favs' component={Favs}
            options={{
            title: "favs",
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={ focused ? 'heart' : 'heart-outline' }
                    size={22}
                    color={COLORS.gameOnSecondary}
                />
            ),
            }}
            />
        </BottomTab.Navigator>
    )
};

export default TabNavigator;
