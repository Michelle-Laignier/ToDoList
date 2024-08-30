import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export function Button() {

  return(
    <View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}