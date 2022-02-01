import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
