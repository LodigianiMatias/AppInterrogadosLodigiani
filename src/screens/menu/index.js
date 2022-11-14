import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../constants/themes";
import {styles} from "./styles";

const MainMenu = ({navigation}) => {

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <Text style={styles.title}>Interrogados</Text>
            <Text style={styles.text}>El juego consiste en responder preguntas al estilo de la clásica trivia, obtendrás la victoria si logras 5 respuestas correctas. Si respondes incorrectamente se reiniciará la partida. ¡Buena suerte!</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Categories")}>
                <Text style={styles.buttonText}>¡Comenzar a jugar!</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default MainMenu;