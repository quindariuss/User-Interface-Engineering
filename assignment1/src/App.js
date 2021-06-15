import Search from './search';
import posts from './words-small.json'
import { useState } from 'react';



const filterPosts = (posts, query) => {
	if (!query) {
		return posts;
	}

	return posts.filter((post) => {
		const postName = post.toLowerCase();
		return postName.includes(query);
	});
};

const App = () => {
	const { search } = window.location;
	const query = new URLSearchParams(search).get('s');
	const [searchQuery, setSearchQuery] = useState(query || '');
	const filteredPosts = filterPosts(posts, searchQuery);


	return (
	<div>
	<Search
		searchQuery={searchQuery}
		setSearchQuery={setSearchQuery}
	/>
	<ul>
		{filteredPosts.map(post => (
			<li>{post}</li>
		))}
	</ul>
</div>
	);
}


export default App;