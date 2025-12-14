import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#2563eb" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#2563eb"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="complain"
        options={{
          title: "Complain",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
