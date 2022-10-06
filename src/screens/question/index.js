import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { questions } from "../../constants/data";

const Question = ({ navigation, route }) => {

    const { questionId } = route.params;
    const question = questions.find(question => question.id === questionId);
    return (
        <View style={styles.container}>
            <Image source={question.img} style={styles.image}/>
            <Text>id: {question.question}</Text>
            <Text>{question.correct}</Text>
            <Text>{question.wrong}</Text>
        </View>
    )
};

export default Question;