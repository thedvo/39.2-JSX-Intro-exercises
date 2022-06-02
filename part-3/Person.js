const Person = (props) => {
	let display;
	if (props.age > 18) {
		display = 'please go vote!';
	} else {
		display = 'you must be 18 to vote.';
	}

	// add ternary operator to determine how to display name.
	// if name is more than 8 characters, only display the first 6.
	let name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;

	return (
		<div>
			<p>"Learn some information about this person"</p>
			<p>Name: {name}</p>
			<p>Age: {props.age}</p>
			<h3>{display}</h3>
			<p>Hobbies</p>
			<ul>
				{props.hobbies.map((h) => (
					<li>{h}</li>
				))}
			</ul>
		</div>
	);
};
