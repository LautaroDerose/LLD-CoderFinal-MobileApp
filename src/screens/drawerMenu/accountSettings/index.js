import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../../components";
import { savePlace } from "../../../store/imageToolkit/place.slice";
import { styles } from "./styles";
import { COLORS } from '../../../constants/themes/colors';


const accountSettingsScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const onHandleChange = (text) => {
    setTitle(text);
  };
    
    const onHandleSubmit = () => {
        dispatch(savePlace(title, image));
        navigation.navigate("Places");
      };

    const onHandleImageSelect = (imageUrl) => {
        setImage(imageUrl);
      };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={onHandleChange}
          value={title}
        />
        <ImageSelector onImage={onHandleImageSelect} />
        <Button title="Guardar Foto" color={COLORS.gameAmber100} onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  )
}

export default accountSettingsScreen;