import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: 50,
    },
    title: {
        fontFamily: 'Bungee',
        fontSize: 50,
        marginBottom: 5,
        marginTop:5,
        color: colors.text,
        textShadowColor: 'shadowText', 
        textShadowOffset: {width: 3, height: 3}, textShadowRadius: 5,
    },
})