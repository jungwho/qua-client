import { createStackNavigator } from "@react-navigation/stack";
import MyPageScreen from "../screens/myPage/MyPageScreen";

const MyPageStack = createStackNavigator();

export default function MyPageNavigator() {
  return (
    <MyPageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MyPageStack.Screen name="my-page" component={MyPageScreen} />
    </MyPageStack.Navigator>
  );
}
