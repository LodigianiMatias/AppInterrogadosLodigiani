import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 30,
    },
    title: {
        marginTop: 100,
        marginBottom: 70,
        color: colors.text,
        fontFamily: 'Bungee',
        fontSize: 35,
        textShadowColor: colors.black, 
        textShadowOffset: {width: 2, height: 2}, textShadowRadius: 3,
        textAlign: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        textAlign: "center",
        color: colors.black,
        fontWeight: "bold",
    },
    img: {
        width: 300,
        height: 300,
    }
})