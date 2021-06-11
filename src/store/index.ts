import create from "zustand";
import { persist } from "zustand/middleware";
import { getUsernameFromUrl } from "src/utils/getUsernameFromUrl";
import { defaults } from "src/constants/defaults";
import { Mode } from "src/styled";

interface State {
  username: string;
  setUsername: (to: string) => void;
}

interface PersistentState {
  mode: Mode;
  setMode: (to: Mode) => void;
}

export const useStore = create<State>((set) => ({
  username: getUsernameFromUrl(),
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
