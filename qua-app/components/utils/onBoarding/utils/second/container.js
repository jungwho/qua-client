import styled from "@emotion/native";
import { useState, useEffect } from "react";
import { userStore } from "../../commons/store";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";
import Header from "../../commons/ui/header";
import SelectButton from "../../commons/ui/selectButton";
import NextButton from "../../commons/ui/nextButton";
import BirthInput from "./birthInput";

export default function SecondContainer() {
  const { gender, setGender, year, setYear, month, setMonth, day, setDay, setBirth } = userStore();

  useEffect(() => {
    if (year.length === 4 && month && day) {
      setBirth(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
    }
  }, [year, month, day]);

  return (
    <Layout onPress={() => Keyboard.dismiss()}>
      <BackButton />
      <Header step="2" title="기본 정보를 알려주세요" />
      <Container>
        <Title>성별</Title>
        <SelectContainer>
          <SelectButton text="여성" isSelected={gender === "female"} onPress={() => setGender("female")} />
          <SelectButton text="남성" isSelected={gender === "male"} onPress={() => setGender("male")} />
        </SelectContainer>

        <Title>생년월일</Title>
        <InputContainer>
          <BirthInput holder="YYYY" value={year} onChangeText={(text) => setYear(text)} />
          <BirthInput holder="MM" value={month} onChangeText={(text) => setMonth(text)} />
          <BirthInput holder="DD" value={day} onChangeText={(text) => setDay(text)} />
        </InputContainer>
      </Container>
      <NextButton text="다음" path="third" isActive={!!gender && !!year && !!month && !!day} />
    </Layout>
  );
}

const Container = styled.View`
  width: 100%;
  padding: 0 7.5%;
`;

const Title = styled.Text`
  color: "#818182";
  font-size: 14px;
  margin: 8px 0;
`;

const SelectContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
