<script>
    import ButtonLink from "../components/ButtonLink.svelte"
</script>

<main class="yellow-gradient h-full flex flex-col justify-between py-8 desktop:py-10 tablet:px-10">
    <section class="h-3/5 tablet:h-1/4">
        <img class="w-full h-full" src="/images/home-banner.svg" alt="pikachu home banner" draggable="false">
    </section>
    <section class="flex gap-9 flex-col items-center">
        <div class="flex flex-col gap-1.5">
            <p class="font-karla text-40 tablet:text-72 font-regular text-center">
                <span class="font-bold">Find</span>
                all your favorite
                <span class="font-bold">Pokemon</span>
            </p>
            <p class="font-karla text-24 text-center">You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        </div>
        <ButtonLink text="See pokemons" href="/pokedex" isPrimary={false} size={24} />
    </section>
    <section class="mt-8 desktop:mt-10 flex flex-col-reverse justify-between text-center items-center tablet:flex-row">
        <p class="font-montserrat text-16">Make with ❤️ for the PokéSpartans team Platzi Master</p>
        <p class="font-karla font-bold text-18">Ours Team</p>
    </section>
</main>

<style>
    .yellow-gradient {
        background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    }
</style>