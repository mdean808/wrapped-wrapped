<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import type { RaycastWrapped } from '$lib/types/raycast';

  interface Props {
    active: boolean;
    data: RaycastWrapped;
  }

  let { active, data }: Props = $props();

  const daysInstalled = $derived(Math.floor(data.installation.daysAgo / 365));
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-4 text-5xl font-bold text-pastel-red" in:fly={{ y: -30, duration: 500 }}>
      raycast
    </h1>
    <h2 class="mb-8 text-xl font-bold text-neutral-400" in:fade={{ duration: 400, delay: 200 }}>
      apparently he's a "{data.personalityCard.toLowerCase()}"
    </h2>

    <div class="grid max-w-5xl grid-cols-4 gap-4">
      <!-- Total Opens - Feature Card -->
      <div
        class="flex flex-col items-center justify-center rounded-2xl bg-pastel-red px-6 py-6"
        in:fly={{ y: 30, duration: 400, delay: 200 }}
      >
        <span class="text-6xl font-bold text-white">{data.usage.totalOpens.toLocaleString()}</span>
        <span class="text-sm tracking-wide text-white/80">total opens</span>
        <span class="mt-1 text-xs text-white/60">{daysInstalled}+ years of use</span>
      </div>

      <!-- Total Actions -->
      <div
        class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
        in:fly={{ y: 30, duration: 400, delay: 300 }}
      >
        <span class="text-4xl font-bold text-pastel-red"
          >{data.usage.totalActions.toLocaleString()}</span
        >
        <span class="text-xs tracking-wide text-neutral-400">actions run</span>
      </div>

      <!-- Most Active Day -->
      <div
        class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
        in:fly={{ y: 30, duration: 400, delay: 400 }}
      >
        <span class="text-2xl font-bold text-pastel-coral">{data.usage.mostActiveDay}</span>
        <span class="text-xs tracking-wide text-neutral-400">most active day</span>
      </div>

      <!-- Most Active Hour -->
      <div
        class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
        in:fly={{ y: 30, duration: 400, delay: 500 }}
      >
        <span class="text-2xl font-bold text-pastel-orange">{data.usage.mostActiveHour}</span>
        <span class="text-xs tracking-wide text-neutral-400">peak hour</span>
      </div>

      <!-- Top Applications -->
      <div
        class="col-span-2 rounded-xl bg-neutral-700 p-5"
        in:fly={{ x: -40, duration: 500, delay: 600 }}
      >
        <h3 class="mb-3 border-b border-pastel-red/30 pb-2 text-sm font-semibold text-neutral-200">
          top applications ({data.applications.uniqueAppsUsed} unique)
        </h3>
        <div class="space-y-2">
          {#each data.applications.top.slice(0, 5) as app (app.rank)}
            <div class="flex items-center gap-3">
              <span class="w-5 text-sm font-bold text-pastel-red">{app.rank}</span>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-300">{app.name}</span>
                  <span class="text-xs font-semibold text-pastel-red">{app.opens}</span>
                </div>
                <div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-600">
                  <div
                    class="h-full rounded-full bg-pastel-red transition-all duration-700"
                    style="width: {(app.opens / data.applications.top[0].opens) * 100}%"
                  ></div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Top Extensions -->
      <div
        class="col-span-2 rounded-xl bg-neutral-700 p-5"
        in:fly={{ x: 40, duration: 500, delay: 700 }}
      >
        <h3
          class="mb-3 border-b border-pastel-coral/30 pb-2 text-sm font-semibold text-neutral-200"
        >
          top extensions ({data.extensions.totalInstalled} installed)
        </h3>
        <div class="space-y-2">
          {#each data.extensions.top.slice(0, 5) as ext (ext.rank)}
            <div class="flex items-center gap-3">
              <span class="w-5 text-sm font-bold text-pastel-coral">{ext.rank}</span>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-neutral-300">{ext.name}</span>
                  <span class="text-xs font-semibold text-pastel-coral">{ext.opens}</span>
                </div>
                <div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-600">
                  <div
                    class="h-full rounded-full bg-pastel-coral transition-all duration-700"
                    style="width: {(ext.opens / data.extensions.top[0].opens) * 100}%"
                  ></div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Bottom stats -->
    <div
      class="mt-6 flex items-center gap-6 rounded-full bg-neutral-700/50 px-8 py-3"
      in:scale={{ duration: 400, delay: 900, easing: quintOut }}
    >
      <span class="text-sm text-neutral-400">customization:</span>
      <span class="text-sm">
        <span class="font-bold text-pastel-red">{data.extensions.quicklinks}</span>
        <span class="text-neutral-400"> quicklink</span>
      </span>
      <span class="text-neutral-600">|</span>
      <span class="text-sm">
        <span class="font-bold text-pastel-coral">{data.extensions.hotkeys}</span>
        <span class="text-neutral-400"> hotkey</span>
      </span>
      <span class="text-neutral-600">|</span>
      <span class="text-sm">
        <span class="font-bold text-pastel-orange">{data.extensions.aliases}</span>
        <span class="text-neutral-400"> aliases</span>
      </span>
    </div>
  </div>
{/if}
