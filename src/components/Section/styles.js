import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

export const StyledDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition';
  },
});
