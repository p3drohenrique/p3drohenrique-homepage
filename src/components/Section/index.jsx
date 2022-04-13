import { StyledDiv } from './styles';

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    marginBottom={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
