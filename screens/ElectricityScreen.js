import { View, Text, Image, TextInput, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const ElectricityScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#f4f4f4" }}>
      {/* Header  */}
      <Header title="Electricity" />
      <View
        style={{
          marginVertical: 20,
          flexDirection: "column",
          alignItems: "center",
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "rgba(255, 211, 0, 0.12)",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Ionicons name="flash" size={70} color="#ffd300" />
        </View>
      </View>
      {/* Intro Text  */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Text style={{ color: "#004445", fontSize: 20, paddingVertical: 15 }}>
          Pay Electricity Bill
        </Text>
        {step == 2 && (
          <Text
            style={{
              fontSize: 14,
              color: "#424242",
              textAlign: "center",
            }}>
            Pay electricity bills safely, conveniently & easily. You can pay
            anytime and anywhere!
          </Text>
        )}
      </View>

      {/* Inputs  */}
      {step == 1 && (
        <ScrollView style={{ marginVertical: 50 }}>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 14,
                color: "#a2a2a7",
              }}>
              Amount(KES)
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                height: 50,
                fontSize: 18,
                color: "#004445",
                borderColor: "transparent",
                borderBottomColor: "#f4f4f4",
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 14, color: "#a2a2a7" }}>
              Account Number
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                height: 50,
                fontSize: 18,
                color: "#004445",
                borderColor: "transparent",
                borderBottomColor: "#f4f4f4",
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setStep(2)}
            style={{
              backgroundColor: "#004c4d",
              height: 56,
              width: "100%",
              borderRadius: 16,
              justifyContent: "center",
              marginTop: 30,
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
              Continue
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {step == 2 && (
        <>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: 312,
              borderRadius: "24",
              marginVertical: 20,
              padding: 20,
            }}>
            <Image
              sourc={require("../assets/images/kplc.png")}
              style={{
                height: 80,
                width: 80,
                backgroundColor: "red",
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
            <View
              style={{
                borderWidth: 1,
                borderColor: "#eeeeee",
                marginVertical: 20,
              }}></View>
            <View
              syle={{
                backgroundColor: "red",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Text>Bill (KES)</Text>
              <Text>700</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setStep(3)}
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
              Continue Payment
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default ElectricityScreen;
