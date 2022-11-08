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
        marginTop: 20,
        marginBottom: 20,
        
    },
    title: {
        fontSize: 28,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',

    },
    answersContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.text,
        borderRadius: 10,
    },
    correct: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,      
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
        
    },
    wrong: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    image:
    {
        width:250,
        height:250,
        marginBottom: 20,
    },
})