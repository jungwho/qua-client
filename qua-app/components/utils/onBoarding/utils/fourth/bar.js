import styled from "@emotion/native";
import Slider from "@react-native-community/slider";

export default function Bar({ num }) {
  return (
    <Container>
      <Slider
        style={{ width: "92.5%" }}
        minimumValue={0}
        maximumValue={6}
        value={num}
        minimumTrackTintColor="#5565F2"
        maximumTrackTintColor={num === 6 ? "#5565F2" : "#EDEDED"}
        thumbTintColor="transparent"
        thumbStyle={{ width: 0, height: 0 }}
      />
      <NavText>{num}/6</NavText>
    </Container>
  );
}

const Container = styled.View`
  width: 92.5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavText = styled.Text`
  color: #aaaaab;
  font-size: 12px;
`;
