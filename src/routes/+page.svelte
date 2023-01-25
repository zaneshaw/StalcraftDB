<script lang="ts">
	import image from "$lib/images/favicon.png";
</script>

<div class="flex h-screen flex-col items-center justify-center gap-8 text-center">
	<img src={image} alt="" class="w-60" />
	<div class="flex flex-col gap-4">
		<h1>Your spot for Stalcraft</h1>
		<h1 class="text-sky-400">Weapons</h1>
	</div>
	<h3 class="text-gray-400">
		Find all your favourite items on <em class="glow text-red-100">StalcraftDB</em> via
		<a href="https://eapi.stalcraft.net" target="_blank" rel="noreferrer">
			EXBO's official Stalcraft API
		</a>
	</h3>
	<div class="flex gap-4">
		<button class="btn">Explore</button>
		<button class="btn btn-outline">GitHub</button>
	</div>
</div>
