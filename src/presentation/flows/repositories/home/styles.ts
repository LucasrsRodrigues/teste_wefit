import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HomeOffline = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;
`;

export const HomeOfflineText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  margin-top: 40px;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

`;

// RepositoryCard
export const RepositoryCard = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: RFValue(4.65),

  elevation: 6,
})`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(16)}px;

  border-radius: ${RFValue(4)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-color: ${({ theme }) => theme.colors.line};
  border-bottom-width: ${RFValue(1)}px;

  padding: ${RFValue(12)}px 0 ${RFValue(16)}px;
`;

export const RepositoryName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  max-width: ${RFValue(240)}px;
`;

export const RepositoryNameStrong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const RepositoryIcon = styled.Image`
  width: ${RFValue(29)}px;
  height: ${RFValue(29)}px;
  border-radius: 50px;
`;


export const CardBody = styled.View`
  padding: ${RFValue(16)}px 0;
  width: 100%;
`;

export const RepositoryDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const CardFooter = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const StarButton = styled.TouchableOpacity`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary_light};
  align-items: center;

  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(4)}px;
`;

export const StarButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: ${RFValue(11)}px;
`;

export const WrapperStarCount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarCount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.REGULAR};

  margin-left: ${RFValue(7.67)}px;
`;

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