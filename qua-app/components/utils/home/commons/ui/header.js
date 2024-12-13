import styled from "@emotion/native";

import BackButton from "../../../../common/ui/backButton";
import { useNavigation } from "@react-navigation/native";

export default function Header({ text, path, isBtn }) {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton />
      <Txt>내 화장대</Txt>
      {isBtn ? (
        <Btn>
          <BtnTxt onPress={() => navigation.navigate({ path })}>{text}</BtnTxt>
        </Btn>
      ) : (
        <Blank></Blank>
      )}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Txt = styled.Text`
  color: #0c0d0e;
  font-size: 18px;
  font-weight: 600;
`;

const Btn = styled.Pressable`
  margin-right: 5px;
`;

const BtnTxt = styled.Text`
  color: #5565f2;
  font-size: 14px;
`;

const Blank = styled.View`
  margin-right: 5px;
`;
