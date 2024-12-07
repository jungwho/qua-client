import styled from "@emotion/native";

import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";

export default function TypeSlider({ value, onValueChange, isResult = true }) {
  return (
    <Container>
      {isResult ? (
        <Img source={require("../../../../../assets/images/bar.png")} />
      ) : (
        <GradientLiner colors={["#C9CDFF", "#5565F2"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}></GradientLiner>
      )}
      <Slider
        value={value}
        onValueChange={onValueChange}
        minimumValue={0}
        maximumValue={8}
        step={1}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbImage={require("../../../../../assets/images/slider.png")}
        style={{ position: "absolute", width: "95%" }}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 22px;
  z-index: 1;
`;

const GradientLiner = styled(LinearGradient)`
  width: 85%;
  height: 8px;
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
`;

const Img = styled.Image`
  width: 85%;
  border-radius: 10px;
  justify-content: center;
  margin-top: 16px;
`;
