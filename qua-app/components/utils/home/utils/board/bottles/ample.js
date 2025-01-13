import styled from "@emotion/native";

import Cap from "./utils/cap";
import Bottle from "./utils/bottle";

export default function Ample({ count }) {
  return (
    <Container>
      <Cap width={25} height={18} />
      <Bottle width={49} height={77} count={count} />
      <Txt>앰플</Txt>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
`;

const Txt = styled.Text`
  background-color: #5a5b5b;
  border-radius: 20px;
  color: white;
  font-size: 10px;
  padding: 3px 5px;
  margin-top: 115px;
  position: absolute;
`;
