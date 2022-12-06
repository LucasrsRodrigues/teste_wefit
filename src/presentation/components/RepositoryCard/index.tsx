import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useRepository } from '../../hooks/useRepository';

import * as S from './styles';

interface IRepositoryCardProps {
  repository: {
    id: number;
    name: string;
    description: string;
    owner: {
      avatar_url: string;
      login: string;
    },
    stargazers_count: string;
    language: string;
    html_url: string;
  };
  hiddenFavoriteButton?: boolean;
}



export function RepositoryCard({ repository, hiddenFavoriteButton = false }: IRepositoryCardProps) {
  const theme = useTheme();
  const { addFavoriteRepository } = useRepository();
  const { navigate } = useNavigation();

  function navigateTo() {
    navigate('Details', {
      repository
    })
  }



  return (
    <S.RepositoryContainer onPress={navigateTo}>
      <S.CardHeader>
        <S.RepositoryName>
          {repository.owner.login}/<S.RepositoryNameStrong>{repository.name}</S.RepositoryNameStrong>
        </S.RepositoryName>
        <S.RepositoryIcon source={{ uri: repository.owner.avatar_url }} />
      </S.CardHeader>

      <S.CardBody>
        <S.RepositoryDescription>
          {repository.description}
        </S.RepositoryDescription>
      </S.CardBody>

      <S.CardFooter>

        {!hiddenFavoriteButton && (
          <S.StarButton onPress={() => addFavoriteRepository(repository)}>
            <Entypo name="star" size={RFValue(16)} color={theme.colors.primary} />
            <S.StarButtonText>
              Favoritar
            </S.StarButtonText>

          </S.StarButton>
        )}

        <S.WrapperStarCount>
          <Entypo name="star" size={RFValue(16)} color={theme.colors.primary} />

          <S.StarCount>{repository.stargazers_count}</S.StarCount>
        </S.WrapperStarCount>

        {!!repository.language && (
          <S.WrapperLanguage>
            <S.DotLanguage />
            <S.RepositoryLaguage>
              {repository.language}
            </S.RepositoryLaguage>
          </S.WrapperLanguage>
        )}

      </S.CardFooter>

    </S.RepositoryContainer>
  );
}