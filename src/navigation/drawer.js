import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Account, Help, Theme, Notifications, TabNavigator } from '../screens';
import ShopNavigator from './shop';
import { TouchableOpacity, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { ButtonMenu, CustomDrawer } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/themes/colors';


const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    // drawerContent={(props)=> <CustomDrawer {...props } /> }
    drawerContent={(props)=> <MenuItems {...props } /> }
    screenOptions={{
      
      drawerActiveBackgroundColor: COLORS.gameOnSecondaryContainer,
      drawerActiveTintColor: COLORS.gameOnSecondary,
      drawerInactiveTintColor: COLORS.gameOnTeriary,
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize: 15,
      }
    }}
    >
      <Drawer.Screen name="Home" component={ShopNavigator} 
        options={{
          headerRight: ()=> (
            <TouchableOpacity style={{paddingRight: 20}}><Ionicons name="search" size={28} color="black" />
            </TouchableOpacity>
          )
        }}
      />
      <Drawer.Screen name="Account" component={Account} screenOptions={{ headerShown: false,}} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Theme" component={Theme} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
const MenuItems = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <ImageBackground 
      source={require('../../assets/images/undraw_Personal_text_re_vqj3.png')}
      style={{padding:20}}
      >
        <Image
        source={require('../../assets/images/undraw_Profile_data_re_v81r.png')}
        style={{height:80, width:80, borderRadius: 40, marginBottom:10 }}
        />
        <Text>Fulano DeTal</Text>
      </ImageBackground>
      <Text style={styles.title}>Mi menu</Text>
      <ButtonMenu
        text = "Home"
        onPress= {() => navigation.navigate('Home')}
        // icon = {<Ionicons name="home-outline" size={18} color="black" />}
      />
      <ButtonMenu
        text = "My Account"
        onPress= {() => navigation.navigate('Account')}
        icon = {<Ionicons name="person-outline" size={18} color="black" />}
      />
      <ButtonMenu
        text = "Help"
        onPress= {() => navigation.navigate('Help')}
        icon = {<Ionicons name="help-circle-outline" size={18} color="black" />}
      />
      <ButtonMenu
        text = "Custom Theme"
        onPress= {() => navigation.navigate('Theme')}
        icon = {<Ionicons name="brush-outline" size={18} color="black" />}
      />
      <ButtonMenu
        text = "Notifications"
        onPress= {() => navigation.navigate('Notifications')}
        icon = {<Ionicons name="notifications-outline" size={18} color="black" />}

      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});