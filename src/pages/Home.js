import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Todos from "../components/Todos";
import TodoForm from "../components/TodoForm";
import { PATHS } from "../routes/Router";
import { styles } from "../../styles";

const STORAGE_KEY = "@todos";

const Home = () => {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All"); // Default to All

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
    const newTodo = { ...todo, id: Date.now().toString(), completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // MARK: Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // MARK: Toggle Complete
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter todos based on active filter
  const filteredTodos = () => {
    if (filter === "Completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "In Progress") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos; // "All" filter
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
        <TouchableOpacity
          style={filter === "All" ? styles.activeFilterBtn : styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => setFilter("All")}
        >
          <Text
            style={
              filter === "All" ? styles.activeFilterText : styles.filterText
            }
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            filter === "Completed" ? styles.activeFilterBtn : styles.filterBtn
          }
          activeOpacity={0.7}
          onPress={() => setFilter("Completed")}
        >
          <Text
            style={
              filter === "Completed"
                ? styles.activeFilterText
                : styles.filterText
            }
          >
            Completed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            filter === "In Progress" ? styles.activeFilterBtn : styles.filterBtn
          }
          activeOpacity={0.7}
          onPress={() => setFilter("In Progress")}
        >
          <Text
            style={
              filter === "In Progress"
                ? styles.activeFilterText
                : styles.filterText
            }
          >
            In Progress
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Todos Using FlatList */}
      {filteredTodos().length > 0 ? (
        <Todos
          todos={filteredTodos()}
          onDeleteTodo={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
      ) : (
        <Text style={styles.noTodosText}>No tasks available</Text>
      )}
    </View>
  );
};

export default Home;
