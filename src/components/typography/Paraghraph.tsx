import styled from "styled-components/macro";

export const Paraghraph = styled.p`
  font-size: var(--fz-md);

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
