import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const QuestionItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{item.question}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuestionItem;