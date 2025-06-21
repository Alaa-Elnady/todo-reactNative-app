import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "../../styles";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <TouchableOpacity style={styles.todoItem}>
      <View>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
        <FontAwesome name="check-circle" size={20} color="green" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
