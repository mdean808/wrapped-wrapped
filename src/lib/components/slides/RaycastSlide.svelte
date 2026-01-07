<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { RaycastWrapped } from '$lib/types/raycast';

  interface Props {
    active: boolean;
    data: RaycastWrapped;
    images: {
      summary: string;
    };
  }

  let { active, data, images }: Props = $props();
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-8 text-5xl font-bold text-pastel-coral" in:fly={{ y: -30, duration: 500 }}>
      raycast
    </h1>
    <h2 class="mb-8 text-xl font-bold text-neutral-400" in:fade={{ duration: 400, delay: 200 }}>
      apparently he's a "{data.personalityCard}"
    </h2>

    <div in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <img
        src={images.summary}
        alt="Raycast Summary"
        class="h-auto max-h-[60vh] w-auto max-w-[80vw] rounded-xl shadow-lg"
      />
    </div>
  </div>
{/if}
