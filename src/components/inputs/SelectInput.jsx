const SelectInput = ({
	label,
	value,
	name,
	onChange,
	required = true,
	options,
}) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="block font-semibold"
			>
				{label}
			</label>
			<select
				name={name}
				type="text"
				className="w-full p-2 border rounded-lg"
				value={value}
				onChange={onChange}
				required={required}
			>
				{options.map(({ label, value }) => (
					<option
						key={value}
						value={value}
					>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectInput;
