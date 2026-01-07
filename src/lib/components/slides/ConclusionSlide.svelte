<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	interface Props {
		active: boolean;
	}

	let { active }: Props = $props();
</script>

{#if active}
	<div
		class="flex h-full w-full items-center justify-center bg-neutral-800"
		transition:fade={{ duration: 300 }}
	>
		<div class="text-center">
			<h1 class="m-0 text-7xl font-bold text-pastel-pink" in:scale={{ duration: 600, delay: 200 }}>
				that wraps up the wrapped wrapped!
			</h1>
			<h2 class="my-4 text-2xl text-pastel-blue" in:fade={{ duration: 400, delay: 600 }}>
				bye bye
			</h2>
			<div
				class="mt-8 text-[6rem] font-bold text-pastel-purple opacity-50"
				in:fade={{ duration: 400, delay: 800 }}
			>
				2025
			</div>
		</div>
	</div>
{/if}
