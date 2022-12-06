import { Entypo } from "@expo/vector-icons";
import { useNetInfo } from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import RepoHttpService from "../../../../infrastructure/service/RepoHttpService";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { useRepository } from "../../../hooks/useRepository";
import theme from "../../../styles/theme";
import { Feather } from '@expo/vector-icons';
import * as S from "./styles";

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

const Home = () => {
  const { repositories, getUserRepositories, repositoryOwner } = useRepository();
  const netInfo = useNetInfo();

  useFocusEffect(useCallback(() => {
    getUserRepositories(repositoryOwner);
  }, [repositoryOwner]));

  if (!netInfo.isConnected) {
    return (
      <S.HomeOffline>
        <Feather name="wifi-off" size={RFValue(150)} color={theme.colors.text} />
        <S.HomeOfflineText>Sem conexão com a internet</S.HomeOfflineText>
      </S.HomeOffline>
    )
  }

  return (
    <S.Container>
      {repositories.map(repository => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </S.Container>
  );
};

export default Home;
