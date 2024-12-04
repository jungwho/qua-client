import styled from "@emotion/native";
import { userStore } from "../common/Store";

import Layout from "../common/utils/Layout";
import BackButton from "../common/utils/BackButton";
import Header from "./utils/Header";
import Footer from "./utils/Footer";

export default function FirstComponent() {
  const { name, setName } = userStore();

  return (
    <Layout>
      <BackButton />
      <Header step="1" title="닉네임을 설정해주세요" />
      <Container>
        <Input value={name} onChangeText={setName} />
      </Container>
      <Footer text="다음" next="second" isActive={!!name.trim()} />
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
