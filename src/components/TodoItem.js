import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ todo }) => {
  return (
    <TouchableOpacity style={styles.todoItem}>
      <View>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <FontAwesome name="trash" size={20} color="red" />
        <FontAwesome name="check-circle" size={20} color="green" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
