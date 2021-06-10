import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
      textSecondary: string;
      linkBlue: string;
      border: string;
    };
  }
}
