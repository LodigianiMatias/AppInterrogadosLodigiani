import React, { useEffect } from "react";
import { FlatList } from "react-native";
// import { styles } from "./styles";
// import { questions } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { QuestionItem } from "../../components";

const Question = ({ navigation }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selected);

    const questionsFiltered = useSelector((state) => state.questions.filteredQuestion);

    // useEffect(() => {
    //     dispatch(filteredQuestion(selectedCategory.id))
    // }, []);

    const renderItem = ({ item }) => <QuestionItem item={item}/>

    return (
        <FlatList 
            data={questionsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
};

export default Question;