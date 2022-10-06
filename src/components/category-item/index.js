import  React from 'react' ;
import { View, Text, TouchableOpacity } from 'react-native' ;
import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={{ ...styles.contentContainer, backgroundColor: item.color }}
                // onPress={() => onSelected(item)}>
                onPress={(()=> null)}
                >
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}
export default CategoryItem;