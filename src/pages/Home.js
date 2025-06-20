import { useState } from "react";
import { styles } from "../../styles";
import Todos from "../components/Todos";
import { PATHS } from "../routes/Router";
import TodoForm from "../components/TodoForm";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const { navigate } = useNavigation();

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
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
      {todos.length > 0 && <Todos todos={todos} />}
    </View>
  );
};

export default Home;
