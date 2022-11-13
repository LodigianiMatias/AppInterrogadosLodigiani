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
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  
});