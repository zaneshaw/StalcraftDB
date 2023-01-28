<script lang="ts">
	import { onMount } from "svelte";

	export let data: any;
	$: {
		console.log(data);
	}
</script>

<h1>{data.name.lines.en}</h1>
<h4>&#8592; <a href="/items">Back</a></h4>
