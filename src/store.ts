import create from "zustand";
import { persist } from "zustand/middleware";
import queryString from "query-string";
import { defaults } from "src/defaults";
import { ColorTheme } from "src/types";

interface State {
  username: string;
  setUsername: (to: string) => void;
}

interface PersistentState {
  theme: ColorTheme;
  setTheme: (to: ColorTheme) => void;
}

const username = queryString.parse(document.location.search)[
  "username"
] as string;

export const useStore = create<State>((set) => ({
  username: username || defaults.username,
  setUsername: (to) => set({ username: to }),
}));

export const usePersistentStore = create<PersistentState>(
  persist(
    (set) => ({
      theme: defaults.theme,
      setTheme: (to) => set({ theme: to }),
    }),
    {
      name: "persistent-storage",
    }
  )
);
