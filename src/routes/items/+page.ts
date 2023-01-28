import type { PageLoad } from "./$types";

export const load = (({ fetch }) => {
	const fetchItems = async () => {
		const res = await fetch("/api/items");
		const data = await res.json();
		return data;
	};

	return fetchItems();
}) satisfies PageLoad;
