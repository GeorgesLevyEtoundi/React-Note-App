import { useState } from 'react';

// components
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextareaInput from './inputs/TextareaInput';

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
					<TextInput
						label="Title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required={true}
					/>
					<SelectInput
						label="Priority"
						name="priority"
						value={formData.priority}
						onChange={handleChange}
						required={true}
						options={[
							{ label: '🔴 High', value: 'High' },
							{ label: '🟠 Medium', value: 'Medium' },
							{ label: '🟢 Low', value: 'Low' },
						]}
					/>
					<SelectInput
						label="Category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						options={[
							{ label: '💼 Work', value: 'Work' },
							{ label: '🏠 Personal', value: 'Personal' },
							{ label: '💡 Ideas', value: 'Ideas' },
						]}
						required={true}
					/>
					<TextareaInput
						label="Description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						required={false}
					/>
					<button className="w-full bg-purple-700 text-white py-4 rounded-lg cursor-pointer hover:bg-purple-900 hover:shadow-lg transition duration-300 hover:-translate-y-1">
						Add Note
					</button>
				</form>
			)}
		</>
	);
};

export default NoteForm;
