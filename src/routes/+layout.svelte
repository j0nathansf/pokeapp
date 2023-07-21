<script>
  import "../app.css";
  import { page } from '$app/stores';
  let menus = [
    { name: 'Home', href: '/' },
    { name: 'Pokédex', href: '/pokedex' },
    { name: 'Legendaries', href: '/legendaries' },
    { name: 'Documentation', href: '/documentation' }
  ]
  let currentPage = $page.url.pathname
  let notFound = !!$page.error
  let screenSize
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if !notFound}
<header class="bg-third header-shadow z-10">
  <nav class="h-14 tablet:h-24 flex px-6 justify-between items-center max-w-screen-desktop mx-auto">
    <img class="h-8 tablet:h-12 desktop:h-16" src="/images/logo.svg" alt="pokemon website logo" draggable="false" />
    <ul class="flex gap-x-6 desktop:gap-x-[64px]">
      {#if screenSize < 768}
        <button>
          <img src="/icons/burger-menu.svg" alt="header menu burger" width="24" height="24"/>
        </button>
      {:else}
        {#each menus as menu}
          <li class="font-montserrat flex flex-col">
            <a href={menu.href} target="_self" rel="noreferrer">
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

<style>
  .header-shadow {
    box-shadow: 0 4px 16px 0 rgba(1, 28, 64, 0.20);
  }
  .active-link {
    padding-bottom: 16px;
    border-bottom: 3px solid #212121;
    pointer-events: none;
    border-radius: 24px;
  }
</style>