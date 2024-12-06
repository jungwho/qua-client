import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function NextButton({ text, isActive, path, num = 0 }) {
  const navigation = useNavigation();

  const onPressNext = () => {
    if (num) {
      navigation.navigate(path, { num: num });
    } else {
      navigation.navigate(path);
    }
  };

  return (
    <Container>
      <Btn isActive={isActive} disabled={!isActive} onPress={onPressNext}>
        <Txt isActive={isActive}>{text}</Txt>
      </Btn>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
`;

const Btn = styled.Pressable`
  width: 85%;
  height: 56px;
  background-color: ${(props) => (props.isActive ? "#5565F2" : "#dbdbdb")};
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.Text`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#aaaaab")};
  font-size: 16px;
`;
