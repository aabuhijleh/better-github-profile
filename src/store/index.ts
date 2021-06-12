import create from "zustand";
import { persist } from "zustand/middleware";
import { getUsernameFromUrl } from "src/utils/getUsernameFromUrl";
import { defaults } from "src/constants/defaults";
import { Mode } from "src/styled";

interface State {
  username: string;
  setUsername: (to: string) => void;
  email: string;
  setEmail: (to: string) => void;
}

interface PersistentState {
  mode: Mode;
  setMode: (to: Mode) => void;
  soundEnabled: boolean;
  setSoundEnabled: (to: boolean) => void;
}

export const useStore = create<State>((set) => ({
  username: getUsernameFromUrl(),
  setUsername: (to) => set({ username: to }),
  email: "",
  setEmail: (to) => set({ email: to }),
}));

export const usePersistentStore = create<PersistentState>(
  persist(
    (set) => ({
      mode: defaults.mode,
      setMode: (to) => set({ mode: to }),
      soundEnabled: defaults.soundEnabled,
      setSoundEnabled: (to) => set({ soundEnabled: to }),
    }),
    {
      name: "persistent-storage",
    }
  )
);
