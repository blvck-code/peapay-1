import { Image, View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";

const profileHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      {/* Profile  */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/profile.png")}
          style={{ height: 50, width: 50 }}
          resizeMode="cover"
        />
        <Text style={{ color: "black", fontSize: 18, marginLeft: 10 }}>
          Hello Mjasiri
        </Text>
      </View>
      {/* Search Icon */}
      <TouchableOpacity
        style={{
          height: 42,
          width: 42,
          backgroundColor: "#f4f4f4",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Ionicons name="search" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 22, backgroundColor: "#fff" }}>
      {profileHeader()}
      <View>
        {/* Dashboard */}
        <ImageBackground
          source={require("../assets/images/dashboard.png")}
          style={{
            marginTop: 50,
            height: 219,
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
              <Text style={{ fontSize: 25, color: "#004445", lineHeight: 25 }}>
                KES 700, 000.77
              </Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  height: 54,
                  width: 54,
                  backgroundColor: "#004C4D",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  marginVertical: 5,
                }}>
                <Ionicons name="add-outline" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                }}>
                Add
              </Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Wallet")}
                style={{
                  height: 54,
                  width: 54,
                  backgroundColor: "#004C4D",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  marginVertical: 5,
                }}>
                <Ionicons name="wallet-outline" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                }}>
                Wallet
              </Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Transfer")}
                style={{
                  height: 54,
                  width: 54,
                  backgroundColor: "#004C4D",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  marginVertical: 10,
                }}>
                <Ionicons name="arrow-up-outline" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 13,
                }}>
                Transfer
              </Text>
            </View>
          </View>
        </ImageBackground>
        {/* Services */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 30,
          }}>
          <Text style={{ fontSize: 16, lineHeight: 18, color: "#004445" }}>
            Services
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, lineHeight: 14, color: "#00DF94" }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {/* Icons  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}>
          <IconButton
            onPress={() => navigation.navigate("Home")}
            icon="water-outline"
            name="Water"
          />
          <IconButton
            onPress={() => navigation.navigate("Electricity")}
            icon="flash-outline"
            name="Electricity"
          />
          <IconButton
            onPress={() => navigation.navigate("Home")}
            icon="globe-outline"
            name="Internet"
          />
          <IconButton
            onPress={() => navigation.navigate("Home")}
            icon="call-outline"
            name="Airtime"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}>
          <IconButton icon="water-outline" name="Water" />
          <IconButton icon="flash-outline" name="Electricity" />
          <IconButton icon="globe-outline" name="Internet" />
          <IconButton icon="call-outline" name="Airtime" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
