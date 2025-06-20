import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const Todos = [
  {
    id: 1,
    status: "Pending",
    title: "Implement Task1",
    description:
      "Implement the requirements of first react native course task.",
  },
  {
    id: 2,
    status: "Pending",
    title: "Study Lec1",
    description: "Study well the first react native course Lecture.",
  },
  {
    id: 3,
    status: "Pending",
    title: "Submit Task1",
    description: "Submit the solution of the first react native course task.",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={{ fontSize: 35, fontWeight: "bold", marginVertical: 19 }}>
        TODO APP
      </Text>

      {/* Text Inputs */}
      <TextInput placeholder="Enter title" style={styles.input} />
      <TextInput placeholder="Enter description" style={styles.input} />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7}>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>

      {/* Divider Line */}
      <View style={styles.dividerLine}></View>

      {/* Filtering Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn} activeOpacity={0.7}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Display Todos Using FlatList */}
      <View style={styles.todosContainer}>
        <FlatList
          data={Todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.todoItem}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
