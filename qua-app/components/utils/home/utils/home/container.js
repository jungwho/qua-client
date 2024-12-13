import styled from "@emotion/native";

import Layout from "../../../../common/ui/layout";
import Header from "../../commons/ui/header";

export default function HomeContainer() {
  return (
    <Layout>
      <Header text="수정" path="edit" />
    </Layout>
  );
}

const Container = styled.View``;
