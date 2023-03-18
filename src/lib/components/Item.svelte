<script lang="ts">
	export let data: any;

	$: cleanData = data.infoBlocks
		.map((infoBlock: any) => {
			const cleanBlock = (infoBlock.elements ?? []).map((detail: any) => {
				let value = null;
				let string = null;
				if (detail.type === "key-value") {
					value = [detail.key.lines.en, detail.value.lines?.en ?? detail.value.text];
					string = [detail.key.lines.en, detail.value.lines?.en ?? detail.value.text];
				} else if (detail.type === "numeric") {
					value = [detail.name.lines.en, detail.value];
					string = [detail.name.lines.en, detail.value.toString()];
				} else if (detail.type === "range") {
					value = [detail.name.lines.en, [detail.min, detail.max]];
					string = [
						detail.name.lines.en,
						`[${(detail.min >= 0 ? "+" : "") + detail.min}; ${
							(detail.max >= 0 ? "+" : "") + detail.max
						}]`
					];
				}
				return { type: detail.type, value, string };
			});
			return cleanBlock;
		})
		.filter((block: any) => block.length > 0);
</script>

<!-- <div class="w-fit bg-gray-700 p-2">
	<pre class="text-left">{JSON.stringify(cleanData, null, 4)}</pre>
</div> -->

<div class="mx-auto flex w-72 flex-col bg-gray-800 text-left text-sm text-gray-400">
	<div class="border-b border-gray-400 py-2 px-3">
		<h3 class="text-gray-100">Army First-Aid Kit</h3>
		<span>Drops upon death</span>
	</div>
	<div class="flex flex-col border-b border-gray-600 py-2 px-3">
		<div class="flex justify-between">
			<span>Class</span>
			<span>Medicine</span>
		</div>
		<div class="flex justify-between">
			<span>Weight</span>
			<span>0.6 kg</span>
		</div>
	</div>
	<div class="flex flex-col border-b border-gray-600 py-2 px-3">
		<div class="flex justify-between">
			<span>Purpose</span>
			<span>Healing</span>
		</div>
		<div class="flex justify-between">
			<span>Duration</span>
			<span class="text-gray-100">10 sec</span>
		</div>
	</div>
	<div class="flex flex-col border-b border-gray-600 py-2 px-3 text-green-400">
		<div class="flex justify-between">
			<span>Stamina regeneration</span>
			<span>10%</span>
		</div>
		<div class="flex justify-between">
			<span>Periodic healing</span>
			<span>6%</span>
		</div>
		<div class="flex justify-between">
			<span>Radiation</span>
			<span>-5</span>
		</div>
		<div class="flex justify-between">
			<span>Bleeding</span>
			<span>-1.5</span>
		</div>
	</div>
	<div class="flex flex-col py-2 px-3">
		A specialized medical kit for treating physical wounds and bleeding. The kit contains a
		tourniquet for stopping bleeding, an adrenaline injection, a weak antirad treatment, and a
		special regeneration drug.
	</div>
</div>
