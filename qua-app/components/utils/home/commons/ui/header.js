import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function Header({ isBoard }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TopContainer>
        <Txt>Qua</Txt>
        <AlertContainer>
          <TypeBtn>
            <TypeTxt>피부 타입</TypeTxt>
          </TypeBtn>
          <AlertBtn>
            <SimpleLineIcons name="bell" size={24} color="black" />
          </AlertBtn>
        </AlertContainer>
      </TopContainer>
      <BottomContainer>
        <NavBtn
          onPress={() => {
            navigation.navigate("board");
          }}
        >
          <NavIndicator isBoard={isBoard} />
          <NavTxt isBoard={isBoard}>내 화장대</NavTxt>
        </NavBtn>
        <NavBtn
          onPress={() => {
            navigation.navigate("item");
          }}
        >
          <NavIndicator isBoard={!isBoard} />
          <NavTxt isBoard={!isBoard}>내 화장품</NavTxt>
        </NavBtn>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.View`
  padding: 0 14px 14px;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 0.5px;
`;

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Txt = styled.Text`
  color: #5565f2;
  font-size: 24px;
  font-weight: 700;
`;

const AlertContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TypeBtn = styled.Pressable`
  border: 1px solid #4b4c4d;
  border-radius: 10px;
  padding: 3px 5px;
`;

const TypeTxt = styled.Text`
  font-size: 10px;
`;

const AlertBtn = styled.Pressable`
  margin-left: 10px;
`;

const BottomContainer = styled.View`
  flex-direction: row;
`;

const NavBtn = styled.Pressable`
  align-items: center;
  margin-top: 22px;
`;

const NavIndicator = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ isBoard }) => (isBoard ? "black" : "transparent")};
  margin-bottom: 8px;
`;

const NavTxt = styled.Text`
  font-size: 18px;
  color: ${({ isBoard }) => (isBoard ? "black" : "#DBDBDB")};
  margin-right: 12px;
  font-weight: 700;
`;
