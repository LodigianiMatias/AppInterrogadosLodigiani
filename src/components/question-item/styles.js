import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    contentContainer: {
        flex: 1,
        marginTop: 30,
        
    },
    title: {
        fontSize: 30,
        fontFamily: 'Bungee',
        textAlign: 'center',
    },
    answersContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    correct: {
        fontFamily: 'Bungee',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
    },
    wrong: {
        fontFamily: 'Bungee',
        fontSize: 20,
        marginBottom: 10,
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
    },
    image:
    {
        width:250,
        height:250,
    },
})