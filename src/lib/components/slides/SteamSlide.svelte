<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { SteamWrapped } from '$lib/types/steam';
	import steamAvatar from '$lib/assets/steam-avatar.jpg';

	interface Props {
		active: boolean;
		data: SteamWrapped;
	}

	let { active, data }: Props = $props();

	// Calculate vs Steam median multipliers
	const achievementMultiplier = $derived(
		Math.round(data.comparison.achievementsUnlocked / data.comparison.steamMedianAchievements)
	);
	const gamesMultiplier = $derived(
		Math.round(data.comparison.gamesPlayed / data.comparison.steamMedianGames)
	);
</script>

{#if active}
	<div
		class="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-neutral-800 p-8"
		transition:fade={{ duration: 300 }}
	>
		<!-- Header with avatar -->
		<div class="mb-6 flex items-center gap-4" in:fly={{ y: -30, duration: 500 }}>
			<img
				src={steamAvatar}
				alt="Steam Avatar"
				class="h-16 w-16 rounded-full border-3 border-pastel-blue shadow-lg"
				in:scale={{ duration: 400, delay: 200, easing: quintOut }}
			/>
			<div>
				<h1 class="text-5xl font-bold text-pastel-blue">steamy stats</h1>
				<p class="text-sm text-neutral-400">{data.username} | {data.year}</p>
			</div>
		</div>

		<h2
			class="mb-6 text-lg font-bold text-pastel-orange"
			in:fly={{ y: -20, duration: 500, delay: 100 }}
		>
			probably 600+ hours including minecraft (steam doesn't give you that info)
		</h2>

		<!-- Main stats grid -->
		<div class="grid max-w-5xl grid-cols-4 gap-4">
			<!-- Games Played - Big Feature Card -->
			<div
				class="col-span-1 flex flex-col items-center justify-center rounded-2xl bg-pastel-blue px-6 py-6"
				in:fly={{ y: 30, duration: 400, delay: 200 }}
			>
				<span class="text-6xl font-bold text-white">{data.summary.gamesPlayed}</span>
				<span class="text-sm tracking-wide text-white/80 uppercase">Games Played</span>
				<span class="mt-1 text-xs text-white/60"
					>+{data.summary.gamesPlayedChange} from last year</span
				>
			</div>

			<!-- Achievements -->
			<div
				class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
				in:fly={{ y: 30, duration: 400, delay: 300 }}
			>
				<span class="text-4xl font-bold text-pastel-yellow"
					>{data.summary.achievementsUnlocked}</span
				>
				<span class="text-xs tracking-wide text-neutral-400 uppercase">Achievements</span>
				<span class="mt-1 text-xs text-pastel-yellow/80">{achievementMultiplier}x Steam median</span
				>
			</div>

			<!-- Rare Achievements -->
			<div
				class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
				in:fly={{ y: 30, duration: 400, delay: 400 }}
			>
				<span class="text-4xl font-bold text-pastel-lavender">{data.summary.rareAchievements}</span>
				<span class="text-xs tracking-wide text-neutral-400 uppercase">Rare Achievements</span>
			</div>

			<!-- Longest Streak -->
			<div
				class="flex flex-col items-center justify-center rounded-xl bg-neutral-700 p-6"
				in:fly={{ y: 30, duration: 400, delay: 500 }}
			>
				<span class="text-4xl font-bold text-pastel-coral">{data.summary.longestStreak.days}</span>
				<span class="text-xs tracking-wide text-neutral-400 uppercase">Day Streak</span>
				<span class="mt-1 text-xs text-neutral-500">Aug 25 - Sep 6</span>
			</div>

			<!-- Top Games Section -->
			<div
				class="col-span-2 rounded-xl bg-neutral-700 p-5"
				in:fly={{ x: -40, duration: 500, delay: 600 }}
			>
				<h3 class="mb-3 border-b border-pastel-blue/30 pb-2 text-sm font-semibold text-neutral-200">
					Top Games
				</h3>
				<div class="space-y-2">
					{#each data.topGames as game, i (game.name)}
						<div class="flex items-center gap-3">
							<span class="w-5 text-sm font-bold text-pastel-blue">{i + 1}</span>
							<div class="flex-1">
								<div class="flex items-center justify-between">
									<span class="text-sm text-neutral-300">{game.name}</span>
									<span class="text-xs font-semibold text-pastel-blue"
										>{game.playtimePercentage}%</span
									>
								</div>
								<div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-600">
									<div
										class="h-full rounded-full bg-pastel-blue transition-all duration-700"
										style="width: {game.playtimePercentage}%"
									></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Input Methods -->
			<div
				class="flex flex-col justify-center rounded-xl bg-neutral-700 p-5"
				in:fly={{ x: 40, duration: 500, delay: 700 }}
			>
				<h3 class="mb-3 text-sm font-semibold text-neutral-200">Input Methods</h3>
				<div class="flex items-center gap-2">
					<div class="flex-1">
						<div class="mb-1 flex justify-between text-xs">
							<span class="text-neutral-400">Keyboard/Mouse</span>
							<span class="text-pastel-cyan">{data.inputMethods.keyboardMouse}%</span>
						</div>
						<div class="h-3 w-full overflow-hidden rounded-full bg-neutral-600">
							<div
								class="h-full rounded-full bg-pastel-cyan transition-all duration-700"
								style="width: {data.inputMethods.keyboardMouse}%"
							></div>
						</div>
					</div>
				</div>
				<div class="mt-3 flex items-center gap-2">
					<div class="flex-1">
						<div class="mb-1 flex justify-between text-xs">
							<span class="text-neutral-400">Controller</span>
							<span class="text-pastel-orange">{data.inputMethods.controller}%</span>
						</div>
						<div class="h-3 w-full overflow-hidden rounded-full bg-neutral-600">
							<div
								class="h-full rounded-full bg-pastel-orange transition-all duration-700"
								style="width: {data.inputMethods.controller}%"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Steam Deck Stats -->
			<div
				class="flex flex-col justify-center rounded-xl bg-neutral-700 p-5"
				in:fly={{ y: 30, duration: 500, delay: 800 }}
			>
				<h3 class="mb-2 text-sm font-semibold text-neutral-200">Steam Deck</h3>
				<div class="flex gap-4">
					<div class="text-center">
						<span class="block text-2xl font-bold text-pastel-green"
							>{data.platforms.steamDeck.games}</span
						>
						<span class="text-xs text-neutral-400">games</span>
					</div>
					<div class="text-center">
						<span class="block text-2xl font-bold text-pastel-green"
							>{data.platforms.steamDeck.sessions}</span
						>
						<span class="text-xs text-neutral-400">sessions</span>
					</div>
					<div class="text-center">
						<span class="block text-2xl font-bold text-pastel-green"
							>{data.platforms.steamDeck.playtimePercentage}%</span
						>
						<span class="text-xs text-neutral-400">playtime</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom comparison callout -->
		<div
			class="mt-6 flex items-center gap-6 rounded-full bg-neutral-700/50 px-8 py-3"
			in:scale={{ duration: 400, delay: 900, easing: quintOut }}
		>
			<span class="text-sm text-neutral-400">vs. Steam Median:</span>
			<span class="text-sm">
				<span class="font-bold text-pastel-blue">{gamesMultiplier}x</span>
				<span class="text-neutral-400"> more games</span>
			</span>
			<span class="text-neutral-600">|</span>
			<span class="text-sm">
				<span class="font-bold text-pastel-yellow">{achievementMultiplier}x</span>
				<span class="text-neutral-400"> more achievements</span>
			</span>
			<span class="text-neutral-600">|</span>
			<span class="text-sm">
				<span class="font-bold text-pastel-coral">{data.releaseDistribution.newReleases}%</span>
				<span class="text-neutral-400"> new releases played</span>
			</span>
		</div>
	</div>
{/if}
