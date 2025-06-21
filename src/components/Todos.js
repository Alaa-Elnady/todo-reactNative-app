import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <FlatList
      data={todos}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onDelete={() => onDeleteTodo(item.id)}
          onToggleComplete={() => onToggleComplete(item.id)}
        />
      )}
    />
  );
};

export default Todos;
