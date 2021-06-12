import styled from "styled-components/macro";

export const Grid = styled.div`
  display: grid;

  grid-template-rows: var(--nav-height);
  grid-template-columns:
    [full-start] 1fr [content-start] minmax(min-content, 120rem)
    [content-end] 1fr [full-end];

  & > * {
    grid-column: content-start / content-end;
  }

  nav {
    grid-column: full-start / full-end;
  }
`;
