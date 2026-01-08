<script lang="ts">
  import { onMount } from 'svelte';
  import morgan1 from '$lib/assets/morgans/Untitled 1.png';
  import morgan2 from '$lib/assets/morgans/Untitled 2.png';
  import morgan3 from '$lib/assets/morgans/Untitled 3.png';
  import morgan4 from '$lib/assets/morgans/Untitled 4.png';
  import morgan5 from '$lib/assets/morgans/Untitled 5.png';
  import morgan6 from '$lib/assets/morgans/Untitled 6.png';
  import morgan7 from '$lib/assets/morgans/Untitled 7.png';
  import morgan8 from '$lib/assets/morgans/Untitled 8.png';
  import morgan9 from '$lib/assets/morgans/Untitled 9.png';

  const images = [morgan1, morgan2, morgan3, morgan4, morgan5, morgan6, morgan7, morgan8, morgan9];

  interface BouncingImage {
    src: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  }

  let container: HTMLDivElement;
  let bouncingImages = $state<BouncingImage[]>([]);
  let animationFrame: number;

  const MIN_SPEED = 1.5;
  const MAX_SPEED = 3;

  function randomVelocity(): number {
    const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
    return Math.random() > 0.5 ? speed : -speed;
  }

  onMount(() => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Initialize images with random positions and velocities
    bouncingImages = images.map((src) => {
      const size = 80 + Math.random() * 40; // Random size between 80-120px
      return {
        src,
        x: Math.random() * (containerWidth - size),
        y: Math.random() * (containerHeight - size),
        vx: randomVelocity(),
        vy: randomVelocity(),
        size
      };
    });

    function animate() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Update positions
      for (const img of bouncingImages) {
        img.x += img.vx;
        img.y += img.vy;

        // Bounce off walls
        if (img.x <= 0 || img.x + img.size >= width) {
          img.vx = -img.vx;
          img.x = Math.max(0, Math.min(img.x, width - img.size));
        }
        if (img.y <= 0 || img.y + img.size >= height) {
          img.vy = -img.vy;
          img.y = Math.max(0, Math.min(img.y, height - img.size));
        }
      }

      // Trigger reactivity
      bouncingImages = bouncingImages;

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  });
</script>

<div bind:this={container} class="absolute inset-0 overflow-hidden">
  {#each bouncingImages as img, i (i)}
    <img
      src={img.src}
      alt="morgan"
      class="absolute rounded-full object-cover opacity-60 shadow-lg"
      style="left: {img.x}px; top: {img.y}px; width: {img.size}px; height: {img.size}px;"
    />
  {/each}
</div>
