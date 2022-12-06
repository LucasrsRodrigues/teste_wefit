import React, { Fragment, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";
import { Button } from "react-native-paper";
import { useRepository } from "../../../hooks/useRepository";
import * as S from "./styles";

import NetInfo, { useNetInfo } from '@react-native-community/netinfo';


interface IRepositoriesProps {
  id: number;
  full_name: string;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  },
  stargazers_count: string;
  language: string;
  html_url: string;
}

const Details = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const theme = useTheme();
  const repository = params?.repository as IRepositoriesProps;
  const { findInFavorites, removeFavoriteRepository, addFavoriteRepository } = useRepository();

  useEffect(() => {
    (async () => {
      const response = await findInFavorites(repository.id);
      setIsFavorite(response);
    })();
  }, []);



  return (
    <Fragment>
      <S.DetailsContainer>
        <S.DetailsHeader>
          <StatusBar barStyle="light-content" />
          <S.GobackButton onPress={goBack}>
            <MaterialCommunityIcons name="arrow-left" size={RFValue(21)} color={theme.colors.white} />
          </S.GobackButton>

          <S.HeadeTitle>Detalhes</S.HeadeTitle>
        </S.DetailsHeader>

        <S.DetailsContent>
          <S.RepositoryName>
            {repository.owner.login}/<S.RepositoryNameStrong>{repository.name}</S.RepositoryNameStrong>
          </S.RepositoryName>

          <S.RepositoryDescription>
            {repository.description}
          </S.RepositoryDescription>

          {!!repository.language && (
            <S.WrapperLanguage>
              <S.DotLanguage />
              <S.RepositoryLaguage>
                {repository.language}
              </S.RepositoryLaguage>
            </S.WrapperLanguage>
          )}
        </S.DetailsContent>
      </S.DetailsContainer>
      <S.DetailsFooter>
        <Button
          mode="text"
          onPress={() => { Linking.openURL(repository.html_url) }}
          labelStyle={{ color: theme.colors.alert, fontSize: RFValue(15) }}
          color="#fff"
          contentStyle={{ padding: RFValue(8) }}
        >
          Ver Repositório{' '}
          <Feather name="link-2" size={20} color={theme.colors.alert} />
        </Button>

        {!isFavorite ? (
          <Button
            mode="contained"
            color="#fff"
            onPress={() => { addFavoriteRepository(repository); setIsFavorite(true); }}
            labelStyle={{
              color: theme.colors.black,
              fontSize: RFValue(15),
              fontFamily: theme.fonts.secondary_medium
            }}
            contentStyle={{ padding: RFValue(8), backgroundColor: theme.colors.primary }}
          >
            Favoritar{' '}
            <Entypo name="star" size={RFValue(20)} color={theme.colors.black} />
          </Button>
        ) : (
          <Button
            mode="contained"
            color="#fff"
            onPress={() => { removeFavoriteRepository(repository); setIsFavorite(false) }}
            labelStyle={{
              color: theme.colors.black,
              fontSize: RFValue(15),
              fontFamily: theme.fonts.secondary_medium
            }}
            contentStyle={{
              padding: RFValue(8),
              backgroundColor: theme.colors.shape,
              borderWidth: RFValue(1),
              borderColor: theme.colors.black,
              borderRadius: RFValue(4)
            }}
          >
            Desfavoritar{' '}
            <Entypo name="star-outlined" size={RFValue(20)} color={theme.colors.black} />
          </Button>
        )}
      </S.DetailsFooter>
    </Fragment >
  );
};


export default Details;
