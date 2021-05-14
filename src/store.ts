import create from "zustand";
import queryString from "query-string";
import { defaults } from "src/defaults";

interface AppState {
  username: string;
  setUsername: (to: string) => void;
}

const username = queryString.parse(document.location.search)[
  "username"
] as string;

export const useStore = create<AppState>((set) => ({
  username: username || defaults.username,
  setUsername: (to) => set({ username: to }),
}));
