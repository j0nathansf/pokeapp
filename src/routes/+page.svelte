<script>
    import ButtonLink from "$components/ButtonLink.svelte"
    import Footer from "$components/Footer.svelte"
</script>

<main class="yellow-gradient py-8 desktop:py-10 tablet:px-10 medium:px-0 overflow-hidden h-[calc(100vh-56px)] tablet:h-full medium:h-[calc(100vh-96px)]">
    <div class="max-w-screen-medium px-6 flex flex-col justify-between medium:justify-normal mx-auto medium:relative h-full">
        <section class="h-3/5 medium:absolute medium:w-[824px] medium:h-[678px] medium:top-[47%] medium:-translate-y-1/2 medium:right-[10%] medium:translate-x-1/3">
            <img class="w-full h-full" src="/images/home-banner.svg" alt="pikachu home banner" draggable="false">
        </section>
        <section class="flex gap-9 flex-col items-center medium:items-start medium:h-full medium:justify-center">
            <div class="flex flex-col gap-1.5 medium:w-1/2 medium:gap-9">
                <p class="font-karla text-40 tablet:text-72 font-regular text-center medium:text-left">
                    <span class="font-bold">Find</span>
                    all your favorite
                    <span class="font-bold">Pokemon</span>
                </p>
                <p class="font-karla text-24 text-center medium:text-left">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
            </div>
            <ButtonLink text="See pokemons" href="/pokedex" isPrimary={false} size={24} />
        </section>
        <Footer />
    </div>
</main>

<style>
    .yellow-gradient {
        background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    }
</style>