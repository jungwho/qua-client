import styled from "@emotion/native";

import NavButton from "./NavButton";

const nav = [
  { step: "1", path: "first" },
  { step: "2", path: "second" },
  { step: "3", path: "third" },
  { step: "4", path: "fourth" },
  { step: "5", path: "fifth" },
];

export default function Header({ step, title }) {
  return (
    <Container>
      <NavContainer>
        {nav.map((el) => (
          <NavButton
            key={el.step}
            step={el.step}
            isActive={el.step === step}
            path={el.path}
          />
        ))}
      </NavContainer>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding-left: 7.5%;
  margin-bottom: 22px;
`;

const NavContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 22px 0;
`;

const Title = styled.Text`
  color: #21252e;
  font-size: 24px;
  font-weight: 600;
`;
