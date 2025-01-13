import styled from "@emotion/native";

import Cap from "./utils/cap";
import Bottle from "./utils/bottle";

export default function Lotion({ count }) {
  return (
    <Container>
      <Bottle width={50} height={109} count={count} />
      <Cap width={25} height={21} />
      <Txt>로션</Txt>
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
  margin-top: 150px;
  position: absolute;
`;
