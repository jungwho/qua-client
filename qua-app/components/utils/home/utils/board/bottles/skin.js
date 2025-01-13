import styled from "@emotion/native";

import Cap from "./utils/cap";
import Bottle from "./utils/bottle";

export default function Skin({ count }) {
  return (
    <Container>
      <Cap width={31} height={23} />
      <Bottle width={47} height={130} count={count} />
      <Txt>스킨</Txt>
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
  margin-top: 173px;
  position: absolute;
`;
