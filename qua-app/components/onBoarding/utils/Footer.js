import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ text, isActive, next }) {
  const navigation = useNavigation();

  return (
    <Container>
      <Btn
        isActive={isActive}
        disabled={!isActive}
        onPress={() => {
          navigation.navigate(next);
        }}
      >
        <Txt isActive={isActive}>{text}</Txt>
      </Btn>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
`;

const Btn = styled.Pressable`
  width: 85%;
  height: 56px;
  background-color: ${(props) => (props.isActive ? "#5565F2" : "#dbdbdb")};
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.Text`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#aaaaab")};
  font-size: 16px;
`;
