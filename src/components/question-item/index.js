import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const QuestionItem = ({ item, navigation}) => {

    const onCorrect = () => {
        navigation.navigate("Categories");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentContainer}>
                <Text style={styles.title}>{item.question}</Text>
            </TouchableOpacity>
            <View>
            <Image source={{ uri: item.img}} style={styles.image}/>
            </View>
            <TouchableOpacity style={styles.answersContainer} onPress={onCorrect}>
                    <Text style={styles.correct}>◉ {item.correct}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answersContainer} onPress={null}>
                    <Text style={styles.wrong}>◉ {item.wrong}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default QuestionItem;