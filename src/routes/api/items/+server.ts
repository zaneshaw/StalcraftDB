import type { RequestHandler } from "./$types";
import items from "$lib/db/items/global/listing.json";

export const GET = (({ url }) => {
	const itemID = url.searchParams.get("id");
	const res = itemID
		? items.find((item) => item.data.split("/").at(-1)?.split(".")[0] === itemID)
		: { items };

	return new Response(JSON.stringify(res), {
		status: 200
	});
}) satisfies RequestHandler;
