import styled from "@emotion/native";

export default function BirthInput({ holder, value, onChangeText }) {
  return (
    <Input
      placeholder={holder}
      placeholderTextColor="#c2c2c3"
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      maxLength={holder.length}
    />
  );
}

const Input = styled.TextInput`
  width: 30%;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  padding-left: 12px;
`;
