import create from "zustand";
import { persist } from "zustand/middleware";
import queryString from "query-string";
import { defaults } from "src/defaults";
import { Mode } from "src/types";

interface State {
  username: string;
  setUsername: (to: string) => void;
}

interface PersistentState {
  mode: Mode;
  setMode: (to: Mode) => void;
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
      mode: defaults.mode,
      setMode: (to) => set({ mode: to }),
    }),
    {
      name: "persistent-storage",
    }
  )
);
