<script>
    import ButtonLink from '../components/ButtonLink.svelte'
</script>


<div class="bg-danger h-screen flex">
    <main class="flex flex-col justify-center items-center max-w-screen-desktop mx-auto h-full">
        <section class="relative tablet:w-[740px] w-full h-[200px] tablet:h-[400px] mb-6">
            <img class="absolute z-20 w-full h-full" src="/images/team-rocket.svg" alt="trio team rocket" draggable="false" />
            <img class="absolute z-10 w-full h-full" src="/images/404.svg" alt="not found" draggable="false" />
        </section>
        <section class="flex flex-col w-full gap-14 items-center">
            <p class="text-center gap-0.5">
                <span class="font-karla text-white text-24 tablet:text-40 font-bold">The rocket team</span>
                <span class="font-karla text-black text-24 tablet:text-40 font-bold">has won this time.</span>
            </p>
            <ButtonLink text="Return" href="/" isPrimary={true} size={16} />
        </section>
    </main>
</div>