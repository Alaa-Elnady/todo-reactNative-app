import { Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "../../styles";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };
    onSubmit(todo);
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
