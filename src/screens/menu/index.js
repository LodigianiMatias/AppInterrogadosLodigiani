import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from "./styles";

const MainMenu = ({navigation}) => {
    
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <Text style={styles.title}>Interrogados</Text>
            <Text style={styles.text}>El juego consiste en responder preguntas al estilo trivia, ganarás si logras 3 respuestas correctas. Si respondes incorrectamente se reiniciará la partida</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Categories")}>
                <Text style={styles.buttonText}>¡Comenzar a jugar!</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default MainMenu;