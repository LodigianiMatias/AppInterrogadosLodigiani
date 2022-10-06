import React from "react";
import { FlatList, Text, View } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../game/actions";

const Categories = ({ navigation }) => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Question', { name: item.question });
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Elija su categoria!</Text>
            { <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> }
        </View>
    )
};

export default Categories;