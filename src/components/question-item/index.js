import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const QuestionItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentContainer}>
                <Text style={styles.title}>{item.question}</Text>
            </TouchableOpacity>
            <View>
            <Image source={{ uri: item.img}} style={styles.image}/>
            </View>
            <TouchableOpacity style={styles.answersContainer}>
                    <Text style={styles.correct}>◉{item.correct}</Text>
                    <Text style={styles.wrong}>◉{item.wrong}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default QuestionItem;