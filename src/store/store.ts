import create from "zustand";

type State = {
	bears: number;
};

type Action = {
	increase: (by: number) => void;
	reset: () => void;
};

export const useBearStore = create<State & Action>()((set) => ({
	bears: 0,
	increase: (by) => set((state) => ({ bears: state.bears + by })),
	reset: () => set({ bears: 0 }),
}));
