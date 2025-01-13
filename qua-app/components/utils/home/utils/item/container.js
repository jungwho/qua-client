import styled from "@emotion/native";

import Layout from "../../../../common/ui/layout";
import Header from "../../commons/ui/header";

export default function ItemContainer() {
  return (
    <Layout>
      <Header isBoard={false} />
    </Layout>
  );
}

const Container = styled.View``;
