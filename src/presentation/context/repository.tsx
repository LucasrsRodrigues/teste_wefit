
import React, { createContext, useEffect, useState } from "react";
import RepoHttpService from "../../infrastructure/service/RepoHttpService";
import UserSelectionModal from "../components/UserSelectionModal";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

type Children = { children: JSX.Element };

type Repository = {
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

export type RepositoryContextData = {
  repositories: Repository[];
  favorites: Repository[];
  getUserRepositories: (user: string) => Promise<void>;
  toggleUserSelectionModal: () => void;
  addFavoriteRepository: (repository: Repository) => void;
  removeFavoriteRepository: (repository: Repository) => void;
  findInFavorites: (id: number) => Promise<Boolean>;
  repositoryOwner: string;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData,
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");
  const { getItem, setItem } = useAsyncStorage('@github:repos');

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: Repository) => {
    const response = await getItem();
    const previousRepository = response ? JSON.parse(response) : [];

    const repositoryAlreadyExists = previousRepository.filter((item: Repository) => item.id !== repository.id);

    if (!!repositoryAlreadyExists) {
      const data = [...previousRepository, repository];
      setFavorites(data);
      await setItem(JSON.stringify(data));
    }


  };

  const removeFavoriteRepository = async (repository: Repository) => {
    const response = await getItem();
    const previousRepository = response ? JSON.parse(response) : [];

    const data = previousRepository.filter((item: Repository) => item.id !== repository.id);

    await setItem(JSON.stringify(data));
    setFavorites(data);
  };

  const getUserRepositories = async (user: string) => {
    setRepositoryOwner(user);
    const response = await RepoHttpService.get(user);
    setRepositories(response.data);
  };

  const getFavoritesRepositories = async () => {
    const response = await getItem();

    const data = response ? JSON.parse(response) : [];

    setFavorites(data);

  }

  const findInFavorites = async (id: number) => {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];

    const result = data.find((item: Repository) => item.id === id);
    return !!result;

  }

  useEffect(() => {
    getFavoritesRepositories();
  }, []);

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        toggleUserSelectionModal,
        addFavoriteRepository,
        removeFavoriteRepository,
        repositoryOwner,
        findInFavorites
      }}
    >
      {children}
      <UserSelectionModal visible={showModal} onClose={() => setShowModal(false)} />
    </RepositoryContext.Provider>
  );
};

