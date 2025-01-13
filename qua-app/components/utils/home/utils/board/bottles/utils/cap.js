import styled from "@emotion/native";

import { LinearGradient } from "expo-linear-gradient";

export default function Cap({ width, height }) {
  return (
    <GradientLiner
      colors={["#C2C2C3", "#353535", "#353535", "#353535", "#5565F2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ width: width, height: height }}
    ></GradientLiner>
  );
}

const GradientLiner = styled(LinearGradient)`
  justify-content: center;
  margin: 2px;
`;
