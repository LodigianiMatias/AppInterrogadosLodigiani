import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes";
import {styles} from "./styles";

const MainMenu = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interrogados</Text>
            <Text style={styles.text}>El juego consiste en responder preguntas al estilo trivia, ganarás si logras 3 respuestas correctas. Si respondes incorrectamente se reiniciará la partida</Text>
            <Button
            color={colors.black}
            title="Comenzar el juego!"
            style={styles.button}
            onPress={() => navigation.navigate("Categories")}
            >Comenzar Juego</Button>
        </View>
    )
}

export default MainMenu;