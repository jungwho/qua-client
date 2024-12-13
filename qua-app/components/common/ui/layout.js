import styled from "@emotion/native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Layout({ children }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>{children}</Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  flex: 1;
  padding-top: 56px;
  background-color: white;
`;
