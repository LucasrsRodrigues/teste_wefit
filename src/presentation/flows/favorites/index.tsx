import React from "react";
import { RepositoryCard } from "../../components/RepositoryCard";
import { useRepository } from "../../hooks/useRepository";
import * as S from "./styles";

const Favorites = () => {
  const { favorites } = useRepository();

  return (
    <S.FavoritesContainer>
      {favorites.map(repository => (
        <RepositoryCard key={repository.id} repository={repository} hiddenFavoriteButton />
      ))}
    </S.FavoritesContainer>
  );
};

export default Favorites;
