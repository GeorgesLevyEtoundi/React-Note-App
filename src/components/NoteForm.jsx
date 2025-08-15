import { useState } from 'react';

const NoteForm = ({ notes, setNotes }) => {
	const [formData, setFormData] = useState({
		title: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});

	const [isFormVisible, setIsFormVisible] = useState(false);

	// Handle form change
	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData({ ...formData, [name]: value });
	};

	function handleSubmit(e) {
		e.preventDefault();

		// validation
		if (!formData.title || !formData.description) return;

		// create new note
		const newNote = { id: Date.now(), ...formData };

		// add note to state
		setNotes([newNote, ...notes]);

		// reset form
		setFormData({
			title: '',
			priority: 'Medium',
			category: 'Work',
			description: '',
		});
	}

	return (
		<>
			<button
				onClick={() => setIsFormVisible(!isFormVisible)}
				className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
			>
				{isFormVisible ? 'Hide form ❌' : 'Show form ➕'}
			</button>
			{isFormVisible && (
				<form
					onSubmit={handleSubmit}
					className="mb-6"
				>
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block font-semibold"
						>
							Title
						</label>
						<input
							name="title"
							type="text"
							className="w-full p-2 border rounded-lg"
							value={formData.title}
							onChange={handleChange}
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
							name="priority"
							type="text"
							className="w-full p-2 border rounded-lg"
							value={formData.priority}
							onChange={handleChange}
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
							name="category"
							type="text"
							className="w-full p-2 border rounded-lg"
							value={formData.category}
							onChange={handleChange}
						>
							<option value="Work">💼 Work</option>
							<option value="Personal">🏠 Personal</option>
							<option value="Ideas">💡 Ideas</option>
						</select>
					</div>
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block font-semibold"
						>
							Description
						</label>
						<textarea
							name="description"
							type="text"
							className="w-full p-2 border rounded-lg"
							value={formData.description}
							onChange={handleChange}
						></textarea>
					</div>
					<button className="w-full bg-purple-700 text-white py-4 rounded-lg cursor-pointer hover:bg-purple-900 hover:shadow-lg transition duration-300 hover:-translate-y-1">
						Add Note
					</button>
				</form>
			)}
		</>
	);
};

export default NoteForm;
