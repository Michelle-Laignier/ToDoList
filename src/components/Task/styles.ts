import { StyleSheet } from "react-native";
import { colorsBg, colorsProduct } from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: colorsBg.gray500,
    borderColor: colorsBg.gray300,
    borderRadius: 8,
    borderWidth: 1,

    marginBottom: 10,

    paddingHorizontal: 15,
    paddingVertical: 1,
  },

  text:{
    color: colorsBg.gray100,
    fontSize: 16,
    paddingVertical: 15,
    maxWidth: "90%",
  },
})