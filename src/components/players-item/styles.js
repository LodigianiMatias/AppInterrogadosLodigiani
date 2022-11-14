import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 30,
  },
  container: {
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  info: {
    marginHorizontal: 5,
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  infoTitle:{
    fontFamily: 'Bungee',
    fontSize: 20,
  }
});