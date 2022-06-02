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
		<Person
			name="Steph"
			age={16}
			hobbies={['shooting 3s', 'exploring the Bay', 'golfing']}
		/>
		<Person
			name="Klay"
			age={32}
			hobbies={['playing basketball', 'playing with my dog', 'driving my boat']}
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
