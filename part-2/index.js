const App = () => (
	<div>
		<Tweet
			username="danvo"
			name="Dan"
			date="06/01/22"
			message="My first tweet!"
		/>
		<Tweet
			username="carl"
			name="carl"
			date="06/01/22"
			message="I make cool tweets!"
		/>
		<Tweet
			username="renee"
			name="renee"
			date="06/01/22"
			message="I want to travel and eat food!"
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
