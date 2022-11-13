import { FlatList, Image, Text, View } from "react-native";

import { PlayersItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Credits = () => {
  const renderItem = ({ item }) => <PlayersItem {...item} />;

  const ListEmptyComponent = () => (
    <View style={styles.content}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Lista de ganadores</Text>
      </View>
      <View style={styles.emptyContainer}>
        <Image
          source={{ uri: "https://i.ibb.co/LPw3J38/icono.png" }}
          style={styles.img}
        />
        <Text style={styles.emptyText}>No tienes ganadores aún</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={null}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default Credits;
