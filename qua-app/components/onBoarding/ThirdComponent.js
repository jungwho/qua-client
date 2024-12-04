import styled from "@emotion/native";
import { useState } from "react";

import Layout from "../common/utils/Layout";
import BackButton from "../common/utils/BackButton";
import Header from "./utils/Header";
import TypeSlider from "./utils/TypeSlider";
import SelectButton2 from "./utils/SelectButton2";
import Footer from "./utils/Footer";

export default function ThirdComponent() {
  const [type, setType] = useState(50);
  const [detailType, setDetailType] = useState([]);

  const handleSelectButtonPress = (text) => {
    setDetailType((prevDetailType) => {
      if (prevDetailType.includes(text)) {
        return prevDetailType.filter((item) => item !== text);
      } else {
        return [...prevDetailType, text];
      }
    });
  };

  return (
    <Layout>
      <BackButton path="second" />
      <Header step="3" title="어떤 피부 타입인가요?" />
      <Container>
        <TypeSlider value={type} onValueChange={setType} />
        <TextContainer>
          <TypeText>건성</TypeText>
          <TypeText>지성</TypeText>
        </TextContainer>
        <SelectContainer>
          <SelectButton2
            text="복합성"
            isSelected={detailType.includes("복합성")}
            onPress={() => handleSelectButtonPress("복합성")}
          />
          <SelectButton2
            text="민감성"
            isSelected={detailType.includes("민감성")}
            onPress={() => handleSelectButtonPress("민감성")}
          />
          <SelectButton2
            text="저항성"
            isSelected={detailType.includes("저항성")}
            onPress={() => handleSelectButtonPress("저항성")}
          />
        </SelectContainer>
        <SelectContainer>
          <SelectButton2
            text="수분 부족"
            isSelected={detailType.includes("수분 부족")}
            onPress={() => handleSelectButtonPress("수분 부족")}
          />
          <SelectButton2
            text="수분 충분"
            isSelected={detailType.includes("수분 충분")}
            onPress={() => handleSelectButtonPress("수분 충분")}
          />
          <SelectButton2
            text="여드름"
            isSelected={detailType.includes("여드름")}
            onPress={() => handleSelectButtonPress("여드름")}
          />
        </SelectContainer>
      </Container>
      <Footer text="다음" next="fourth" isActive={!!detailType.length} />
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
  margin: 8px 0 12px;
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
