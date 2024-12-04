import { useStore } from "./components/common/Store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import OnBoardingNavigator from "./navigators/OnBoardingNavigator";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const { isStart } = useStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isStart ? <OnBoardingNavigator /> : <MainScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
