import create from "zustand";
import queryString from "query-string";
import { defaults } from "src/defaults";

type colorTheme = "dark" | "light";

interface AppState {
  username: string;
  setUsername: (to: string) => void;
  theme: colorTheme;
  setTheme: (to: colorTheme) => void;
}

const username = queryString.parse(document.location.search)[
  "username"
] as string;

export const useStore = create<AppState>((set) => ({
  username: username || defaults.username,
  setUsername: (to) => set({ username: to }),
  theme: "dark",
  setTheme: (to) => set({ theme: to }),
}));
