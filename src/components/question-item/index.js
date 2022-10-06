import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const QuestionItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentContainer}>
                <Text style={styles.title}>{item.question}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answersContainer}>
                    <Text style={styles.correct}>◉{item.correct}</Text>
                    <Text style={styles.wrong}>◉{item.wrong}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default QuestionItem;