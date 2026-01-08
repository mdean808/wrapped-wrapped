<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import BouncingPhotos from '$lib/components/BouncingPhotos.svelte';

  interface Props {
    active: boolean;
  }

  let { active }: Props = $props();
</script>

{#if active}
  <div
    class="relative flex h-full w-full items-center justify-center bg-neutral-800"
    transition:fade={{ duration: 300 }}
  >
    <!-- DVD-style bouncing photos background -->
    <BouncingPhotos />

    <!-- Content overlay -->
    <div class="relative z-10 text-center">
      <h1
        class="m-0 text-5xl leading-tight font-bold text-pastel-purple"
        in:fly={{ y: -50, duration: 800, delay: 200 }}
      >
        morgan's
      </h1>
      <h2
        class="m-0 text-[5rem] font-semibold text-blue-400 uppercase"
        in:fly={{ y: 50, duration: 800, delay: 400 }}
      >
        🎁 wrapped wrapped 🎁
      </h2>
      <p class="mt-8 text-xl text-neutral-400" in:fade={{ duration: 600, delay: 800 }}>
        a review of a wild, wacky, and sometimes withering 2025
      </p>
    </div>
  </div>
{/if}
