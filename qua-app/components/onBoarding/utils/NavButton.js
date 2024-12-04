import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function NavButton({ step, isActive, path }) {
  const navigation = useNavigation();

  return (
    <Btn
      isActive={isActive}
      onPress={() => {
        navigation.navigate(path);
      }}
    >
      <Txt isActive={isActive}>{step}</Txt>
    </Btn>
  );
}

const Btn = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#5565F2" : "#EDEDED")};
  margin-right: 8px;
`;

const Txt = styled.Text`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#C2C2C3")};
  font-size: 11px;
`;
