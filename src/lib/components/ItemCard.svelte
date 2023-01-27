<script lang="ts">
	export let item: any;
</script>

<div class="flex h-full flex-col gap-2 rounded-md bg-gray-800 p-3 text-sm">
	<div class=" flex aspect-square items-center justify-center rounded-sm bg-gray-700">
		<img src={item?.image} alt="Item icon" class="object-cover" />
	</div>
	<div>
		<span>{item?.name}</span>
		<span>{item?.id}</span>
	</div>
</div>
