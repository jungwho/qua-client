import { create } from "zustand";

export const useStore = create((set) => ({
  isStart: true,
  setIsStart: () => set((state) => ({ isStart: state })),
}));

export const userStore = create((set) => ({
  name: "",
  setName: (state) => set(() => ({ name: state })),
}));
