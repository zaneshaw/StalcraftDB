import type { PageLoad } from "./$types";

export const load = (({ fetch, params }) => {
	const fetchItem = async () => {
		const res = await fetch(`/api/items?id=${params.slug}`);
		const data = await res.json();
		return data;
	};
	
	return fetchItem();
}) satisfies PageLoad;
