<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { GradesWrapped } from '$lib/types/grades';

	interface Props {
		active: boolean;
		data: GradesWrapped;
	}

	let { active, data }: Props = $props();

	function getGradeColor(grade: number): string {
		if (grade >= 90) return 'text-pastel-green';
		if (grade >= 80) return 'text-pastel-blue';
		if (grade >= 70) return 'text-pastel-yellow';
		if (grade >= 60) return 'text-pastel-orange';
		return 'text-pastel-coral';
	}

	function calculateAverage(courses: { class: string; grade: number }[]): number {
		if (courses.length === 0) return 0;
		const sum = courses.reduce((acc, course) => acc + course.grade, 0);
		return Math.round((sum / courses.length) * 10) / 10;
	}

	let year4Average = $derived(calculateAverage(data.year4_2025));
	let year5Average = $derived(calculateAverage(data.year5_2025));
	let yearlyAverage = $derived(Math.round(((year4Average + year5Average) / 2) * 10) / 10);
</script>

{#if active}
	<div
		class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
		transition:fade={{ duration: 300 }}
	>
		<h1 class="mb-8 text-5xl font-bold text-pastel-blue" in:fly={{ y: -30, duration: 500 }}>
			grades
		</h1>

		<h2 class="mb-8 text-xl font-bold text-pastel-lavender">
			they're calling him one of the academic weapons of all time
		</h2>

		<div class="flex gap-16">
			<div class="min-w-100" in:fly={{ x: -50, duration: 500, delay: 200 }}>
				<h2 class="mb-4 border-b-2 border-pastel-blue pb-2 text-2xl font-semibold text-neutral-200">
					year 4 - term 2
				</h2>
				<ul class="m-0 list-none p-0">
					{#each data.year4_2025 as course, i}
						<li
							class="flex h-16 items-center justify-between border-b border-neutral-700"
							in:fly={{ x: -20, duration: 300, delay: 300 + i * 100 }}
						>
							<span class="max-w-xs text-sm text-neutral-300">{course.class}</span>
							<span class="text-xl font-bold {getGradeColor(course.grade)}">{course.grade}%</span>
						</li>
					{/each}
				</ul>
				<div
					class="mt-4 flex items-center justify-between rounded-lg bg-neutral-700/50 px-4 py-3"
					in:fly={{ x: -20, duration: 300, delay: 300 + data.year4_2025.length * 100 }}
				>
					<span class="text-sm font-semibold text-neutral-200">term average</span>
					<span class="text-xl font-bold {getGradeColor(year4Average)}">{year4Average}%</span>
				</div>
			</div>

			<div class="min-w-100" in:fly={{ x: 50, duration: 500, delay: 200 }}>
				<h2 class="mb-4 border-b-2 border-pastel-blue pb-2 text-2xl font-semibold text-neutral-200">
					year 5 - term 1
				</h2>
				<ul class="m-0 list-none p-0">
					{#each data.year5_2025 as course, i}
						<li
							class="flex h-16 items-center justify-between border-b border-neutral-700"
							in:fly={{ x: 20, duration: 300, delay: 300 + i * 100 }}
						>
							<span class="max-w-xs text-sm text-neutral-300">{course.class}</span>
							<span class="text-xl font-bold {getGradeColor(course.grade)}">{course.grade}%</span>
						</li>
					{/each}
				</ul>
				<div
					class="mt-4 flex items-center justify-between rounded-lg bg-neutral-700/50 px-4 py-3"
					in:fly={{ x: 20, duration: 300, delay: 300 + data.year5_2025.length * 100 }}
				>
					<span class="text-sm font-semibold text-neutral-200">term average</span>
					<span class="text-xl font-bold {getGradeColor(year5Average)}">{year5Average}%</span>
				</div>
			</div>
		</div>

		<div
			class="relative mt-8 rounded-xl bg-neutral-700/70 px-8 py-6 text-center"
			in:fly={{ y: 30, duration: 500, delay: 600 }}
		>
			<span class="text-lg font-semibold text-neutral-300">year average</span>
			<div class="mt-2 text-4xl font-bold {getGradeColor(yearlyAverage)}">{yearlyAverage}%</div>
			<span class="absolute -bottom-10 left-0 w-full text-center text-sm text-pastel-green"
				>(what a recovery!)</span
			>
		</div>
	</div>
{/if}
