import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout/Main';
import Fonts from '../components/Fonts';
import theme from '../lib/theme';

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Fonts />

    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default Website;
