import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

export function Button() {
  const [isPressed, setIsPressed] = useState(false)

  return(
    <View>
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}