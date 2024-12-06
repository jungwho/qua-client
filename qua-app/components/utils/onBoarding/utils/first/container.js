import styled from "@emotion/native";

import Layout from "../../commons/ui/layout";
import BackButton from "../../commons/ui/backButton";
import Header from "../../commons/ui/header";
import NextButton from "../../commons/ui/nextButton";
import { userStore } from "../../commons/store";

export default function FirstContainer() {
  const { name, setName } = userStore();

  return (
    <Layout>
      <BackButton />
      <Header step="1" title="닉네임을 설정해주세요" />
      <Container>
        <Input value={name} onChangeText={setName} />
      </Container>
      <NextButton text="다음" path="second" isActive={!!name.trim()} />
    </Layout>
  );
}

const Container = styled.View`
  align-items: center;
`;

const Input = styled.TextInput`
  width: 85%;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  padding-left: 12px;
`;
