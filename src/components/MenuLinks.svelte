<script>
	export let menus;
	export let currentPage;
</script>

{#each menus as menu}
	<li class="font-montserrat flex flex-col text-18">
		<a href={menu.href} target={menu.target} rel="noreferrer">
			{menu.name}
		</a>
		{#if menu.href === currentPage}
			<hr class="mt-2 border-t-dark border-solid border-t-[3px] rounded-4" />
		{/if}
	</li>
{/each}
