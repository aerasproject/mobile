import React from "react";
import { Link } from "expo-router";

import theme from "@/theme";

import { Button } from "@/components/button";

import {
  Container,
  Header,
  Image,
  Text,
  Content
} from "./styles";

export default function ChoiceScreen() {
  return (
    <Container>
      <Header colors={theme.COLORS.LINEAR_GRADIENT}>
        <Image />
        <Text>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin tempus maximus dui mollis consectetur.
        </Text>
      </Header>
      <Content>
        <Button
          type="primary-outline"
          title="Criar cadastro como cliente"
        />
        <Link href="/welcome/" asChild>
          <Text>
            Iniciar Sessão
          </Text>
        </Link>
      </Content>
    </Container>
  );
}

