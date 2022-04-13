import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../Navbar';
import NoSSR from '../NoSSR';
import VoxelModel from '../VoxelModel';

const Layout = ({ children, router }) => (
  <Box as="main" pb={8}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Pedro Henrique - Homepage</title>
    </Head>

    <Navbar path={router.asPath} />

    <Container maxW="container.md" pt={14}>
      <NoSSR>
        <VoxelModel />
      </NoSSR>

      {children}
    </Container>
  </Box>
);

export default Layout;
