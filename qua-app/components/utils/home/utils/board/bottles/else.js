import styled from "@emotion/native";

import Cap from "./utils/cap";
import Bottle from "./utils/bottle";

export default function Else({ count }) {
  return (
    <Container>
      <Cap width={66} height={22} />
      <Bottle width={87} height={56} count={count} />
      <Txt>기타</Txt>
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
  margin-top: 98px;
  position: absolute;
`;
