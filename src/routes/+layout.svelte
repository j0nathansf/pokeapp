<script>
	import '../app.css';
	import { page } from '$app/stores';
	import clsx from 'clsx';
	let menus = [
		{ name: 'Home', href: '/', target: '_self' },
		{ name: 'Pokédex', href: '/pokedex', target: '_self' },
		{ name: 'Legendaries', href: '/legendaries', target: '_self' },
		{ name: 'Documentation', href: 'https://pokeapi.co/docs/v2', target: '_blank' }
	];
	let currentPage = $page.url.pathname;
	let notFound = !!$page.error;
	let screenSize;
	let isMenuOpen = false;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if !notFound}
	<header class={clsx('bg-third header-shadow z-10', screenSize < 768 && 'relative')}>
		<nav
			class="h-14 tablet:h-24 flex px-6 justify-between items-center max-w-screen-medium mx-auto"
		>
			<img
				class="h-8 tablet:h-12 desktop:h-16"
				src="/images/logo.svg"
				alt="pokemon website logo"
				draggable="false"
			/>
			<ul class="flex gap-x-6 desktop:gap-x-[64px]">
				{#if screenSize < 768}
					{#if isMenuOpen}
						<div
							class="fixed top-0 left-0 bg-dark w-screen h-screen opacity-50"
							on:click={() => (isMenuOpen = false)}
						/>
						<div class="flex flex-col absolute top-0 left-0 w-screen h-screen">
							<div class=" py-10 rounded-b-16 !opacity-100 bg-primary z-10 flex flex-col gap-y-9">
								<img
									class="w-36 h-14 mx-auto"
									src="/images/logo.svg"
									alt="pokemon website logo"
									draggable="false"
								/>
								<ul class="flex flex-col gap-y-4 items-center">
									{#each menus as menu}
										<li class="font-montserrat flex flex-col text-24">
											<a href={menu.href} target={menu.target} rel="noreferrer">
												{menu.name}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					{:else}
						<button on:click={() => (isMenuOpen = true)}>
							<img src="/icons/burger-menu.svg" alt="header menu burger" width="24" height="24" />
						</button>
					{/if}
				{:else}
					{#each menus as menu}
						<li class="font-montserrat flex flex-col">
							<a href={menu.href} target={menu.target} rel="noreferrer">
								{menu.name}
							</a>
							{#if menu.href === currentPage}
								<hr class="mt-2 border-t-dark border-solid border-t-[3px] rounded-4" />
							{/if}
						</li>
					{/each}
				{/if}
			</ul>
		</nav>
	</header>
{/if}

<slot />
