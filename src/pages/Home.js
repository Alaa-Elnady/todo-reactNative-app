import { useState, useEffect } from "react";
import { styles } from "../../styles";
import Todos from "../components/Todos";
import { PATHS } from "../routes/Router";
import TodoForm from "../components/TodoForm";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const Home = () => {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);

  // Load todos from storage
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Failed to load todos", error);
      }
    };

    loadTodos();
  }, []);

  // Save todos to storage whenever they change
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error("Failed to save todos", error);
      }
    };

    saveTodos();
  }, [todos]);

  // MARK: Add Todo
  const handleAddTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now() };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // MARK: Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={{ fontSize: 35, fontWeight: "bold", marginVertical: 19 }}>
        TODO APP
      </Text>

      {/* Inputs Form */}
      <TodoForm onSubmit={(todo) => handleAddTodo(todo)} />

      {/* Divider Line */}
      <View style={styles.dividerLine} />

      {/* Filtering Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn} activeOpacity={0.7}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => navigate(PATHS.DETAILS, { name: "Ahmed", age: 90 })}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {/* Display Todos Using FlatList */}
      {todos.length > 0 && (
        <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
      )}
    </View>
  );
};

export default Home;
