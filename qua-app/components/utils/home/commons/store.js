import { create } from "zustand";

export const homeStore = create((set) => ({
  fitness: { skin: 0, ample: 0, lotion: 0, else: 0 },
  updateFitness: (key, value) =>
    set((state) => ({
      fitness: { ...state.fitness, [key]: value },
    })),
}));
