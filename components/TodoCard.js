import { View, Text, Pressable } from "react-native";
import React from "react";

export default function TodoCard({ data, action }) {
  return (
    <Pressable
      style={{
        backgroundColor: data.completed ? "#A7D489" : "#646FB0",
        margin: 10,
        padding: 10,
        borderRadius: 8,
      }}
      onPress={() => action(data.id)}
    >
      <Text style={{ color: "white" }}>{data.title}</Text>
    </Pressable>
  );
}
