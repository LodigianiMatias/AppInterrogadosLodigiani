import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const PlayersItem = ({ title, image }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{title}</Text>
      </View>
      </View>
    </View>
  );
};

export default PlayersItem;