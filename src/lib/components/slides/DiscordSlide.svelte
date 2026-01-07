<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { DiscordWrapped } from '$lib/types/discord';

  interface Props {
    active: boolean;
    data: DiscordWrapped;
  }

  let { active, data }: Props = $props();
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-8 text-5xl font-bold text-pastel-indigo" in:fly={{ y: -30, duration: 500 }}>
      discord
    </h1>
    <h2 class="mb-8 text-xl font-bold text-pastel-coral" in:fly={{ y: -30, duration: 500 }}>
      actually not the worst stats i've ever seen 👍
    </h2>

    <div class="grid max-w-4xl grid-cols-3 gap-8">
      <div
        class="flex flex-col gap-2 rounded-xl bg-neutral-700 p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 200 }}
      >
        <span class="text-4xl font-bold text-pastel-indigo"
          >{data.messagesSent.toLocaleString()}</span
        >
        <span class="text-sm tracking-wide text-neutral-400 uppercase">Messages Sent</span>
      </div>

      <div
        class="flex flex-col gap-2 rounded-xl bg-neutral-700 p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 300 }}
      >
        <span class="text-4xl font-bold text-pastel-indigo">{data.hoursInVoice}</span>
        <span class="text-sm tracking-wide text-neutral-400 uppercase">Hours in Voice</span>
      </div>

      <div
        class="flex flex-col gap-2 rounded-xl bg-neutral-700 p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 400 }}
      >
        <span class="text-4xl font-bold text-pastel-indigo">{data.emojiUsed}</span>
        <span class="text-sm tracking-wide text-neutral-400 uppercase">Emoji Used</span>
      </div>

      <div
        class="flex flex-col gap-2 rounded-xl bg-pastel-indigo p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 500 }}
      >
        <span class="text-7xl font-bold text-white">{data.favoriteEmoji.emoji}</span>
        <span class="text-sm tracking-wide text-white/80 uppercase">Favorite Emoji</span>
      </div>

      <div
        class="flex flex-col gap-2 rounded-xl bg-neutral-700 p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 600 }}
      >
        <span class="text-2xl font-bold text-pastel-indigo">{data.mostPlayedGame}</span>
        <span class="text-sm tracking-wide text-neutral-400 uppercase">Most Played Game</span>
      </div>

      <div
        class="flex flex-col gap-2 rounded-xl bg-neutral-700 p-8 text-center"
        in:fly={{ y: 30, duration: 400, delay: 700 }}
      >
        <span class="text-2xl font-bold text-pastel-indigo">{data.topServer}</span>
        <span class="text-sm tracking-wide text-neutral-400 uppercase">Top Server</span>
      </div>
    </div>
  </div>
{/if}
