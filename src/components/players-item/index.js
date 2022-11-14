import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const PlayersItem = ({ item }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>¡{item.title} ganó la partida!</Text>
      </View>
      </View>
    </View>
  );
};

export default PlayersItem;