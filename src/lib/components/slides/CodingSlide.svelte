<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { WakatimeWrapped } from '$lib/types/wakatime';

  interface Props {
    active: boolean;
    data: WakatimeWrapped;
  }

  let { active, data }: Props = $props();
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-8 text-5xl font-bold text-pastel-cyan" in:fly={{ y: -30, duration: 500 }}>
      pro-gam(m)ing
    </h1>
    <h2 class="mb-8 text-xl font-bold text-pastel-coral" in:fade={{ duration: 400, delay: 200 }}>
      {data.rank}
    </h2>

    <div class="flex items-start gap-16">
      <div class="flex flex-col gap-6" in:fly={{ x: -50, duration: 500, delay: 300 }}>
        <div class="rounded-2xl bg-pastel-cyan px-12 py-8 text-center">
          <span class="block text-7xl font-bold text-white"
            >{data.summary.total_hours.toLocaleString()}</span
          >
          <span class="text-base text-white/80 uppercase">total hours</span>
        </div>
        <div class="flex gap-4">
          <div class="flex-1 rounded-lg bg-neutral-700 px-6 py-4 text-center">
            <span class="block text-xl font-bold text-pastel-cyan"
              >{data.summary.daily_average_hours}</span
            >
            <span class="text-xs text-neutral-400">daily avg</span>
          </div>
          <div class="relative flex-1 rounded-lg bg-neutral-700 px-6 py-4 text-center">
            <span class="block text-xl font-bold text-pastel-cyan">{data.summary.top_ide}</span>
            <span class="text-xs text-neutral-400">top ide</span>
            <div
              class="absolute -bottom-20 -rotate-30 rounded-lg border-2 border-pastel-lavender bg-neutral-700 p-1 text-center"
            >
              <span class="text-xs">i use neovim now btw</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-8" in:fly={{ x: 50, duration: 500, delay: 400 }}>
        <div class="min-w-52">
          <h3
            class="mb-3 border-b-2 border-pastel-cyan pb-2 text-base font-semibold text-neutral-200"
          >
            top languages
          </h3>
          <ul class="m-0 list-none p-0">
            {#each data.languages.slice(0, 5) as lang}
              <li class="flex justify-between border-b border-neutral-700 py-2 text-sm">
                <span class="text-neutral-300">{lang.name}</span>
                <span class="font-semibold text-pastel-cyan">{lang.hours}h</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="min-w-52">
          <h3
            class="mb-3 border-b-2 border-pastel-cyan pb-2 text-base font-semibold text-neutral-200"
          >
            top projects
          </h3>
          <ul class="m-0 list-none p-0">
            {#each data.projects.slice(0, 5) as project}
              <li class="flex justify-between border-b border-neutral-700 py-2 text-sm">
                <span class="text-neutral-300">{project.name}</span>
                <span class="font-semibold text-pastel-cyan">{project.hours}h</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
{/if}
