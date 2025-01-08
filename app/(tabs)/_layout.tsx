import { Tabs } from "expo-router";
import React from "react";
import { BlurView } from "expo-blur";
import CustomIcon from "@/components/CustomIcon";
import { Colors } from "../../constants/Colors"; // Assuming COLORS are already defined
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Using custom hook for color scheme

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, // Hide tab bar when keyboard is visible
        tabBarShowLabel: false, // Hide tab label text
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? Colors.primaryGreyHex
              : Colors.primaryWhiteHex,
          borderTopWidth: 0,
          elevation: 5, // Shadow for better visibility
        },
        tabBarBackground: () => (
          <BlurView
            blurAmount={15} // Adjust blur intensity
            style={{ flex: 1 }} // Ensures the BlurView fills the container
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home" // Use the correct icon name from your icon set
              size={25} // Set the icon size
              color={
                focused ? Colors.primaryOrangeHex : Colors.primaryLightGreyHex
              } // Change color based on focus state
            />
          ),
        }}
      />

      {/* Cart Screen */}
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="cart" // Ensure the icon name matches the one in your icon set
              size={25}
              color={
                focused ? Colors.primaryOrangeHex : Colors.primaryLightGreyHex
              }
            />
          ),
        }}
      />

      {/* Favorites Screen */}
      <Tabs.Screen
        name="Favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="like" // Ensure the icon name matches your custom icons
              size={25}
              color={
                focused ? Colors.primaryOrangeHex : Colors.primaryLightGreyHex
              }
            />
          ),
        }}
      />

      {/* Order History Screen */}
      <Tabs.Screen
        name="Orders"
        options={{
          title: "OrderHistory",
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="bell" // Icon for order history
              size={25}
              color={
                focused ? Colors.primaryOrangeHex : Colors.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
