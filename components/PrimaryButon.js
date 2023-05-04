import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PrimaryButon = ({ title }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#004c4d",
        height: 56,
        width: "100%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          textAlign: "center",
          color: "#fff",
          fontWeight: "bold",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButon;
