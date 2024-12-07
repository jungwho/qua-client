import styled from "@emotion/native";

import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";

export default function TypeSlider({ value, onValueChange, disabled }) {
  return (
    <Container>
      <GradientLiner colors={["#C9CDFF", "#5565F2"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}></GradientLiner>
      <Slider
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbImage={require("../../../../../assets/images/slider.png")}
        style={{ position: "absolute", width: "85%" }}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 22px;
`;

const GradientLiner = styled(LinearGradient)`
  width: 85%;
  height: 10px;
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
`;
