import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 40,
        marginBottom: 150,
        marginTop: 100,
        fontFamily: 'Bungee',
        color: colors.text,
        textShadowColor: 'shadowText',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 5,
    },
    button: {
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 2, height: 2},
        shadowRadius: 5,
        elevation: 4,
        padding: 10,
    }
})