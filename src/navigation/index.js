import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './tabs';
import AuthNavigator from './auth';
import HomeNavigator from "./home";
import DrawerNavigator from './drawer'


const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);
    return (
        <NavigationContainer> 
            <TabNavigator />  
            {/* <DrawerNavigator/> */}
            {/* { userId ? <TabNavigator /> : <HomeNavigator/>}  */}
            {/* { userId ? <TabNavigator /> : <AuthNavigator/>}  */}
        </NavigationContainer>
    )
};

export default AppNavigator;
