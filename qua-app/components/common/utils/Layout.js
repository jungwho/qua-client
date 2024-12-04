import styled from "@emotion/native";

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.View`
  flex: 1;
  padding-top: 56px;
  background-color: white;
`;
