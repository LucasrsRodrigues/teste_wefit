import { MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const SettingsIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "settings",
  size: RFValue(24),
}))``;
