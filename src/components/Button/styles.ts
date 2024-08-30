import { StyleSheet } from "react-native"
import { colorsBg, colorsProduct } from "../../styles/theme"

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colorsProduct.blueDark,
    borderRadius: 6,
    borderColor: colorsBg.gray700,
    borderWidth: 1,
    color: colorsBg.gray100,
    paddingVertical: 15,
    paddingHorizontal: 22,
  },

  buttonText: {
    color: colorsBg.gray100,
    fontSize: 24,
  },
})