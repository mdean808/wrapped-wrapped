<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { AIAgentWrapped } from '$lib/types/aiagent';

  interface Props {
    active: boolean;
    data: AIAgentWrapped;
  }

  let { active, data }: Props = $props();

  // Format large numbers
  function formatTokens(tokens: number): string {
    if (tokens >= 1_000_000) {
      return (tokens / 1_000_000).toFixed(1) + 'M';
    }
    if (tokens >= 1_000) {
      return (tokens / 1_000).toFixed(1) + 'K';
    }
    return tokens.toLocaleString();
  }
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-8 text-5xl font-bold text-agent-primary" in:fly={{ y: -30, duration: 500 }}>
      ai agent wrapped
    </h1>
    <h2 class="mb-8 text-xl font-bold text-pastel-blue" in:fade={{ duration: 400, delay: 200 }}>
      now <span class="text-pastel-green italic">this</span> is killing the environment 🔥🌳🔥
    </h2>

    <div class="flex items-center gap-8" in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <!-- Total Cost - Big hero stat -->
      <div
        class="rounded-2xl bg-gradient-to-br from-agent-primary to-agent-secondary px-12 py-8 text-center"
      >
        <span class="block text-6xl font-bold text-white">${data.totalCost.toLocaleString()}</span>
        <span class="text-base text-white/85 uppercase">total cost</span>
      </div>

      <!-- Other stats -->
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div
            class="flex-1 rounded-lg border border-agent-border bg-agent-bg px-8 py-5 text-center"
          >
            <span class="block text-2xl font-bold text-agent-primary"
              >${data.avgCostPerDay.toFixed(2)}</span
            >
            <span class="text-xs text-neutral-400">avg/day</span>
          </div>
          <div
            class="flex-1 rounded-lg border border-agent-border bg-agent-bg px-8 py-5 text-center"
          >
            <span class="block text-2xl font-bold text-agent-primary"
              >{data.sessions.toLocaleString()}</span
            >
            <span class="text-xs text-neutral-400">sessions</span>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-1 rounded-lg border border-agent-border bg-agent-bg px-8 py-5 text-center"
          >
            <span class="block text-2xl font-bold text-agent-primary"
              >{data.messages.toLocaleString()}</span
            >
            <span class="text-xs text-neutral-400">messages</span>
          </div>
          <div
            class="flex-1 rounded-lg border border-agent-border bg-agent-bg px-8 py-5 text-center"
          >
            <span class="block text-2xl font-bold text-agent-primary"
              >{formatTokens(data.totalTokens)}</span
            >
            <span class="text-xs text-neutral-400">total tokens</span>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-6 text-sm text-pastel-blue" in:fade={{ duration: 400, delay: 450 }}>
      don't worry, i don't pay for all this!
    </p>
  </div>
{/if}
