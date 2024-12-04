import { createStackNavigator } from "@react-navigation/stack";
import ShowScreen from "../screens/show/ShowScreen";

const ShowStack = createStackNavigator();

export default function ShowNavigator() {
  return (
    <ShowStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ShowStack.Screen name="show" component={ShowScreen} />
    </ShowStack.Navigator>
  );
}
