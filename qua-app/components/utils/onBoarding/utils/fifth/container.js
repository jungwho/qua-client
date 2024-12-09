import styled from "@emotion/native";
import { userStore } from "../../commons/store";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";
import SelectButton from "../../commons/ui/selectButton";
import Header from "../../commons/ui/header";
import NextButton from "../../commons/ui/nextButton";

import { interestsData } from "./interestsData";

export default function FifthContainer() {
  const { interests, setInterests } = userStore();

  const onPressInterests = (text) => {
    setInterests((prev) => {
      if (text === "해당없음") return ["해당없음"];
      if (prev.includes("해당없음")) return [...prev.filter((item) => item !== "해당없음"), text];

      if (prev.includes(text)) return prev.filter((item) => item !== text);
      else return [...prev, text];
    });
  };

  return (
    <Layout>
      <BackButton />
      <Header step="5" title="피부 고민이 있나요?" />
      <Container>
        <SelectContainer>
          {interestsData.slice(0, 3).map((el) => (
            <SelectButton
              key={el}
              text={el}
              isSelected={interests.includes(el)}
              onPress={() => onPressInterests(el)}
              btnStyle={{ width: "31%", height: 44 }}
              fontSize="14"
            />
          ))}
        </SelectContainer>
        <SelectContainer>
          {interestsData.slice(3, 6).map((el) => (
            <SelectButton
              key={el}
              text={el}
              isSelected={interests.includes(el)}
              onPress={() => onPressInterests(el)}
              btnStyle={{ width: "31%", height: 44 }}
              fontSize="14"
            />
          ))}
        </SelectContainer>
        <SelectContainer>
          {interestsData.slice(6, 9).map((el) => (
            <SelectButton
              key={el}
              text={el}
              isSelected={interests.includes(el)}
              onPress={() => onPressInterests(el)}
              btnStyle={{ width: "31%", height: 44 }}
              fontSize="14"
            />
          ))}
        </SelectContainer>
      </Container>
      <NextButton text="다음" path="result" num={1} isActive={!!interests.length} />
    </Layout>
  );
}

const Container = styled.View`
  align-items: center;
`;

const SelectContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;
