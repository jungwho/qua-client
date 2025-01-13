import styled from "@emotion/native";

export default function Information() {
  return (
    <Container>
      <Btn>
        <BtnTxt>X</BtnTxt>
      </Btn>
      <Title>적합도 구분</Title>
      <Txt>적합도는 칸별로 매우 적합, 적합, 보통, 부적합, 매우 부적합으로</Txt>
      <Txt>나뉘어요</Txt>
    </Container>
  );
}

const Container = styled.View`
  width: 354px;
  position: relative;
`;

const Btn = styled.Pressable`
  position: absolute;
  right: 0;
  top: 0;
`;

const BtnTxt = styled.Text``;

const Title = styled.Text`
  color: #0c0d0e;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Txt = styled.Text`
  color: #818182;
  font-size: 12px;
`;

const InfoContainer = styled.View``;
