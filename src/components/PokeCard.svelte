<script>
	export let pokemonData;
</script>

<div class="flex card-shadow rounded-8 overflow-hidden w-full max-w-[328px] h-44 mx-auto">
	<div class="w-[35%] h-full pl-6 z-10 py-4 flex flex-col justify-between">
		<p class="font-karla text-18 font-bold capitalize">{pokemonData.name}</p>
		<section class="flex gap-x-3">
			{#each pokemonData.stats as stats}
				{#if ['attack', 'defense'].includes(stats.stat.name)}
					<div class="flex flex-col items-center font-karla">
						<span
							class="text-16 font-regular rounded-full border-[3px] border-dark p-1.5 h-10 w-10 flex items-center justify-center text-dark"
						>
							{stats['base_stat']}
						</span>
						<span class="text-gray-dark text-12 capitalize">{stats.stat.name}</span>
					</div>
				{/if}
			{/each}
		</section>
		<section class="flex gap-x-3">
			{#each pokemonData.types as types}
				<span class="font-montserrat capitalize text-12 rounded-12 px-2 py-1 bg-grass tag-shadow"
					>{types.type.name}</span
				>
			{/each}
		</section>
	</div>
	<div class="w-[65%] bg-third h-full">
		<img
			src={pokemonData['sprites']['other']['official-artwork']['front_default']}
			alt={`${pokemonData.name} picture`}
			draggable="false"
			class="h-full w-full object-contain"
		/>
	</div>
</div>
