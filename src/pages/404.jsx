import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => (
  <Container>
    <Heading as="h1">Não encontrado</Heading>
    <Text>A página que está procurando não foi encontrada.</Text>

    <Divider marginY={6} />

    <Box marginY={6} align="center">
      <NextLink href="/" passHref>
        <Button colorScheme="teal">Voltar para o início</Button>
      </NextLink>
    </Box>
  </Container>
);

export default NotFound;
