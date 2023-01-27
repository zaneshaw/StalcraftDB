<script lang="ts">
	import ItemCard from "$lib/components/ItemCard.svelte";
</script>

<div class="mx-auto w-2/3">
	<h2>items</h2>
	<div class="grid grid-cols-8 gap-4">
		{#each { length: 20 } as _}
			<ItemCard item={null} />
		{/each}
	</div>
</div>
