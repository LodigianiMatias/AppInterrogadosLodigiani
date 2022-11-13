import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 50,
        fontFamily: 'Bungee',
        color: colors.text,
        textShadowColor: 'shadowText',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 5,
    },
    text: {
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        fontSize: 22,
        marginHorizontal: 30,
        marginBottom: 30,
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        backgroundColor: colors.text,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250,
    }
})