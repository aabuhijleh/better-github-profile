import create from "zustand";

interface AppState {
  username: string;
  setUsername: (to: string) => void;
}

export const useStore = create<AppState>((set) => ({
  username: "aabuhijleh",
  setUsername: (to) => set({ username: to }),
}));
