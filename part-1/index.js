const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="Dan" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
