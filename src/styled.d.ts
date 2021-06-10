import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: Mode;
  }
}

type Mode = "dark" | "light";
