import type { RequestHandler } from "./$types";

export const GET = (({ url }) => {
	const limit = url.searchParams.get("limit") ?? 50;

	return new Response(JSON.stringify({ message: `Here are your items! (${limit})` }), {
		status: 200
	});
}) satisfies RequestHandler;
