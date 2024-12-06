import styled from "@emotion/native";
import Bar from "../../utils/fourth/bar";

export default function Header({ step, title, num }) {
  const steps = ["1", "2", "3", "4", "5"];

  return (
    <Container>
      <NavContainer>
        {steps.map((el) => (
          <Nav key={el} isActive={el === step}>
            <NavTxt isActive={el === step}>{el}</NavTxt>
          </Nav>
        ))}
      </NavContainer>
      {num && <Bar num={num}></Bar>}
      <Title>{title}</Title>
      {step === "5" && <DetailTitle>평소 피부 고민을 모두 선택해 주세요</DetailTitle>}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding-left: 7.5%;
  margin-bottom: 24px;
`;

const NavContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 12px 0 12px;
`;

const Nav = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#5565F2" : "#EDEDED")};
  margin-right: 8px;
`;

const NavTxt = styled.Text`
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#C2C2C3")};
  font-size: 11px;
`;

const Title = styled.Text`
  color: #21252e;
  margin-top: 12px;
  font-size: 24px;
  font-weight: 600;
`;

const DetailTitle = styled.Text`
  color: #96a1ff;
  font-size: 14px;
  margin-top: 8px;
`;
