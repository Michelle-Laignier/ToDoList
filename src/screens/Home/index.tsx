import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Task } from "../../components/Task"
import { useState } from "react"

export function Home() {
  const [isChecked, setIsChecked] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [inputTextContent, setInputTextContent] = useState("")
  const [items, setItems] = useState<string[]>([])

  const toggleCheck = () => setIsChecked((prevState) => !prevState)

  function handleAddItemToList() {
    if(inputTextContent === "") {
      return
    }
    
    if(items.includes(inputTextContent)) {
      Alert.alert(`"${inputTextContent}" já está na lista`)
      return setInputTextContent("")
    }

    setItems(prevState => [...prevState, inputTextContent])
    setInputTextContent("")
  }

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
          value={inputTextContent}
          onChangeText={setInputTextContent}
        />

        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={handleAddItemToList}
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
        
        <FlatList 
          data={items}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task 
              key={item}
              taskName={item}
              onRemove={() => console.log("remove1")}
              checked={isChecked}
              onToggleCheck={toggleCheck}
              onPress={() => console.log()}
            />
          )}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Lista vazia
            </Text>
          )}
        />

      </View>
    </View>
  )
}