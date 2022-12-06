import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";
import { RFValue } from "react-native-responsive-fontsize";


export const ModalContainer = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: RFValue(16),
  },
})`
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const ModalHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(10)}px;
`;

export const ModalFoter = styled.View`
  flex-direction: row;
  margin: ${RFValue(10)}px 0;
  justify-content: space-between;
`;