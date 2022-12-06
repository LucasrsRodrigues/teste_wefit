import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const DetailsOffline = styled.View``;
export const DetailsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DetailsHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const GobackButton = styled.TouchableOpacity``;

export const HeadeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  margin-left: ${RFValue(16)}px;
`;

export const DetailsContent = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(16)}px;
`;

export const RepositoryName = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
`;

export const RepositoryNameStrong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
`;

export const RepositoryDescription = styled.Text`
  margin-top:${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(16)}px;
`;

export const RepositoryLanguages = styled.View``;


export const WrapperLanguage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DotLanguage = styled.View`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFPercentage(50)}px;

  background: ${({ theme }) => theme.colors.danger};
`;

export const RepositoryLaguage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(6)}px;
`;

export const DetailsFooter = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(25)}px;

  background: ${({ theme }) => theme.colors.shape};

`;