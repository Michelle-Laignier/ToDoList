import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Task } from "../../components/Task"
import { useState } from "react"

export function Home() {
  const [isChecked, setIsChecked] = useState<{ [key: string]: boolean }>({})
  const [isFocused, setIsFocused] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [inputTextContent, setInputTextContent] = useState("")
  const [items, setItems] = useState<string[]>([])

  const completedTasks = Object.values(isChecked).filter(value => value).length

  function handleToggleCheck(item: string) {
    setIsChecked((prevState) => ({
      ...prevState,
      [item]: !prevState[item]
    }))
  }

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

  function handleRemoveItem(task: string) {
    Alert.alert(`Remover "${task}"?`, "",
      [
        {
          text: "Sim",
          onPress: () => {
            setItems(prevState => prevState.filter(items => items !== task))
            setIsChecked(prevState => {
              const newState = {...prevState}
              delete newState[task]
              return newState
            }) // fixed: if a checked task is removed, it'll update the completedTasks number
          }
        },
        {
          text: "Não",
          style: "destructive",
        }
      ]
    )
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
              {items.length}
            </Text>
          </View>

          <View style={styles.tasksDone}>
            <Text style={styles.tasksDoneText}>
              Concluídas
            </Text>
            <Text style={styles.tasksDoneNumber}>
              {completedTasks}
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
              onRemove={() => handleRemoveItem(item)}
              checked={isChecked[item] || false}
              onToggleCheck={() => handleToggleCheck(item)}
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