import styled from "@emotion/native";
import { useRoute } from "@react-navigation/native";
import { userStore } from "../../commons/store";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";
import Header from "../../commons/ui/header";
import SelectButton from "../../commons/ui/selectButton";
import NextButton from "../../commons/ui/nextButton";

import { questionsData } from "./questionsData";

export default function FourthContainer() {
  const { num } = useRoute().params;

  const question = questionsData[num - 1];
  const { answers, setAnswers } = userStore();

  const onPressAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[num - 1] = index;
    setAnswers(newAnswers);
  };

  return (
    <Layout>
      <BackButton />
      <Header step="4" title={question.title} />
      <Container>
        {question.answers.map((answer, index) => (
          <SelectButton
            key={index}
            btnStyle={btnStyle}
            isSelected={answers[num - 1] === index}
            text={answer}
            fontSize="14"
            onPress={() => onPressAnswer(index)}
          />
        ))}
      </Container>
      {num === 6 ? (
        <NextButton text="다음" path="fifth" isActive={!answers[num - 1] != null} />
      ) : (
        <NextButton text="다음" path="fourth" num={num + 1} isActive={answers[num - 1] != null} />
      )}
    </Layout>
  );
}

const Container = styled.View`
  align-items: center;
`;

const btnStyle = {
  width: "85%",
  height: 44,
  marginBottom: 12,
};
