import { useCallback } from 'react';
import {
  Link,
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react';
import { DiGithubAlt } from 'react-icons/di';
import { IoLogoLinkedin, IoLogoDiscord } from 'react-icons/io5';

import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { BioSection, BioYear } from '../components/Bio';

const Home = () => {
  const copyDiscordToClipboard = useCallback(() => {
    navigator.clipboard.writeText('p3drohenrique#1678');
  }, []);

  return (
    <Container>
      <Box
        borderRadius="lg"
        backgroundColor="red.500"
        padding={3}
        marginTop={5}
        marginBottom={6}
        textAlign="center"
      >
        Olá, Eu sou um desenvolvedor full-stack de Sete Lagoas, MG!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pedroh Henrique
          </Heading>
          <p>Desenvolvedor NodeJS ( API RESTful / React / React Native )</p>
        </Box>

        <Box flexShrink={0} marginTop={{ base: 4, md: 0 }} marginLeft={{ md: 6 }} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/p3drohenrique.webp"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">Trabalho</Heading>
        <Paragraph>
          Sou programador full-stack e autonomo que mora em Sete Lagoas, MG
          com paixão em criar serviço/coisas digitais. Tenho conhecimento em lançamento de produtos,
          desde o planejamento até a solução de problemas da vida real com o código.
          Quando não estou online gosto de ir no fliperama com os amigos ou jogar poker com eles.
          Atualmente trabalhando para uma empresa local da sua cidade natal.
        </Paragraph>

        <Box align="center" marginY={4}>
          <a href="https://github.com/p3drohenrique" target="_blank" rel="noreferrer">
            <Button rightIcon={<DiGithubAlt size={25} />}>
              Meu github
            </Button>
          </a>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Bio</Heading>

        <BioSection>
          <BioYear>2001</BioYear>
          Nascido em Sete Lagoas, Minas Gerais
        </BioSection>

        <BioSection>
          <BioYear>2015</BioYear>
          Primeiro contato com programação estudando aulas no youtube de
          canais como RBTech, Curso em Vídeo 🦗 e Node Studio Treinamentos
        </BioSection>

        <BioSection>
          <BioYear>2018</BioYear>
          Primeiro trabalho como freelancer criando um site para locação de carros 🚗
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Primeiro trabalho como programador autônomo com php 🐘 e laravel
        </BioSection>

        <BioSection>
          <BioYear>2020 - 2022</BioYear>
          Trabalhando como programador autônomo com nodejs, reactjs, react native e outras stacks
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Eu ❤️</Heading>

        <Paragraph>
          Jogos, Músicas, Desenhar e Cozinhar
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Na internet</Heading>

        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/pedro-henrique-ribeiro-moreira-63a87a235/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Pedro Henrique Ribeiro Moreira
              </Button>
            </Link>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoDiscord} />}
              onClick={copyDiscordToClipboard}
            >
              p3drohenrique#1678
            </Button>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Home;
