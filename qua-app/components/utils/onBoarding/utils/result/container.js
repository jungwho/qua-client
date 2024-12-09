import styled from "@emotion/native";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";

import { userStore } from "../../commons/store";
import TypeSlider from "../../commons/ui/typeSlider";
import ResultCalculator from "./calculator";
import NextButton from "../../commons/ui/nextButton";

export default function ResultContainer() {
  const { name, answers } = userStore();
  const data = ResultCalculator(answers);
  console.log(data?.results);
  console.log(data?.scores);

  return (
    <Layout>
      <BackButton />
      <Container>
        <TitleContainer>
          <Title>
            <Name>{name}</Name>님의 피부 타입은
          </Title>
          <Title>
            <Result>{data?.results}</Result> 입니다
          </Title>
        </TitleContainer>
        <TypeSlider value={data?.scores[0]} />
        <TextContainer>
          <Txt>Alipic</Txt>
          <Txt>Oily</Txt>
        </TextContainer>
        <TextContainer>
          <Description>건성</Description>
          <Description>지성</Description>
        </TextContainer>
        <TypeSlider value={data?.scores[1]} />
        <TextContainer>
          <Txt>Dry</Txt>
          <Txt>Moist</Txt>
        </TextContainer>
        <TextContainer>
          <Description>수분 부족</Description>
          <Description>수분 충전</Description>
        </TextContainer>
        <TypeSlider value={data?.scores[2]} />
        <TextContainer>
          <Txt>Sensitive</Txt>
          <Txt>Resistant</Txt>
        </TextContainer>
        <TextContainer>
          <Description>민감형</Description>
          <Description>저항형</Description>
        </TextContainer>
      </Container>

      <NextButton text="적합도 분석 리포트 보기" isActive={true} />
    </Layout>
  );
}

const Container = styled.View`
  align-items: center;
`;

const TitleContainer = styled.View`
  margin: 60px 0;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const Name = styled.Text`
  font-weight: 800;
`;

const Result = styled.Text`
  color: #5565f2;
`;

const TextContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
`;

const Txt = styled.Text`
  font-size: 14px;
  color: #3d3d3e;
  margin-bottom: 3px;
`;

const Description = styled.Text`
  font-size: 12px;
  color: #999fa6;
  margin-bottom: 15px;
`;
