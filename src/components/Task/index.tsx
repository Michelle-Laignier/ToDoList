import { View, Text } from "react-native"
import { styles } from "./styles"
import { ButtonRemove } from "../ButtonRemove";
import { Checkbox } from "../Checkbox";

type TaskProps = {
  taskName: string,
  onRemove: () => void,
  checked: boolean,
  onToggleCheck: () => void,
}

export function Task({ taskName, onRemove, checked, onToggleCheck }: TaskProps) {
  return(
    <View style={styles.container}>
      <Checkbox checked={checked} onPress={onToggleCheck} />

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

      <ButtonRemove/>
    </View>
  )
}