import { Button, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes";
import { styles } from "./styles"

const NextQuestion = ({navigation}) => {

    const onCorrect = () => {
        navigation.navigate("Categories")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Excelente!</Text>
            <Text style={styles.text}>¿Listo para la siguiente pregunta?</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={onCorrect}>
                <Text style={styles.buttonText}>Siguiente pregunta</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NextQuestion;