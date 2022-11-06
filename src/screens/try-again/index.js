import { Button, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes";
import { styles } from "./styles"

const TryAgain = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Has perdido!</Text>
            <Button 
            color={colors.black}
            title="Volver a empezar"
            style={styles.button}
            onPress={() => navigation.navigate("MainMenu")}
            />
        </View>
    )
}

export default TryAgain;