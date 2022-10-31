import { Button, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes";
import { styles } from "./styles"

const EndGame = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Has ganado!</Text>
            <Button 
            color={colors.black}
            title="Volver al menu"
            style={styles.button}
            onPress={() => navigation.navigate("MainMenu")}
            />
        </View>
    )
}

export default EndGame;