import styled from "@emotion/native";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;
