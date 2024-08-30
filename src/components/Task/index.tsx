import { View, Text } from "react-native"
import { styles } from "./styles"
import { ButtonRemove } from "../ButtonRemove";

type TaskProps = {
  taskName: string,
  onRemove: () => void,
  checked: () => void,
}

export function Task({ taskName, onRemove, checked }: TaskProps) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {taskName}
      </Text>

      <ButtonRemove/>
    </View>
  )
}