import { createStackNavigator } from "@react-navigation/stack";
import RecommendScreen from "../screens/recommend/RecommendScreen";

const RecommendStack = createStackNavigator();

export default function RecommendNavigator() {
  return (
    <RecommendStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RecommendStack.Screen name="recommend" component={RecommendScreen} />
    </RecommendStack.Navigator>
  );
}
