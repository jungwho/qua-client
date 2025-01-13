import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeNavigator from "../navigators/HomeNavigator";
import RecommendNavigator from "../navigators/RecommendNavigator";
import ShowNavigator from "../navigators/ShowNavigator";
import MyPageNavigator from "../navigators/MyPageNavigator";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "tab1") {
            return <Feather name="home" size={23} color={focused ? "#5565F2" : "#DBDBDB"} />;
          } else if (route.name === "tab2") {
            return <MaterialCommunityIcons name="medal-outline" size={24} color={focused ? "#5565F2" : "#DBDBDB"} />;
          } else if (route.name === "tab3") {
            return <MaterialIcons name="explore" size={24} color={focused ? "#5565F2" : "#DBDBDB"} />;
          } else if (route.name === "tab4") {
            return <Ionicons name="person-outline" size={24} color={focused ? "#5565F2" : "#DBDBDB"} />;
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="tab1"
        component={HomeNavigator}
        options={{
          tabBarLabel: "홈",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab2"
        component={RecommendNavigator}
        options={{
          tabBarLabel: "추천",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab3"
        component={ShowNavigator}
        options={{
          tabBarLabel: "둘러보기",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab4"
        component={MyPageNavigator}
        options={{
          tabBarLabel: "마이페이지",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
    </Tab.Navigator>
  );
}
