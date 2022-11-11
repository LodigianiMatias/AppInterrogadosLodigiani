import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        margin: 20,
    },
    input: {
        borderBottomColor: colors.text,
        borderBottomWidth: 3,
        marginBottom: 20,
        padding: 5,
      },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 50,
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
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        backgroundColor: colors.text,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,      
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
})