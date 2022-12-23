import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./components/Button";
import TodoCard from "./components/TodoCard";
export default function App() {
  const [count, setCount] = useState(0);
  const listOfIdiots = ["hamood", "ripu", "pratham"];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
    console.log("use effect");
  }, []);

  function toggleTodo(id) {
    console.log("pressed");
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 24 : 0,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            padding: 10,
            color: "#646FB0",
          }}
        >
          Todo
        </Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard action={toggleTodo} data={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
