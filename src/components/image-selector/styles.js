import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.text,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
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
    fontSize: 18,      
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
},
});
