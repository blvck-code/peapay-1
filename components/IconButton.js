import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <View
        style={{
          height: 65,
          width: 65,
          borderRadius: 10,
          backgroundColor: "#f6f6f6",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Ionicons name={icon} size={28} color="black" />
      </View>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 22,
          marginVertical: 10,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;
