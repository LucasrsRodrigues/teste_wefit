import React, { useEffect, useState } from "react";
import { useModalize } from "react-native-modalize";
import { Button, TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { useRepository } from "../../hooks/useRepository";
import * as S from "./styles";
type Props = {
  visible: boolean;
  onClose: () => void;
};

const UserSelectionModal = ({ visible, onClose }: Props) => {
  const [repositoryOwner, setRepositoryOwner] = useState('');

  const { ref, open, close } = useModalize();
  const { getUserRepositories } = useRepository();

  const theme = useTheme();

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return (
    <S.ModalContainer ref={ref} onClose={onClose}>
      <S.ModalHeader>Alterar usuário selecionado</S.ModalHeader>

      <TextInput
        label="Nome do usuário"
        value={repositoryOwner}
        onChangeText={setRepositoryOwner}
        selectionColor="gray"
        activeUnderlineColor="gray"
        autoCapitalize="none"
      />

      <S.ModalFoter>
        <Button
          mode="text"

          onPress={close}
          style={{ flex: 1 }}
          labelStyle={{ color: theme.colors.alert, fontSize: RFValue(15) }}
          contentStyle={{ padding: RFValue(8) }}
        >
          CANCELAR
        </Button>
        <Button
          mode="contained"
          onPress={() => { getUserRepositories(repositoryOwner); close(); }}
          style={{ flex: 1 }}
          labelStyle={{
            color: theme.colors.white,
            fontSize: RFValue(15),
            fontFamily: theme.fonts.secondary_medium,
            textTransform: "uppercase"
          }}
          contentStyle={{
            padding: RFValue(8),
            borderRadius: RFValue(4),
            backgroundColor: theme.colors.alert
          }}
        >
          Salvar
        </Button>
      </S.ModalFoter>
    </S.ModalContainer>
  );
};

export default UserSelectionModal;
