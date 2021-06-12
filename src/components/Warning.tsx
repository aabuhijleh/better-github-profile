import { LinkUnderline } from "src/components/Link";
import { linkBlueColor, warningTextColor } from "src/styles/theme";
import styled from "styled-components/macro";

export const Warning = styled.h1`
  font-size: var(--fz-xxl);
  color: ${warningTextColor};

  ${LinkUnderline} {
    color: ${linkBlueColor};
  }
`;
