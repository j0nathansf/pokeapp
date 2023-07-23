<script>
	import { onMount } from 'svelte';

	export let start = 0;
	export let end = 0;
	export let duration = 1250;

	let value = start;
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		value = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};

	onMount(() => {
		window.requestAnimationFrame(step);
	});
</script>

<span>{value}</span>
