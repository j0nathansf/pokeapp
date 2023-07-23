<script>
	import clsx from 'clsx';
	export let text;
	export let href;
	export let size = 16;
	export let isPrimary = true;
</script>

<a
	{href}
	target="_self"
	rel="noreferrer"
	class={clsx(
		'px-10 pt-2 pb-3.5 rounded-12 shadow-button',
		'tablet:px-9 tablet:pb-5 tablet:pt-4',
		isPrimary ? 'bg-primary' : 'bg-grass'
	)}
>
	<span class="text-black font-karla font-bold text-{size} tablet:text-24">{text}</span>
</a>
