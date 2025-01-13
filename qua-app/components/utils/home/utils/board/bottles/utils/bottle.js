import styled from "@emotion/native";

import { LinearGradient } from "expo-linear-gradient";

export default function Bottle({ width, height, count }) {
  const contentHeight = height / 5;

  return (
    <Container style={{ width: width, height: height }}>
      {Array.from({ length: count }).map((_, index) => (
        <GradientLiner
          key={index}
          colors={["#E3E5FF", "#C9CDFF", "#C9CDFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: width - 6, height: contentHeight - 3.5 }}
        ></GradientLiner>
      ))}
    </Container>
  );
}

const Container = styled.View`
  border: 1px solid black;
  border-radius: 7px;
  justify-content: flex-end;
  align-items: center;
`;

const GradientLiner = styled(LinearGradient)`
  justify-content: center;
  margin: 1.5px;
`;
