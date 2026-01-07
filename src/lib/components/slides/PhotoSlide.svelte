<script lang="ts">
  import { fade } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import type { TransitionConfig } from 'svelte/transition';

  interface Props {
    active: boolean;
    images: string[];
    layout?: 'single' | 'dual';
    caption?: string;
    captions?: string[];
  }

  let {
    active,
    images,
    layout = 'single',
    caption = 'Placeholder caption',
    captions = []
  }: Props = $props();

  function popIn(
    _node: Element,
    { delay = 0, duration = 500 }: { delay?: number; duration?: number } = {}
  ): TransitionConfig {
    return {
      delay,
      duration,
      easing: backOut,
      css: (t) => {
        const scale = 0.8 + 0.2 * t;
        const y = (1 - t) * 30;
        return `transform: scale(${scale}) translateY(${y}px); opacity: ${t}`;
      }
    };
  }
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <div class="flex items-center justify-center {layout === 'dual' ? 'gap-12' : 'gap-8'}">
      {#each images as image, i (image)}
        <div
          class="flex flex-col items-center"
          transition:popIn={{ delay: 200 + i * 150, duration: 500 }}
        >
          <div class="rounded bg-neutral-700 p-4 shadow-lg">
            <img
              src={image}
              alt="Photo {i + 1}"
              class="block object-contain {layout === 'dual'
                ? 'max-h-[50vh] max-w-[35vw]'
                : 'max-h-[60vh] max-w-[40vw]'}"
            />
          </div>
          {#if captions[i]}
            <p class="mt-3 text-center text-sm text-neutral-400">{captions[i]}</p>
          {/if}
        </div>
      {/each}
    </div>
    {#if caption}
      <p class="mt-8 text-center text-xl font-medium text-pastel-pink">{caption}</p>
    {/if}
  </div>
{/if}
