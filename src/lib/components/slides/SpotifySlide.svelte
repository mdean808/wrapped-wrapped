<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { SpotifyWrapped } from '$lib/types/spotify';

	interface Props {
		active: boolean;
		data: SpotifyWrapped;
	}

	let { active, data }: Props = $props();

	const hoursListened = $derived(Math.round(data.minutesListened / 60));
</script>

{#if active}
	<div
		class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
		transition:fade={{ duration: 300 }}
	>
		<h1 class="mb-8 text-5xl font-bold text-pastel-green" in:fly={{ y: -30, duration: 500 }}>
			spotify! !!!
		</h1>

		<h2 class="mb-8 text-xl font-bold text-pastel-blue" in:fly={{ y: -30, duration: 500 }}>
			yeah, we're multi-genere-ational
		</h2>

		<div class="flex items-start gap-16">
			<div class="flex flex-col gap-6" in:fly={{ x: -50, duration: 500, delay: 200 }}>
				<div class="rounded-2xl bg-pastel-green px-12 py-8 text-center">
					<span class="block text-7xl font-bold text-white">{hoursListened.toLocaleString()}</span>
					<span class="text-base text-white/80 uppercase">Hours Listened</span>
				</div>
				<div class="flex gap-4">
					<div class="flex-1 rounded-lg bg-neutral-700 px-6 py-4 text-center">
						<span class="block text-2xl font-bold text-pastel-green"
							>{data.totalSongs.toLocaleString()}</span
						>
						<span class="text-xs text-neutral-400">Songs</span>
					</div>
					<div class="flex-1 rounded-lg bg-neutral-700 px-6 py-4 text-center">
						<span class="block text-2xl font-bold text-pastel-green"
							>{data.totalArtists.toLocaleString()}</span
						>
						<span class="text-xs text-neutral-400">Artists</span>
					</div>
				</div>
			</div>

			<div class="flex gap-8" in:fly={{ x: 50, duration: 500, delay: 300 }}>
				<div class="min-w-52">
					<h3
						class="mb-3 border-b-2 border-pastel-green pb-2 text-base font-semibold text-neutral-200"
					>
						Top Artists
					</h3>
					<ol class="counter-reset-[item] m-0 list-none p-0">
						{#each data.topArtists.slice(0, 5) as artist, i}
							<li class="py-2 text-sm text-neutral-300">
								<span class="font-semibold text-pastel-green">{i + 1}.</span>
								{artist.name}
							</li>
						{/each}
					</ol>
				</div>
				<div class="min-w-52">
					<h3
						class="mb-3 border-b-2 border-pastel-green pb-2 text-base font-semibold text-neutral-200"
					>
						Top Songs
					</h3>
					<ol class="m-0 list-none p-0">
						{#each data.topSongs.slice(0, 5) as song, i}
							<li class="py-2 text-sm text-neutral-300">
								<span class="font-semibold text-pastel-green">{i + 1}.</span>
								{song.title}
							</li>
						{/each}
					</ol>
				</div>
			</div>
		</div>

		<div class="mt-8 text-xl text-neutral-400" in:fade={{ duration: 400, delay: 600 }}>
			Top Genre: <span class="font-bold text-pastel-green">{data.topGenre}</span>
		</div>
	</div>
{/if}
