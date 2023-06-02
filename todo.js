function ToDo({ todo, index, remove }) {
	function handle() {
		remove(index);
	}
	return (
		<div className="todo">
			{todo.text}{' '}
			<button class="remove-button" onClick={handle}>
				Remove
			</button>
		</div>
	);
}
