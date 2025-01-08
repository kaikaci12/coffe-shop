import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, Text, View, Image, Pressable } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.primaryBlackHex }}
      className="flex-1 bg-black"
    >
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../assets/app_images/avatar.png")}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-white text-xl mt-5">Homescreen</Text>
        <Pressable>CLick mee</Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
