
const clear = () =>{

}
const SearchBar = ({ searchQuery, setSearchQuery }) => (
	<form action="/" method="get">

		<input
			value={searchQuery}
			autoComplete="off"
			onChange={event => setSearchQuery(event.target.value)}

			type="text"
			id="header-search"
			placeholder="Search Words"
			name="s"
		/>
		<button type="reset">Reset</button>
	</form>
);

export default SearchBar;