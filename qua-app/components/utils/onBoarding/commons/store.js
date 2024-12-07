import { create } from "zustand";

export const userStore = create((set) => ({
  name: "",
  setName: (state) => set(() => ({ name: state })),

  gender: "",
  setGender: (state) => set(() => ({ gender: state })),

  year: "",
  setYear: (state) => set(() => ({ year: state })),

  month: "",
  setMonth: (state) => set(() => ({ month: state })),

  day: "",
  setDay: (state) => set(() => ({ day: state })),

  birth: "",
  setBirth: (state) => set(() => ({ birth: state })),

  type: 4,
  setType: (state) => set(() => ({ type: state })),

  detailTypes: [],
  setDetailTypes: (update) =>
    set((state) => {
      const updated = update(state.detailTypes || []);
      return { detailTypes: Array.isArray(updated) ? updated : [] };
    }),

  answers: [null, null, null, null, null, null],
  setAnswers: (state) => set(() => ({ answers: state })),

  interests: [],
  setInterests: (update) =>
    set((state) => {
      const updated = update(state.interests || []);
      return { interests: Array.isArray(updated) ? updated : [] };
    }),
}));
