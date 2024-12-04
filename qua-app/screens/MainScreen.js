import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeNavigator from "../navigators/HomeNavigator";
import SearchNavigator from "../navigators/SearchNavigator";
import ShowNavigator from "../navigators/ShowNavigator";
import MyPageNavigator from "../navigators/MyPageNavigator";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          if (route.name === "tab1") {
            return (
              <MaterialIcons
                name={"feed"}
                size={size}
                color={focused ? "#5565F2" : "gray"}
              />
            );
          } else if (route.name === "tab2") {
            return (
              <MaterialIcons
                name={"feed"}
                size={size}
                color={focused ? "#5565F2" : "gray"}
              />
            );
          } else if (route.name === "tab3") {
            return (
              <MaterialIcons
                name={"feed"}
                size={size}
                color={focused ? "#5565F2" : "gray"}
              />
            );
          } else if (route.name === "tab4") {
            return (
              <MaterialIcons
                name={"feed"}
                size={size}
                color={focused ? "#5565F2" : "gray"}
              />
            );
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="tab1"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab2"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab3"
        component={ShowNavigator}
        options={{
          tabBarLabel: "Showroom",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab4"
        component={MyPageNavigator}
        options={{
          tabBarLabel: "My Page",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
    </Tab.Navigator>
  );
}
