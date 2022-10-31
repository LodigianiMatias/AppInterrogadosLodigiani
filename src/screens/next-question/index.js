import { Button, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes";
import { styles } from "./styles"

const NextQuestion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Excelente!</Text>
            <Button 
            color={colors.black}
            title="Siguiente pregunta"
            style={styles.button}
            onPress={() => navigation.navigate("Categories")}
            />
        </View>
    )
}

export default NextQuestion;