import { Alert, Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Perder, saveRecord } from "../../game/actions";
import { useDispatch, useSelector } from "react-redux";

import { ImageSelector } from "../../components";
import React from "react";
import { styles } from "./styles"
import { useState } from "react";

const EndGame = ({navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const onHandleChange = (text) => {
        setTitle(text);
    }

    const onHandleSubmit = () => {
        if(title == '' || image == '') {
            return;
        } else {
        dispatch(Perder())
        dispatch(saveRecord(title, image));
        navigation.navigate("MainMenu")
    }
    };

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
              value={title}
            />
            <ImageSelector onImage={onHandlerImage}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={onHandleSubmit}>
                <Text style={styles.buttonText}>Guardar y volver al menú</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default EndGame;