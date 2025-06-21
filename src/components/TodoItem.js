import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => navigation.navigate(PATHS.DETAILS, { todo })}
    >
      <View>
        <Text
          style={[
            styles.todoTitle,
            { textDecorationLine: todo.completed ? "line-through" : "none" },
          ]}
        >
          {todo.title}
        </Text>
        <Text style={todo.completed ? { color: "#8E8E93" } : null}>
          {todo.description}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onToggleComplete(todo.id)}>
          <FontAwesome
            name={todo.completed ? "check-circle" : "circle-o"}
            size={20}
            color={todo.completed ? "green" : "#8E8E93"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
