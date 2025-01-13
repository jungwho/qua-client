import styled from "@emotion/native";
import Skin from "./skin";
import Ample from "./ample";
import Lotion from "./lotion";
import Else from "./else";

export default function BottleContainer() {
  return (
    <Container>
      <TopContainer>
        <Skin count={5} />
        <Ample count={3} />
        <Lotion count={2} />
        <Else count={4} />
      </TopContainer>
    </Container>
  );
}

const Container = styled.View``;

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 30px;
  border-bottom-color: #3d3d3e;
  border-bottom-width: 2px;
`;
