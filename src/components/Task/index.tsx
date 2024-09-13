import { View, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import BouncyCheckbox from "react-native-bouncy-checkbox"

type TaskProps = {
  taskName: string,
  onRemove: () => void,
  checked: boolean,
  onPress: () => void,
  onToggleCheck: () => void,
}

export function Task({ taskName, onRemove, checked, onToggleCheck }: TaskProps) {
  return(
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        fillColor="#5E60CE"
        iconStyle={{ borderColor: "#4EA8DE" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={onToggleCheck}

        isChecked={checked}
      />

      <Text
        style={
          [
            styles.text, 
            { textDecorationLine: checked ? 'line-through' : 'none' }, 
            { color: checked ? '#808080' : '#F2F2F2' }
          ]
        }
      >
        {taskName}
      </Text>

      <TouchableOpacity style={styles.button} >
        <Image
          style={styles.img}
          source={require("../../../assets/trashCan.png")} 
        />
      </TouchableOpacity>
    </View>
  )
}