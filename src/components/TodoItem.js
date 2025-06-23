import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import { useDispatch } from "react-redux";
import { markAsCompleted, removeTodo } from "../Redux/slices/todos.slice";

const TodoItem = ({ todo }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.todoItem}
      activeOpacity={0.7}
      onPress={() => navigate(PATHS.DETAILS, { todo })}
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
        {/* Delete Icon */}
        <TouchableOpacity
          onPress={() => {
            dispatch(removeTodo(todo.id));
          }}
        >
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>

        {/* Mark as check Icon */}
        <TouchableOpacity onPress={() => dispatch(markAsCompleted(todo.id))}>
          <FontAwesome
            size={20}
            color={todo.completed ? "green" : "#8E8E93"}
            name={todo.completed ? "check-circle" : "circle-o"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
