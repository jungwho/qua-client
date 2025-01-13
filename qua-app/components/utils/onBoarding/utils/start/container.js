import styled from "@emotion/native";

import Layout from "../../../../common/ui/layout";
import NextButton from "../../commons/ui/nextButton";

export default function StartContainer() {
  return (
    <Layout>
      <Container>
        <Title>나만의 맞춤형 화장대</Title>
        <Description>피부 타입의 고려 유무에 따라</Description>
        <Description>같은 제품으로 다른 효과를 낼 수 있어요!</Description>
        <Description>피부 타입을 분석해 100점 화장대를 만들어 볼까요?</Description>
      </Container>
      <NextButton text="시작하기" path="first" isActive={true} />
    </Layout>
  );
}

const Container = styled.View`
  flex: 1;
  padding-bottom: 60px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #0c0d0e;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Description = styled.Text`
  color: #818182;
  font-size: 14px;
  margin: 2px 0;
`;
