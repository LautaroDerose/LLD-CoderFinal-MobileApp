import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { COLORS } from "../../constants/themes/colors";
import { useNavigation } from '@react-navigation/native';

const Account = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={{ marginLeft: 25}}
        onPress={()=> navigation.navigate('Home')}>
        <Ionicons name="chevron-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.imgProfileContainer}>
          <Image style={styles.imgProfile}
            source={require('../../../assets/images/undraw_Add_to_cart_re_wrdo.png')}
          />
          <TouchableOpacity style={styles.imgIcon} onPress={()=> navigation.navigate('AccountSettings', { screen: 'accountSettingsScreen' })}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.userNameContainer}>
         <View style={{flexDirection:'row', alignItems:'center'}}>
         <Text style={{...styles.userName, paddingHorizontal:5}}>Fulano De Tal</Text>
         <Ionicons name="pencil" size={18} color="black" />
         </View>
          <Text style={styles.userEmail}>fulanoDeTal@gmail.com</Text>
        </View>
      </View>

      {/* <View style={styles.body}>
        <Text style={styles.titleBody}>body</Text>
        <View>
          <View style={styles.headerTabBody}>
            <Text>Options</Text>
            <Text>Options</Text>
            <Text>Options</Text>
          </View>
        </View>
      </View> */}
      
      <View style={styles.footer}>
        <View style={{padding:20}}>
          
          <Text style={styles.titleFooter}>Mi Cuenta</Text>
          <TouchableOpacity style={styles.footerBtn}>
            <View style={styles.footerIconTitle}>
              <Ionicons name="person-outline" size={24} color="black" />
              <Text style={styles.footerBtnText}>Informacion Personal</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerBtn}>
          <View style={styles.footerIconTitle}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.footerBtnText}>Notificaciones</Text>
          </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.titleFooter} >Descuentos y beneficios</Text>
          <TouchableOpacity style={{...styles.footerBtn,  marginBottom: 30}}>
          <View style={styles.footerIconTitle}>
            <Ionicons name="gift-outline" size={24} color="black" />
            <Text style={styles.footerBtnText}>Programa de Beneficios</Text>
          </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          
          <View style={{ borderTopWidth: 1, borderTopColor:COLORS.grey}}>
          <TouchableOpacity style={{...styles.footerBtn, paddingTop: 20}}>
            <View style={styles.footerIconTitle}>
              <Ionicons name="information-circle-outline" size={24} color="black" />
              <Text style={styles.footerBtnText}>Informacion Legal</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn}>
            <View style={styles.footerIconTitle}>
              <Ionicons name="log-out-outline" size={24} color="black" />
              <Text style={styles.footerBtnText}>Cerrar Sesion</Text>
            </View>
          </TouchableOpacity>
          </View>

          {/* <View>
          <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons name="notifications-outline" size={24} color="black" />
            <Ionicons name="camera" size={24} color="black" />
            <Ionicons name="camera-outline" size={24} color="black" />
            <Ionicons name="gift" size={24} color="black" />
            <Ionicons name="help-circle" size={24} color="black" />
            <Ionicons name="help-circle-outline" size={24} color="black" />
            <Ionicons name="image" size={24} color="black" />
            <Ionicons name="image-outline" size={24} color="black" />
            <Ionicons name="information-circle" size={24} color="black" />
            <Ionicons name="information-circle-outline" size={24} color="black" />
            <Ionicons name="log-in" size={24} color="black" />
            <Ionicons name="log-in-outline" size={24} color="black" />
            <Ionicons name="log-out" size={24} color="black" />
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Ionicons name="mail" size={24} color="black" />
            <Ionicons name="mail-outline" size={24} color="black" />
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Ionicons name="people" size={24} color="black" />
            <Ionicons name="person" size={24} color="black" />
            <Ionicons name="person-circle" size={24} color="black" />
            <Ionicons name="person-circle-outline" size={24} color="black" />
            <Ionicons name="person-outline" size={24} color="black" />
            <Ionicons name="search" size={24} color="black" />
            <Ionicons name="search-circle" size={24} color="black" />
            <Ionicons name="search-circle-outline" size={24} color="black" />
            <Ionicons name="trash" size={24} color="black" />
            <Ionicons name="trash-outline" size={24} color="black" />
            <Ionicons name="ios-alert-circle" size={24} color="black" />
            <Ionicons name="ios-alert-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          </View> */}
        </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 70
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  imgProfileContainer: {
    // display: inline-block,
    position: 'relative',
  },
  imgIcon: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gameOnPrimary,
    width:30,
    height:30,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userNameContainer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: 10, 
    justifyContent: 'center'
  },
  headerTabBody: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',	
  },
  footer: {

  },
  titleFooter: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingVertical: 10
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  footerIconTitle:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerBtnText: {
    paddingHorizontal: 10,
  }
})

export default Account;