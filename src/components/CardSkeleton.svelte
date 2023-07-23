<script>
    import Skeleton from '$components/Skeleton.svelte'
</script>

<div class="flex card-shadow rounded-8 overflow-hidden w-[328px] h-44 mx-auto">
    <div class="w-[35%] h-full pl-6 z-10 py-4 flex flex-col justify-between">
        <Skeleton height="18px" />
        <section class="flex items-center gap-x-2">
            <div class="flex flex-col gap-y-1">
                <span class="rounded-full overflow-hidden h-10 w-10 flex items-center justify-center">
                    <Skeleton height="100%" />
                </span>
                <Skeleton height="12px"/>
            </div>
            <div class="flex flex-col gap-y-1">
                <span class="rounded-full overflow-hidden h-10 w-10 flex items-center justify-center">
                    <Skeleton height="100%" />
                </span>
                <Skeleton height="12px"/>
            </div>
        </section>
        <section class="flex flex-wrap gap-x-3">
            <Skeleton width="60%" height="12px"/>
        </section>
    </div>
    <div class="w-[65%] h-full flex items-center justify-center">
        <Skeleton width="80%" height="80%"/>
    </div>
</div>

<style>
    .card-shadow {
        box-shadow: 4px 4px 4px 0px rgba(33, 33, 33, 0.10);
    }
</style>