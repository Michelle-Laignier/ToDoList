import { View, TouchableOpacity, Text, Image } from "react-native"
import { styles } from "./styles"

export function ButtonRemove() {
  return(
    <View>
      <TouchableOpacity style={styles.button} >
        <Image
          style={styles.img}
          source={require("../../../assets/trashCan.png")} 
        />
      </TouchableOpacity>
    </View>
  )
}