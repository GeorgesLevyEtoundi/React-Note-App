const NoteList = ({ notes, deleteNoteHandler }) => {
	if (notes.length === 0) {
		return <p className="text-center text-gray-500">No notes yet</p>;
	}

	// change note list border color based on the priority
	const noteBorderColorChange = priority => {
		if (priority === 'High') {
			return 'red';
		}

		if (priority === 'Medium') {
			return 'orange';
		}

		if (priority === 'Low') {
			return 'green';
		}
	};

	return (
		<div className="space-y-4">
			{notes.map(note => (
				<div
					key={note.id}
					className="p-4 bg-white rounded-lg shadow-md border-l-4"
					style={{
						borderLeftColor: noteBorderColorChange(note.priority),
					}}
				>
					<h3 className="text-lg font-bold">{note.title}</h3>
					<p className="text-sm text-gray-600">
						<strong>Category:</strong> {note.category}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Priority:</strong> {note.priority}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Description:</strong> {note.description}
					</p>
					<button onClick={() => deleteNoteHandler(note.id)}>
						🗑 Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default NoteList;
