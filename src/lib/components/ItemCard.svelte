<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	export let item: any;
	$: icon = `src/lib/db/items/global${item.icon}`;
	$: id = item.data.split("/").at(-1)?.split(".")[0];
</script>

<button {id} on:click={() => {goto(`items/${id}`)}} class="flex h-full flex-col items-center gap-2 rounded-md bg-gray-800 p-3 text-sm">
	<div class=" flex aspect-square items-center justify-center rounded-sm bg-gray-700">
		<img src={icon} alt="Item icon" class="object-cover" />
	</div>
	<span class="text-xs">{item.name.lines.en}</span>
</button>
