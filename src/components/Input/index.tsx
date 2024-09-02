import { View, TextInput } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

export function Input() {
  const [isFocused, setIsFocused] = useState(false)

  return(
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
    </View>
  )
}