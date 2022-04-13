import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';

import { LogoBox } from './styles';

const Logo = () => {
  const chocoLoveImage = `/images/chocolove${useColorModeValue('', '-dark')}.png`;
  const chocoLoveHoverImage = `/images/chocolove${useColorModeValue('', '-dark')}-hover.png`;
  const [chocoLoveLogo, setChocoLoveLogo] = useState(chocoLoveImage);

  const handleMouseEnter = useCallback(() => {
    setTimeout(() => {
      setChocoLoveLogo(chocoLoveHoverImage);
    }, 150);
  }, [chocoLoveHoverImage]);

  const handleMouseLeave = useCallback(() => {
    setChocoLoveLogo(chocoLoveImage);
  }, [chocoLoveImage]);

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image src={chocoLoveLogo} width={25} height={25} alt="Logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="bold"
            marginLeft={3}
          >
            Pedro Henrique
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
