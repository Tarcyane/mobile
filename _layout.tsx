import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#4A90E2", 
        headerStyle: {
          backgroundColor: '#2C3E50',
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: "#4A90E2", 
        tabBarInactiveTintColor: "#BDC3C7", 
        tabBarStyle: {
          backgroundColor: '#34495E', 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profissional"
        options={{
          title: "Profissional",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "hammer" : "hammer-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}