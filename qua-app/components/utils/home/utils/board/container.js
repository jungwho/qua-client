import styled from "@emotion/native";
import { userStore } from "../../../onBoarding/commons/store";
import Cap from "./bottles/utils/cap";

import Layout from "../../../../common/ui/layout";
import Header from "../../commons/ui/header";
import BottleContainer from "./bottles/bottleContainer";
import Information from "./information";

export default function BoardContainer() {
  return (
    <Layout>
      <Header isBoard={true} />
      <BtnContainer>
        <Btn>
          <BtnTxt>?</BtnTxt>
        </Btn>
      </BtnContainer>
      <BottleContainer />
      <Information />
    </Layout>
  );
}

const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px 14px;
`;

const Btn = styled.Pressable`
  width: 17px;
  height: 17px;
  background-color: #c2c2c3;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const BtnTxt = styled.Text`
  color: white;
  font-size: 12px;
`;
