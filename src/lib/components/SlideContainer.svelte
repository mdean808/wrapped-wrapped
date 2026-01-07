<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet<[number]>;
    totalSlides: number;
  }

  let { children, totalSlides }: Props = $props();

  let currentSlide = $state(0);
  let lastNavTime = $state(0);
  const NAV_DEBOUNCE_MS = 200;

  function canNavigate(): boolean {
    const now = Date.now();
    if (now - lastNavTime < NAV_DEBOUNCE_MS) return false;
    lastNavTime = now;
    return true;
  }

  function next() {
    if (!canNavigate()) return;
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    }
  }

  function prev() {
    if (!canNavigate()) return;
    if (currentSlide > 0) {
      currentSlide--;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div
  class="relative h-screen w-screen cursor-pointer overflow-hidden outline-none"
  role="button"
  tabindex="0"
  onclick={next}
  onkeydown={handleKeydown}
>
  {@render children(currentSlide)}

  <!-- Navigation hints -->
  <div
    class="fixed bottom-8 left-1/2 flex -translate-x-1/2 gap-8 text-sm text-gray-500 select-none"
  >
    <span class="transition-opacity duration-200 {currentSlide === 0 ? 'opacity-30' : ''}"
      >← Prev</span
    >
    <span class="font-semibold">{currentSlide + 1} / {totalSlides}</span>
    <span
      class="transition-opacity duration-200 {currentSlide === totalSlides - 1 ? 'opacity-30' : ''}"
      >Next →</span
    >
  </div>
</div>
