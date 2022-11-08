import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { QuestionItem } from "../../components";
import { filteredQuestions } from "../../game/actions";
import { generateRandomNumberBetween } from "../../utils/functions";
import { styles } from "../categories/styles";

const Question = ({ navigation }) => {
    const dispatch = useDispatch();

    const idRound = generateRandomNumberBetween(1, 16);

    const selectedCategory = useSelector((state) => state.category.selected);

    const questionsFiltered = useSelector((state) => state.questions.filteredQuestions);

    const questionFiltered = questionsFiltered.filter(q => q.idQuestion == idRound )

    useEffect(() => {
        dispatch(filteredQuestions(selectedCategory.id))
    }, []);

    const renderItem = ({ item }) => <QuestionItem item={item}/>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Pregunta!</Text>
            <FlatList 
            style={styles.flatlist}
            data={questionFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
        </View>
    )
};

export default Question;