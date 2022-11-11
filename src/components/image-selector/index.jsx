import * as ImagePicker from "expo-image-picker";

import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Necesitamos permisos para usar la cámara", [{ text: "Entendido" }]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return
    };

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>Selecciona una imagen.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onHandleTakePhoto}>
        <Text style={styles.buttonText}>Tomar foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
