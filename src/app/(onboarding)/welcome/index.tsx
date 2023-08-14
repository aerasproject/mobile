import { Link } from "expo-router";

import theme from '@/theme'

import { Button } from "@/components/button";

import {
  Container,
  Title,
  Content,
  Header,
  Description,
} from "./styles";

export default function WelcomeScreen() {
  return (
    <>
      <Container>
        <Header colors={theme.COLORS.LINEAR_GRADIENT}>
          <Title>
            Você em dia com as obrigações do seu negócio
          </Title>
        </Header>
        <Content>
          <Description>
            Mantenha-se informado, proativo e no controle, garantindo um ambiente ideal em todos os aspectos. Simplifique o gerenciamento dos seus ar-condicionados com Aeras e aproveite um novo nível de eficiência e comodidade.
          </Description>
          <Link href="/choice/" asChild>
            <Button title="Começar" />
          </Link>
        </Content>
      </Container>
    </>
  );
}

