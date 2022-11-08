import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Credits = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Gracias por jugar mi juego!</Text>
        </View>
    )
}

export default Credits;