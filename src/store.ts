import create from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  username: string;
  setUsername: (to: string) => void;
}

export const useStore = create<AppState>(
  persist(
    (set) => ({
      username: "aabuhijleh",
      setUsername: (to) => set({ username: to }),
    }),
    {
      name: "user-storage",
    }
  )
);
