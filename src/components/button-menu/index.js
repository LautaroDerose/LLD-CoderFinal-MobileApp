import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/themes/colors'
import { Ionicons } from '@expo/vector-icons';

const ButtonMenu = ({text, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.text}>{ text }</Text>

    </TouchableOpacity  >
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth:2,
    borderColor: COLORS.gameOnPrimary,
    // backgroundColor: COLORS.gameOnPrimaryContainer,
    marginBottom: 15,
    padding: 15,
    borderRadius:10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
  }

})

export default ButtonMenu;