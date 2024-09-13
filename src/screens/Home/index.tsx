import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Task } from "../../components/Task"
import { useState } from "react"

export function Home() {
  const [isChecked, setIsChecked] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const toggleCheck = () => setIsChecked((prevState) => !prevState)

  return(
    <View style={styles.container}>

      <View style={styles.titleDiv}>
        <Text style={styles.textOne}>Lista d</Text>
        <Text style={styles.textTwo}>e Tarefas</Text>
      </View>

      <View style={styles.addNewToDoDiv}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

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

      <View style={styles.tasksDiv}>
        <View style={styles.tasksCreatedAndDoneDiv}>
          <View style={styles.tasksCreated}>
            <Text style={styles.tasksCreatedText}>
              Criadas
            </Text>
            <Text style={styles.tasksCreatedNumber}>
              5
            </Text>
          </View>

          <View style={styles.tasksDone}>
            <Text style={styles.tasksDoneText}>
              Concluídas
            </Text>
            <Text style={styles.tasksDoneNumber}>
              2
            </Text>
          </View>
        </View>
        
        <Task 
          taskName="Exemplo de tarefa 1" 
          onRemove={() => console.log("remove1")}
          checked={isChecked}
          onToggleCheck={toggleCheck}
          onPress={() => console.log()}
        />

        <Task
          taskName="Exemplo de tarefa 2" 
          onRemove={() => console.log("remove1")}
          checked={isChecked}
          onToggleCheck={toggleCheck}
          onPress={() => console.log()}
        />

        <Task 
          taskName="Exemplo de tarefa 3" 
          onRemove={() => console.log("remove1")}
          checked={isChecked}
          onToggleCheck={toggleCheck}
          onPress={() => console.log()}
        />
      </View>
      
    </View>
  )
}