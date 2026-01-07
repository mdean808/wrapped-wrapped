<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';

  interface Props {
    active: boolean;
  }

  let { active }: Props = $props();

  // Example data for the AI meta stats
  const aiStats = {
    tokens: 150000,
    cost: 4.5,
    prompts: 47
  };
</script>

{#if active}
  <div
    class="relative flex h-full w-full items-center justify-center overflow-hidden"
    transition:fade={{ duration: 300 }}
  >
    <div
      class="absolute inset-0 animate-gradient-shift bg-size-[400%_400%]"
      style="background-image: linear-gradient(135deg, #ff6b6b 0%, #feca57 15%, #48dbfb 30%, #ff9ff3 45%, #54a0ff 60%, #5f27cd 75%, #00d2d3 90%, #ff6b6b 100%)"
    ></div>

    <div class="relative z-10 text-center text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
      <h1
        class="mb-8 -rotate-2 text-[5rem] font-bold -tracking-wide"
        in:fly={{ y: -30, duration: 500 }}
      >
        BY THE WAY
      </h1>
      <h2 class="mb-8 text-xl font-bold opacity-95" in:fade={{ duration: 400, delay: 200 }}>
        i used ai in this presentation
      </h2>

      <div class="flex justify-center gap-6" in:scale={{ duration: 500, delay: 400, start: 0.9 }}>
        <div
          class="min-w-40 rounded-2xl border border-white/30 bg-white/20 px-8 py-6 backdrop-blur-[10px] transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
        >
          <div class="mb-1 text-2xl opacity-70">~</div>
          <span class="block text-[2.5rem] leading-tight font-bold"
            >{aiStats.tokens.toLocaleString()}</span
          >
          <span class="mt-1 block text-sm opacity-85">tokens consumed</span>
        </div>

        <div
          class="min-w-40 rounded-2xl border border-white/30 bg-white/20 px-8 py-6 backdrop-blur-[10px] transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1"
        >
          <div class="mb-1 text-2xl opacity-70">$</div>
          <span class="block text-[2.5rem] leading-tight font-bold">{aiStats.cost.toFixed(2)}</span>
          <span class="mt-1 block text-sm opacity-85">in api costs</span>
        </div>

        <div
          class="min-w-40 rounded-2xl border border-white/30 bg-white/20 px-8 py-6 backdrop-blur-[10px] transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
        >
          <div class="mb-1 text-2xl opacity-70">#</div>
          <span class="block text-[2.5rem] leading-tight font-bold">{aiStats.prompts}</span>
          <span class="mt-1 block text-sm opacity-85">prompts to get it right</span>
        </div>
      </div>

      <p class="mt-10 text-lg italic opacity-80" in:fade={{ duration: 400, delay: 700 }}>
        worth every <span class="text-blue-500">gallon</span> of water
      </p>
    </div>
  </div>
{/if}
