import styled from "styled-components/macro";
import { linkBlueColor, linkBlueBgColor } from "src/styles/theme";

export const Button = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    padding: 1rem 2rem;

    color: ${linkBlueColor};
    text-decoration: none;
    border-radius: var(--border-radius);
    border: 1px solid ${linkBlueColor};
    transition: var(--transition);
  }

  &:hover,
  &:focus {
    background-color: ${linkBlueBgColor};
    outline: none;
  }
`;
