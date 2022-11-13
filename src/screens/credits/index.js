import { FlatList, Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadPlayer } from "../../game/actions";
import { PlayersItem } from "../../components";
import { styles } from "./styles";

const Credits = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players)

  useEffect(() => {
    dispatch(LoadPlayer());
  }, [dispatch]);

  const renderItem = (item) => <PlayersItem {...item} />;
  
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
      data={players}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default Credits;
