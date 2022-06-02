const Tweet = (props) => {
	return (
		<ul>
			<li>Username: {props.username}</li>
			<li>Name: {props.name}</li>
			<li>Date Posted: {props.date}</li>
			<li>{props.message}</li>
		</ul>
	);
};
