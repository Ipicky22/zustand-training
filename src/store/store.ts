import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
	bears: number;
};

type Action = {
	increase: (by: number) => void;
	reset: () => void;
};

export const useBearStore = create<State & Action>()(
	persist(
		(set, get) => ({
			bears: 0,
			increase: (by) => set((state) => ({ bears: get().bears + by })),
			reset: () => set({ bears: 0 }),
		}),
		{
			name: "test",
			getStorage: () => localStorage,
		}
	)
);
