import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const TodoDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { todo } = route.params;
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || "");

  const handleSave = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      let todos = storedTodos ? JSON.parse(storedTodos) : [];
      todos = todos.map((t) =>
        t.id === todo.id ? { ...t, title, description } : t
      );
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      navigation.goBack();
    } catch (error) {
      console.error("Failed to save todo", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.todoDetailsTitle, styles.input]}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.todoDetailsDescription, styles.input]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <View style={styles.todoDetailsStatus}>
        <FontAwesome
          name={todo.completed ? "check-circle" : "circle-o"}
          size={24}
          color={todo.completed ? "green" : "#8E8E93"}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.todoDetailsStatusText}>
          {todo.completed ? "Completed" : "In Progress"}
        </Text>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.backButtonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoDetails;
