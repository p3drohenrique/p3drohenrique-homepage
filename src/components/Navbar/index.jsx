import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import LinkItem from './LinkItem';
import Logo from '../Logo';
import ThemeToggleButton from '../ThemeToggleButton';

const Navbar = ({ path, ...rest }) => (
  <Box
    position="fixed"
    as="nav"
    width="100%"
    backgroundColor={useColorModeValue('#ffffff40', '#20202380')}
    style={{
      backdropFilter: 'blur(10px)',
    }}
    zIndex={1}
    {...rest}
  >
    <Container
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      maxWidth="container.md"
    >
      <Flex alignItems="center" marginRight={5}>
        <Heading as="h1" size="lg" letterSpacing="tighter">
          <Logo />
        </Heading>
      </Flex>

      <Stack
        hidden
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <LinkItem href="/works" path={path}>
          Trabalhos
        </LinkItem>

        <LinkItem href="/posts" path={path}>
          Posts
        </LinkItem>
      </Stack>

      <Box flex={1} align="right">
        <ThemeToggleButton />

        <Box hidden marginLeft={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />

            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>
                  Sobre
                </MenuItem>
              </NextLink>

              <NextLink href="/works" passHref>
                <MenuItem as={Link}>
                  Trabalhos
                </MenuItem>
              </NextLink>

              <NextLink href="/posts" passHref>
                <MenuItem as={Link}>
                  Posts
                </MenuItem>
              </NextLink>
            </MenuList>

          </Menu>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Navbar;
