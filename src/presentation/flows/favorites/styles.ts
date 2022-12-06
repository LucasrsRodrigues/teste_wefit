import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const FavoritesContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

`;

