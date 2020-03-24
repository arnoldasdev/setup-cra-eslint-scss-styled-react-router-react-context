import styled, { css } from 'styled-components';
import { AnchorButton } from 'components/generic-styled';
import breakpoints from 'styles/styled/var/breakpoints';
import colors from 'styles/styled/var/colors';
import logo from 'logo.svg';

export const Box = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0 2px 4px black;
  background-color: ${colors.darker};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Background = styled.div`
  width: 100%;
  height: 20vw;
  background: url(${logo}) no-repeat center/contain;
  ${css`
    @media only screen and (max-width: ${breakpoints.sm}) {
      height: 40vw;
    }
  `}
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25em;
  align-items: flex-start;
  ${css`
    @media only screen and (max-width: ${breakpoints.md}) {
      flex-direction: column;
      align-items: initial;
    }
  `}
`;

export const Content = styled.span`
  margin: 0 2vw 0 0;
  ${css`
    @media only screen and (max-width: ${breakpoints.md}) {
      margin: 0 0 2vw 0;
    }
  `}
`;

const Button = styled(AnchorButton)`
  padding: 0.75em;
`;

export { Button as AnchorButton };
