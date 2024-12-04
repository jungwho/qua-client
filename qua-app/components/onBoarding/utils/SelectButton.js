import styled from "@emotion/native";

export default function SelectButton({ text, isSelected, onPress }) {
  return (
    <Btn isSelected={isSelected} onPress={onPress}>
      <Txt isSelected={isSelected}>{text}</Txt>
    </Btn>
  );
}

const Btn = styled.Pressable`
  width: 48%;
  height: 60px;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${(props) => (props.isSelected ? "#5565F2" : "#DBDBDB")};
  background-color: ${(props) => (props.isSelected ? "#E3E5FF" : "#FFFFFF")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Txt = styled.Text`
  color: ${(props) => (props.isSelected ? "#5565F2" : "#69696a")};
  font-size: 16px;
`;
