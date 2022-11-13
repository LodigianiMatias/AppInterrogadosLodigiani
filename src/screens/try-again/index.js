import { Button, Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const TryAgain = ({ navigation }) => {
  const onTryAgain = () => {
    navigation.navigate("MainMenu");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Has perdido!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.ibb.co/LPw3J38/icono.png" }}
          style={styles.img}
        />
      </View>
      <Text style={styles.text}>Vuelve a intentarlo</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={onTryAgain}>
        <Text style={styles.buttonText}>Volver a empezar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TryAgain;
