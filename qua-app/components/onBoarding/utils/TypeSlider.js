import styled from "@emotion/native";

import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";

export default function TypeSlider({ value, onValueChange, disabled }) {
  return (
    <GradientLiner
      colors={["#C9CDFF", "#5565F2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Slider
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbImage={require("../../../assets/images/slider.png")}
      />
    </GradientLiner>
  );
}

const GradientLiner = styled(LinearGradient)`
  width: 85%;
  height: 8px;
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
`;
