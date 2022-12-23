import { View, Text, Pressable } from "react-native";
import React from "react";
export default function Button({ backgroundColor, title, action }) {
  return (
    <Pressable style={{ backgroundColor: backgroundColor }} onPress={action}>
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
}
