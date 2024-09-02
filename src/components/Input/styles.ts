import { StyleSheet } from "react-native";
import { colorsBg, colorsProduct } from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsBg.gray600,
    flex: 1,
  },

  input:{
    backgroundColor: colorsBg.gray500,
    borderColor: colorsBg.gray700,
    borderRadius: 6,
    borderWidth: 1,
    color: colorsBg.gray100,
    fontSize: 16,
    padding: 20,
  },

  inputFocused: {
    borderColor: colorsProduct.purpleDark,
    borderWidth: 1.5,
  },
})