function App() {
	const [todos, setTodos] = React.useState([
		{ text: 'Learn React', isCompleted: false },
		{
			text: 'Meet Friend for Lunch',
			isCompleted: false,
		},
		{
			text: 'Build ToDo App',
			isCompleted: false,
		},
		{
			text: 'Fix Bugs',
			isCompleted: false,
		},
		{
			text: 'Push to Github',
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text: text, isCompleted: false }];
		setTodos(newTodos);
	};

	const removeToDo = (index) => {
		let temp = [...todos];
		temp.splice(index, 1);
		setTodos(temp);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, i) => (
					<ToDo index={i} key={i} todo={todo} remove={removeToDo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
