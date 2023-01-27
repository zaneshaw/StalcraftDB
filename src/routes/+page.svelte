<script lang="ts">
	import { goto } from "$app/navigation";
	import image from "$lib/assets/favicon.png";
	import hero from "$lib/assets/hero_notext.jpg";
</script>

<div class="relative h-screen overflow-hidden">
	<img src={hero} alt="" class="absolute top-0 -z-10 opacity-20" />
	<div class="mx-auto flex h-full w-fit flex-col items-center justify-center gap-8">
		<img src={image} alt="" class="w-60" />
		<div class="flex flex-col gap-4">
			<h1>Your spot for Stalcraft</h1>
			<h1 class="text-sky-400">Weapons</h1>
		</div>
		<h3 class="w-3/5 text-gray-400">
			Find all your favourite items on <em class="glow text-gray-100">StalcraftDB</em> via
			<a href="https://eapi.stalcraft.net" target="_blank" rel="noreferrer"
				>EXBO's official Stalcraft API</a
			>.
		</h3>
		<div class="flex gap-4">
			<button on:click={() => {goto("/items")}} class="btn">Explore</button>
			<button class="btn btn-outline">GitHub</button>
		</div>
	</div>
</div>
<div class="flex flex-col items-center py-12">
	<h1>test</h1>
</div>
