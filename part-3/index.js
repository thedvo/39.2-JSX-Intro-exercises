const App = () => (
	<div>
		<Person
			name="Dan"
			age={25}
			hobbies={[
				'watching basketball',
				'trying new foods',
				'listening to hip-hop',
			]}
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
