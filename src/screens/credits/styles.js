import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    textContainer: {
        marginHorizontal: 30,
    },
    title: {
        marginTop: 100,
        marginBottom: 30,
        color: colors.text,
        fontFamily: 'Bungee',
        fontSize: 35,
        textShadowColor: colors.black, 
        textShadowOffset: {width: 2, height: 2}, textShadowRadius: 3,
        textAlign: 'center',
    }
})