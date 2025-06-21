import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ todo }) => {
  return (
    <TouchableOpacity style={styles.todoItem}>
      <View>
        <Text style={styles.todoTitle}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Feather name="trash" size={20} color="red" />
        <AntDesign name="checkcircleo" size={20} color="green" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
