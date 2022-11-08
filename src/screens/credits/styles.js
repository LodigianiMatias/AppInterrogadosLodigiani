import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Bungee',
        fontSize: 24,
        textShadowColor: colors.white, 
        textShadowOffset: {width: 2, height: 2}, textShadowRadius: 3,
        textAlign: 'center',
    }
})