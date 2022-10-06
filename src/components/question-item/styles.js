import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Bungee',
    },
})