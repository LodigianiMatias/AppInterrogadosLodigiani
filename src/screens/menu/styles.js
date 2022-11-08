import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    scroll: {
        backgroundColor: colors.background,
    },
    container: {
        flex:1,
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
        textShadowColor: colors.white, 
        textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10,
        marginBottom: 70,
    },
    button: {
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.26,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        padding: 10,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.text,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,      
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
})