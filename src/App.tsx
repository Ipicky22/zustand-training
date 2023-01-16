import { useState } from "react";
import {
	Button,
	Checkbox,
	Container,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	TextField,
	Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStore } from "./todoStore";

const App = () => {
	const [todoText, setTodoText] = useState("");
	const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();

	return (
		<Container maxWidth='xs'>
			<Typography variant='h3'>To-Do's</Typography>
			<TextField
				label='Todo Description'
				required
				variant='outlined'
				fullWidth
				onChange={(e) => setTodoText(e.target.value)}
				value={todoText}
			/>
			<Button
				fullWidth
				variant='outlined'
				color='primary'
				onClick={() => {
					if (todoText.length) {
						addTodo(todoText);
						setTodoText("");
					}
				}}>
				Add Item
			</Button>
			<List>
				{todos.map((todo) => (
					<ListItem key={todo.id}>
						<ListItemIcon>
							<Checkbox
								edge='start'
								checked={todo.completed}
								onChange={() => toggleCompletedState(todo.id)}
							/>
						</ListItemIcon>
						<ListItemText key={todo.id}>
							{todo.description}
						</ListItemText>
						<ListItemSecondaryAction>
							<IconButton
								onClick={() => {
									removeTodo(todo.id);
								}}>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default App;
