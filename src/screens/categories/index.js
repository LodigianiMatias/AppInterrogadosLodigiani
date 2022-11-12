import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import { selectCategory } from "../../game/actions";
import { styles } from "./styles";

const Categories = ({ navigation }) => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories)
    const contador = useSelector((state) => state.number.numero)

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
        }
    }, []);


    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Question', { name: item.question });
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Elija su categoria!</Text>
            <Text> Contador de respuestas correctas: {contador}</Text>
            {<FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />}
        </View>
    )
};

export default Categories;