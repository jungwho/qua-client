import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/home/BoardScreen";
import ItemScreen from "../screens/home/ItemScreen";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: () => ({}),
      }}
    >
      <HomeStack.Screen name="board" component={BoardScreen} />
      <HomeStack.Screen name="item" component={ItemScreen} />
    </HomeStack.Navigator>
  );
}
