import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 150,
        marginTop: 40,
        fontFamily: 'Bungee',
        color: colors.text,
        textShadowColor: 'shadowText', 
        textShadowOffset: {width: 3, height: 3}, textShadowRadius: 5,
    },
    text: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        textShadowColor: 'white', 
        textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10,
        marginBottom: 70,
    },
    button: {
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        padding: 10,
    }
})