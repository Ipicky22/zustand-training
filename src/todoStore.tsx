import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./model/Todo";

interface State {
	todos: Todo[];
}

interface Action {
	addTodo: (description: string) => void;
	removeTodo: (id: string) => void;
	toggleCompletedState: (id: string) => void;
}

export const useStore = create<State & Action>()((set, get) => ({
	todos: [],
	addTodo: (description: string) => {
		set(() => ({
			todos: [
				...get().todos,
				{
					id: uuidv4(),
					description,
					completed: false,
				} as Todo,
			],
		}));
	},
	removeTodo: (id) => {
		set(() => ({
			todos: get().todos.filter((todo) => todo.id !== id),
		}));
	},
	toggleCompletedState: (id) => {
		set(() => ({
			todos: get().todos.map((todo) =>
				todo.id === id
					? ({ ...todo, completed: !todo.completed } as Todo)
					: todo
			),
		}));
	},
}));
