import styled from "styled-components/macro";
import { linkBlueColor, textColor } from "src/styles/theme";

export const Link = styled.a`
  &:link,
  &:visited {
    padding: 1rem;
    text-decoration: none;
    color: ${textColor};
    transition: var(--transition);
  }

  &:hover {
    color: ${linkBlueColor};
  }
`;
