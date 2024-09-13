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

  checkbox: {
    width: "0%",
  },

  text:{
    color: colorsBg.gray100,
    fontSize: 16,
    paddingVertical: 15,
    textAlign: "center",
    maxWidth: "50%",
  },

  button: {
    paddingVertical: 10,
  },

  img: {
    height: 50,
    width: 50,
  },
})