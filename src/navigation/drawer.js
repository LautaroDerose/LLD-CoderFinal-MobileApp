import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Account, Help, Historial, Notifications, TabNavigator } from '../screens';
import ShopNavigator from './shop';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    >
      <Drawer.Screen name="Home" component={ShopNavigator} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}