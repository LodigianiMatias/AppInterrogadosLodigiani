import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Bungee',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 5,
        color: colors.text,
        textShadowColor: 'shadowText', 
        textShadowOffset: {width: 3, height: 3}, textShadowRadius: 5,
    },
})