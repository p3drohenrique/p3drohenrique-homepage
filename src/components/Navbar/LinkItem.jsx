import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <NextLink style={{ marginTop: 0 }} href={href} passHref>
      <Link
        marginTop={0}
        padding={1}
        backgroundColor={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
