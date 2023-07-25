<script>
	let currentValue = 0;
	export let targetValue = 0;

	const updateCounter = () => {
		const inc = Math.floor((targetValue - currentValue) / 100);
		if (currentValue < targetValue && inc > 0) {
			currentValue += inc;
		} else {
			currentValue = targetValue;
		}
	};

	$: if (currentValue < targetValue) {
		setTimeout(updateCounter, 1);
	}
</script>

<span>{currentValue}</span>
