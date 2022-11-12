import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { ImageSelector } from "../../components";
import React from "react";
import { styles } from "./styles"
import { useDispatch } from "react-redux";
import { useState } from "react";

const EndGame = ({navigation}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const onHandleChange = (text) => {
        setName(text);
    }

    // const onHandleSubmit = () => {
    //     dispatch(saveRecord(name , image));
    //     navigation.navigate("MainMenu")
    // };

    const onHandlerImage = (imageUri) => {
        setImage(imageUri);
      };
      
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Felicidades ¡Has ganado!</Text>
            </View>
            <Text>¿Tu nombre?</Text>
            <TextInput
              style={styles.input}
              placerholder="Tu nombre"
              onChangeText={onHandleChange}
              value={name}
            />
            <ImageSelector onImage={onHandlerImage}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("MainMenu")}>
                <Text style={styles.buttonText}>Guardar y volver al menú</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default EndGame;