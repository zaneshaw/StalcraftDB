<script lang="ts">
	import { onMount } from "svelte";
	import ItemCard from "$lib/components/ItemCard.svelte";

	export let data: any;

	onMount(() => {
		console.log(data);
	});
</script>

<div class="mx-auto w-2/3">
	<h2>items</h2>
	<div class="grid grid-cols-8 gap-4">
		{#each data.items as item}
			<ItemCard {item} />
		{/each}
	</div>
</div>
