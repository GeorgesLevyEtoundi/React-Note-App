import { useState } from 'react';

const NoteForm = () => {
	const [title, setTitle] = useState('');
	const [priority, setPriority] = useState('Medium');
	const [category, setCategory] = useState('Work');
	const [description, setDescription] = useState('');

	return (
		<form className="mb-6">
			<div className="mb-4">
				<label
					htmlFor="title"
					className="block font-semibold"
				>
					Title
				</label>
				<input
					type="text"
					className="w-full p-2 border rounded-lg"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="priority"
					className="block font-semibold"
				>
					Priority
				</label>
				<select
					type="text"
					className="w-full p-2 border rounded-lg"
					value={priority}
					onChange={e => setPriority(e.target.value)}
				>
					<option value="High">🔴 High</option>
					<option value="Medium">🟡 Medium</option>
					<option value="Low">🟢 Low</option>
				</select>
			</div>
			<div className="mb-4">
				<label
					htmlFor="category"
					className="block font-semibold"
				>
					Category
				</label>
				<select
					type="text"
					className="w-full p-2 border rounded-lg"
					value={category}
					onChange={e => setCategory(e.target.value)}
				>
					<option value="Work">Work</option>
					<option value="House">House</option>
					<option value="Friends">Friends</option>
				</select>
			</div>
		</form>
	);
};

export default NoteForm;
