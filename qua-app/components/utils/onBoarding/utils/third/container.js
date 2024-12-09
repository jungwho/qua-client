import styled from "@emotion/native";
import { userStore } from "../../commons/store";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";
import TypeSlider from "../../commons/ui/typeSlider";
import SelectButton from "../../commons/ui/selectButton";
import Header from "../../commons/ui/header";
import NextButton from "../../commons/ui/nextButton";

import { detailTypesData } from "./detailTypesData";

export default function ThirdContainer() {
  const { type, setType, detailTypes, setDetailTypes } = userStore();

  const onPressDetailTypes = (text) => {
    setDetailTypes((prev) => {
      if (prev.includes(text)) return prev.filter((item) => item !== text);
      else return [...prev, text];
    });
  };

  return (
    <Layout>
      <BackButton />
      <Header step="3" title="어떤 피부 타입인가요?" />
      <Container>
        <TypeSlider value={type} onValueChange={setType} isResult={false} />
        <TextContainer>
          <TypeText>건성</TypeText>
          <TypeText>지성</TypeText>
        </TextContainer>
        <SelectContainer>
          {detailTypesData.slice(0, 3).map((el) => (
            <SelectButton
              key={el}
              text={el}
              isSelected={detailTypes.includes(el)}
              onPress={() => onPressDetailTypes(el)}
              btnStyle={{ width: "31%", height: 44 }}
              fontSize="14"
            />
          ))}
        </SelectContainer>
        <SelectContainer>
          {detailTypesData.slice(3, 6).map((el) => (
            <SelectButton
              key={el}
              text={el}
              isSelected={detailTypes.includes(el)}
              onPress={() => onPressDetailTypes(el)}
              btnStyle={{ width: "31%", height: 44 }}
              fontSize="14"
            />
          ))}
        </SelectContainer>
      </Container>
      <NextButton text="다음" path="fourth" num={1} isActive={!!detailTypes.length} />
    </Layout>
  );
}

const Container = styled.View`
  align-items: center;
`;

const TextContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const TypeText = styled.Text`
  color: #818182;
  font-size: 14px;
`;

const SelectContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;
