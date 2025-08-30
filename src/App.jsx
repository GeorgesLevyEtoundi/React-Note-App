import { useEffect, useState } from 'react';

// components
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
	const [notes, setNotes] = useState(function () {
		// get the notes from local storage
		const notes = JSON.parse(localStorage.getItem('notes'));

		return notes || [];
	});

	// set the notes to local storage
	useEffect(
		function () {
			localStorage.setItem('notes', JSON.stringify(notes));
		},
		[notes]
	);

	// delete note
	const deleteNoteHandler = id => {
		const notesArr = [...notes];
		const noteIdx = notes.findIndex(note => note.id === id);

		notesArr.splice(noteIdx, 1);

		setNotes(notesArr);
	};

	return (
		<>
			<div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold mb-4 text-center">
					Note App
				</h2>
				<NoteForm
					notes={notes}
					setNotes={setNotes}
				/>
				<NoteList
					notes={notes}
					deleteNoteHandler={deleteNoteHandler}
				/>
			</div>
		</>
	);
};

export default App;
