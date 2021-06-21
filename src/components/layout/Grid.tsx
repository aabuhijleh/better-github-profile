import styled from "styled-components/macro";

export const Content = styled.main`
  display: grid;

  grid-template-columns:
    [full-start] 1fr 5rem [content-start] minmax(min-content, 120rem)
    [content-end] 1fr 5rem [full-end];

  @media only screen and (max-width: 768px) {
    grid-template-columns:
      [full-start] 1fr 2.5rem [content-start] minmax(min-content, 120rem)
      [content-end] 1fr 2.5rem [full-end];
  }

  & > * {
    grid-column: content-start / content-end;
  }

  counter-reset: section 0;
`;
