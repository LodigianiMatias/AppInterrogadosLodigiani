import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 110,
    },
    contentContainer: {
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
    },
    title: {
        fontFamily: 'Bungee',
        color: colors.black,
        fontSize: 25,
        textShadowColor: colors.white, 
        textShadowOffset: {width: 1, height: 1}, textShadowRadius: 5,
    },
});