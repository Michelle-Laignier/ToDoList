import { StyleSheet } from "react-native";
import { colorsBg, colorsProduct } from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsBg.gray600,
    height: "100%",
    padding: 30,
  },

  titleDiv:{
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 50,
  },

  textOne: {
    color: colorsProduct.blue,
    fontSize: 35,
    fontWeight: "bold",
  },

  textTwo: {
    color: colorsProduct.purpleDark,
    fontSize: 35,
    fontWeight: "bold",
  },

  addNewToDoDiv: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginBottom: 50,
  },



  // Tasks:
  tasksDiv:{},

  tasksCreatedAndDoneDiv: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  // Tasks created:
  tasksCreated: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },

  tasksCreatedText: {
    color: colorsProduct.blue,
    fontSize: 15,
    fontWeight: "bold",
  },

  tasksCreatedNumber: {
    borderRadius: 50,
    backgroundColor: colorsBg.gray400,
    color: colorsBg.gray200,
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  // Tasks Done:
  tasksDone: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },

  tasksDoneText: {
    color: colorsProduct.purple,
    fontSize: 15,
    fontWeight: "bold",
  },

  tasksDoneNumber: {
    borderRadius: 50,
    backgroundColor: colorsBg.gray400,
    color: colorsBg.gray200,
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
})