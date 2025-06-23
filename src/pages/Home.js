import { useEffect } from "react";
import { Text, View } from "react-native";
import Todos from "../components/Todos";
import TodoForm from "../components/TodoForm";
import FilterTabs from "../components/FilterTabs";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../Redux/slices/todos.slice";
import { styles } from "../../styles";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch todos from Async Storage using redux
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={{ fontSize: 35, fontWeight: "bold", marginVertical: 19 }}>
        TODO APP
      </Text>

      {/* Inputs Form */}
      <TodoForm />

      {/* FilterTabs */}
      <FilterTabs />

      {/* Display Todos */}
      <Todos />
    </View>
  );
};

export default Home;
