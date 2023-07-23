<script>
	import { onMount } from 'svelte';
	import Footer from '$components/Footer.svelte';
	import PokeCard from '$components/PokeCard.svelte';
	import CardSkeleton from '$components/CardSkeleton.svelte';
	import AnimatedValue from '$components/AnimatedValue.svelte';
	let searchValue = '';
	let cardsNumber = 6;
	let offset = 20 * Math.floor(Math.random() * 40);
	let data = {
		loading: true,
		pokemonList: [],
		total: 0,
		nextPageLink: '',
		previousPageLink: ''
	};

	onMount(async () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=25`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`An error occurred - Status code : ${response.status}`);
				}
				return response.json();
			})
			.then(async (response) => {
				data.total = response.count;
				data.previousPageLink = response.previous;
				data.nextPageLink = response.next;
				for (const { url } of response.results) {
					const pokemonDataResponse = await fetch(url);
					if (pokemonDataResponse.ok) {
						const pokemonData = await pokemonDataResponse.json();
						data.pokemonList.push(pokemonData);
					}
				}
			})
			.catch((error) => error.message)
			.finally(() => (data.loading = false));
	});
</script>

<main class="h-auto py-8 desktop:py-10 tablet:px-10 medium:px-0 overflow-hidden tablet:h-full">
	<div
		class="gap-8 max-w-screen-medium px-6 flex flex-col justify-between medium:justify-normal mx-auto medium:relative h-full"
	>
		<section class="flex flex-col gap-9">
			<p class="font-montserrat text-center text-24 tablet:text-36">
				<AnimatedValue start={0} end={data.total} duration={500} />
				<span class="font-bold">Pokemons</span> for you to choose your favorite
			</p>
			<input
				class="rounded-40 text-12 px-5 bg-white medium:px-8 py-2 tablet:text-16 medium:py-4 font-montserrat"
				bind:value={searchValue}
				type="text"
				placeholder="Search a pokemon..."
			/>
		</section>
		<section class="grid grid-cols-1 tablet:grid-cols-2 medium:grid-cols-3 gap-y-12 gap-x-6">
			{#if data.loading || !data.pokemonList.length}
				<!-- eslint-disable @typescript-eslint/no-unused-vars -->
				{#each Array(cardsNumber) as _}
					<CardSkeleton />
				{/each}
			{:else}
				{#each data.pokemonList as pokemonData}
					<PokeCard {pokemonData} />
				{/each}
			{/if}
		</section>
		<Footer />
	</div>
</main>
