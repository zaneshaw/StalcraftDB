<script lang="ts">
	import Item from "$lib/components/Item.svelte";

	export let data: any;
</script>

<h1>{data.name.lines.en}</h1>
<h4>&#8592; <a href="/items">Back</a></h4>
<Item {data} />
<div class="mx-auto w-fit">
	<pre class="text-left">{JSON.stringify(data, null, 4)}</pre>
</div>
<h4>&#8592; <a href="/items">Back</a></h4>
