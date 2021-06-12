import styled from "styled-components/macro";
import { linkBlueColor, textColor, textSecondayColor } from "src/styles/theme";

export const Link = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    color: ${textColor};
    transition: var(--transition);
  }

  & > span {
    color: ${textColor};
    font-weight: 700;
    transition: var(--transition);
  }

  &&:hover,
  &:hover > * {
    color: ${linkBlueColor};
  }
`;

export const LinkSecondary = styled(Link)`
  &:link,
  &:visited {
    color: ${textSecondayColor};
  }
`;

export const LinkUnderline = styled(Link)`
  display: inline-block;

  &::after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    background: ${linkBlueColor};
    transition: var(--transition);
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  &&:focus {
    color: ${linkBlueColor};
    outline: none;
  }
`;
