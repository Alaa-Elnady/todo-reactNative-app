import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "40%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    width: "90%",
    marginTop: 20,
  },
  todoItem: {
    padding: 10,
    marginVertical: 8,
    borderRadius: 15,
    // borderLeftColor: "#000",
    // borderLeftWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },

  // MARK: TodoDetails Styles
  todoDetailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  todoDetailsDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  todoDetailsStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  todoDetailsStatusText: {
    fontSize: 16,
    color: "#333",
  },
  backButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
});
