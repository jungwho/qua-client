import { createStackNavigator } from "@react-navigation/stack";

import FirstScreen from "../screens/onBoarding/FirstScreen";
import SecondScreen from "../screens/onBoarding/SecondScreen";
import ThirdScreen from "../screens/onBoarding/ThirdScreen";
import FourthScreen from "../screens/onBoarding/FourthScreen";
import FifthScreen from "../screens/onBoarding/FifthScreen";

const OnBoardingStack = createStackNavigator();

export default function OnBoardingNavigator() {
  return (
    <OnBoardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnBoardingStack.Screen name="first" component={FirstScreen} />
      <OnBoardingStack.Screen name="second" component={SecondScreen} />
      <OnBoardingStack.Screen name="third" component={ThirdScreen} />
      <OnBoardingStack.Screen name="fourth" component={FourthScreen} />
      <OnBoardingStack.Screen name="fifth" component={FifthScreen} />
    </OnBoardingStack.Navigator>
  );
}
