<script lang="ts">
	export let item: any;
	$: icon = `src/lib/db/items/global${item.icon}`;
</script>

<div class="flex h-full flex-col gap-2 rounded-md bg-gray-800 p-3 text-sm">
	<div class=" flex aspect-square items-center justify-center rounded-sm bg-gray-700">
		<img src={icon} alt="Item icon" class="object-cover" />
	</div>
	<div>
		<span class="text-xs">{item.name.lines.en}</span>
	</div>
</div>
