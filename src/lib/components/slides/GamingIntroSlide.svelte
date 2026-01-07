<script lang="ts">
	import { fade, fly } from 'svelte/transition';

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
			<h1
				class="m-0 text-4xl font-medium text-neutral-400"
				in:fly={{ x: -100, duration: 600, delay: 200 }}
			>
				if we know one thing about morgan, it's that hes a
			</h1>
			<h2
				class="my-2 text-[5rem] font-bold text-pastel-green"
				in:fly={{ x: 100, duration: 600, delay: 400 }}
			>
				GAMER
			</h2>
			<p class="mt-4 text-xl text-neutral-400" in:fade={{ duration: 400, delay: 800 }}>
				(for better or worse)
			</p>
		</div>
	</div>
{/if}
