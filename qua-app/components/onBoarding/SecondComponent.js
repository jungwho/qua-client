import styled from "@emotion/native";
import { useState } from "react";

import Layout from "../common/utils/Layout";
import BackButton from "../common/utils/BackButton";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import SelectButton from "./utils/SelectButton";

export default function SecondComponent() {
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const birth = year && month && day ? `${year}-${month}-${day}` : "";

  return (
    <Layout>
      <BackButton path="first" />
      <Header step="2" title="기본 정보를 알려주세요" />
      <Container>
        <Title>성별</Title>
        <SelectContainer>
          <SelectButton
            text="여성"
            isSelected={gender === "female"}
            onPress={() => {
              setGender("female");
            }}
          />
          <SelectButton
            text="남성"
            isSelected={gender === "male"}
            onPress={() => {
              setGender("male");
            }}
          />
        </SelectContainer>
        <Title>생년월일</Title>
        <InputContainer>
          <Input
            placeholder="YYYY"
            placeholderTextColor="#c2c2c3"
            value={year}
            onChangeText={(text) => setYear(text)}
            keyboardType="numeric"
            maxLength={4}
          />
          <Input
            placeholder="MM"
            placeholderTextColor="#c2c2c3"
            value={month}
            onChangeText={(text) => setMonth(text)}
            keyboardType="numeric"
            maxLength={2}
          />
          <Input
            placeholder="DD"
            placeholderTextColor="#c2c2c3"
            value={day}
            onChangeText={(text) => setDay(text)}
            keyboardType="numeric"
            maxLength={2}
          />
        </InputContainer>
      </Container>
      <Footer text="다음" next="third" isActive={!!gender && !!birth} />
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
  margin: 16px 0 5px;
`;

const SelectContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  width: 30%;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  padding-left: 12px;
`;
