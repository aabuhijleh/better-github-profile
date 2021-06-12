import { textSecondayColor } from "src/styles/theme";
import styled from "styled-components/macro";

export const HeadingSecondary = styled.h2`
  font-size: var(--fz-xxl);
  line-height: 1.4;
`;

export const HeadingTertiary = styled.h3`
  font-size: var(--fz-lg);
  font-weight: 300;
  line-height: 1;
  color: ${textSecondayColor};
`;
