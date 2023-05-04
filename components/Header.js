import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Header = ({ title }) => {
  return (
    <View
      style={{
        paddingVertical: 20,
        position: "relative",
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          left: 0,
          height: 42,
          width: 42,
          borderRadius: 50,
          backgroundColor: "#f4f4f4",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          lineHeight: 18,
          textAlign: "center",
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
