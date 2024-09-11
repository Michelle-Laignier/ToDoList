import { View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

type CheckboxProps = {
  checked: boolean,
  onPress: () => void,
}

export function Checkbox({ checked, onPress }: CheckboxProps) {
  return(
    <View>
      <BouncyCheckbox 
        fillColor="#5E60CE"
        iconStyle={{ borderColor: "#4EA8DE" }}
        innerIconStyle={{ borderWidth: 2 }}

        isChecked={checked}
        onPress={onPress} 
      />
    </View>
  )
}