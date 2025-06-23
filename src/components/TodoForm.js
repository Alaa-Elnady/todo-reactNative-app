import { Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "../../styles";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/slices/todos.slice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // To update store
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };

    // Add todo using redux
    dispatch(addTodo(todo));

    setTitle("");
    setDescription("");
  };

  return (
    <>
      {/* Text Inputs */}
      <TextInput
        value={title}
        style={styles.input}
        placeholder="Enter title"
        onChangeText={(val) => setTitle(val)}
      />

      <TextInput
        value={description}
        style={styles.input}
        placeholder="Enter description"
        onChangeText={(val) => setDescription(val)}
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleSubmit}
        activeOpacity={0.7}
      >
        <Text style={{ ...styles.text, fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
