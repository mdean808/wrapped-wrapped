<script lang="ts">
  import { fade, scale, fly } from 'svelte/transition';

  interface Props {
    active: boolean;
  }

  let { active }: Props = $props();

  const stats = {
    officialWraps: 5,
    customWraps: 3,
    totalMessages: 10237 + 5273 + 9314, // Discord + Claude + AI Agent
    totalHours: 942 + 259 + 750 + 600, // Spotify minutes/60 + Discord voice + Wakatime + Steam estimation
    gamesPlayed: 29,
    achievementsUnlocked: 135,
    songsListened: 4641,
    clipboardPastes: 1482
  };
</script>

{#if active}
  <div
    class="flex h-full w-full items-center justify-center bg-neutral-800"
    transition:fade={{ duration: 300 }}
  >
    <div class="max-w-4xl px-8 text-center">
      <h1 class="m-0 text-6xl font-bold text-pastel-pink" in:scale={{ duration: 600, delay: 200 }}>
        and wrapping up the wraps...
      </h1>

      <div class="mt-10 grid grid-cols-2 gap-6" in:fade={{ duration: 400, delay: 500 }}>
        <div
          class="rounded-2xl bg-neutral-700/50 p-6 text-left"
          in:fly={{ y: 20, duration: 400, delay: 600 }}
        >
          <div class="text-4xl font-bold text-pastel-green">{stats.officialWraps}</div>
          <div class="text-lg text-neutral-300">official wraps from companies</div>
          <div class="mt-1 text-sm text-neutral-500">
            Spotify, Discord, Steam, Raycast, WakaTime
          </div>
        </div>

        <div
          class="rounded-2xl bg-neutral-700/50 p-6 text-left"
          in:fly={{ y: 20, duration: 400, delay: 700 }}
        >
          <div class="text-4xl font-bold text-pastel-blue">{stats.customWraps}</div>
          <div class="text-lg text-neutral-300">custom wraps i made myself</div>
          <div class="mt-1 text-sm text-neutral-500">Claude, Grades, AI Agents</div>
        </div>

        <div
          class="rounded-2xl bg-neutral-700/50 p-6 text-left"
          in:fly={{ y: 20, duration: 400, delay: 800 }}
        >
          <div class="text-4xl font-bold text-pastel-yellow">
            {stats.totalMessages.toLocaleString()}+
          </div>
          <div class="text-lg text-neutral-300">messages sent across platforms</div>
        </div>

        <div
          class="rounded-2xl bg-neutral-700/50 p-6 text-left"
          in:fly={{ y: 20, duration: 400, delay: 900 }}
        >
          <div class="text-4xl font-bold text-pastel-purple">
            {stats.totalHours.toLocaleString()}+
          </div>
          <div class="text-lg text-neutral-300">hours of screen time tracked</div>
        </div>
      </div>

      <div class="mt-8 text-lg text-neutral-400 italic" in:fade={{ duration: 400, delay: 1100 }}>
        {stats.songsListened.toLocaleString()} songs listened to, {stats.gamesPlayed} games played, {stats.achievementsUnlocked}
        achievements unlocked, and {stats.clipboardPastes.toLocaleString()} clipboard pastes
      </div>
    </div>
  </div>
{/if}
