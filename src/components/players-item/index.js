import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const PlayersItem = ({ title, image }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayersItem;