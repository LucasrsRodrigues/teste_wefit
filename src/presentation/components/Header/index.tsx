import React from "react";
import { useRepository } from "../../hooks/useRepository";
import { Container, Text, Button, SettingsIcon } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
};

const Header = ({ title, onPress }: Props) => {
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Container>
      <Text>{title}</Text>

      <Button onPress={toggleUserSelectionModal}>
        <SettingsIcon />
      </Button>
    </Container>
  );
};

export default Header;