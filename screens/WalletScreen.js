import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButon from "../components/PrimaryButon";
import { useNavigation } from "@react-navigation/native";

const WalletScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingHorizontal: 15, paddingBottom: 20 }}>
      <Header title="Wallet" />
      <View
        style={{
          height: "94%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        <View>
          <ImageBackground
            source={require("../assets/images/dashboard.png")}
            style={{
              height: 125,
              borderRadius: 20,
              overflow: "hidden",
              justifyContent: "space-between",
              padding: 20,
            }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Image
                  source={require("../assets/images/peapay-logo.png")}
                  style={{
                    height: 25,
                    width: 62,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={require("../assets/images/cclogo.png")}
                  style={{
                    height: 25,
                    width: 45,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontWeight: 400,
                    fontSize: 25,
                    color: "#004445",
                    lineHeight: 25,
                  }}>
                  KES 700, 000.77
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/bgDark.png")}
            style={{
              marginTop: 20,
              height: 125,
              borderRadius: 20,
              overflow: "hidden",
              justifyContent: "space-between",
              padding: 20,
              backgroundColor: "#00A1A4",
            }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Image
                  source={require("../assets/images/peapay-logo.png")}
                  style={{
                    height: 25,
                    width: 62,
                  }}
                  resizeMode="contain"
                />
                <Image
                  source={require("../assets/images/cclogo.png")}
                  style={{
                    height: 25,
                    width: 45,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontWeight: 400,
                    fontSize: 25,
                    color: "#fff",
                    lineHeight: 25,
                  }}>
                  KES 3000{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <PrimaryButon title="Add Card" />
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;
