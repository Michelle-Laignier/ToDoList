import { View, TextInput } from "react-native"
import { styles } from "./styles"

export function Input() {
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
    </View>
  )
}