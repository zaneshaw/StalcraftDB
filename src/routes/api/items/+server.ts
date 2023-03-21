import type { RequestHandler } from "./$types";
import items from "$lib/db/items/global/listing.json";

export const GET = (async ({ url }) => {
	const full = url.searchParams.get("full");
	const itemID = url.searchParams.get("id");
	let res;

	if (itemID) {
		const item = items.find((item) => item.data.split("/").at(-1)?.split(".")[0] === itemID);
		if (full) {
			res = await import(`/src/lib/db/items/global${item?.data}`/* @vite-ignore */);
			console.log(res);
		} else {
			res = item;
		}
	} else {
		res = { items };
	}

	return new Response(JSON.stringify(res), {
		status: 200
	});
}) satisfies RequestHandler;
