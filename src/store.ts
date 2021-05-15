import create from "zustand";
import { persist } from "zustand/middleware";
import queryString from "query-string";
import { defaults } from "src/defaults";

type colorTheme = "dark" | "light";

interface State {
  username: string;
  setUsername: (to: string) => void;
}

interface PersistentState {
  theme: colorTheme;
  setTheme: (to: colorTheme) => void;
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
      theme: "dark",
      setTheme: (to) => set({ theme: to }),
    }),
    {
      name: "persistent-storage",
    }
  )
);
