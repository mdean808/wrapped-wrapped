import type { WakatimeWrapped } from '$lib/types/wakatime';

export default {
	year: 2025,
	user_id: '0f964b70-d779-4bd5-917b-66c95131b684',
	rank: 'Top 5% of 500k+ devs',
	summary: {
		total_hours: 750.47,
		daily_average_hours: 2.77,
		most_active_day: {
			date: '2025-09-30',
			hours: 8.5
		},
		top_ide: 'VS Code',
		top_language: 'TypeScript',
		top_os: 'Mac'
	},
	comparisons: {
		total: {
			you: 750.47,
			alan: 542.7,
			everyone_avg: 315.65,
			everyone_combined: 61494737.4
		},
		daily_average: {
			you: 2.77,
			alan: 1.85,
			everyone_avg: 0.85
		}
	},
	operating_systems: [
		{ name: 'Mac', hours: 739.48, everyone_avg: 362.35 },
		{ name: 'Windows', hours: 7.27, everyone_avg: 202.08 },
		{ name: 'Linux', hours: 3.7, everyone_avg: 225.3 }
	],
	editors: [
		{ name: 'VS Code', hours: 521.38, everyone_avg: 188.23 },
		{ name: 'Windsurf', hours: 163.8, everyone_avg: 74.02 },
		{ name: 'Neovim', hours: 53.17, everyone_avg: 204.45 },
		{ name: 'Claude Code', hours: 10.07, everyone_avg: 46.22 },
		{ name: 'RustRover', hours: 1.33, everyone_avg: 36.95 }
	],
	languages: [
		{ name: 'TypeScript', hours: 355.35, everyone_avg: 117.67 },
		{ name: 'Svelte', hours: 63.95, everyone_avg: 22.1 },
		{ name: 'YAML', hours: 47.12, everyone_avg: 8.77 },
		{ name: 'Python', hours: 40.67, everyone_avg: 42.45 },
		{ name: 'Rust', hours: 38.18, everyone_avg: 27.12 }
	],
	projects: [
		{ name: 'cloud', hours: 290.1 },
		{ name: 'viralmind-agents', hours: 99.6 },
		{ name: 'desktop', hours: 91.77 },
		{ name: 'website', hours: 56.12 },
		{ name: 'cua', hours: 55.17 },
		{ name: 'project-girlypops', hours: 21.48 },
		{ name: 'cache_script', hours: 21.07 },
		{ name: 'Unknown Project', hours: 16.72 },
		{ name: 'breakout_bro', hours: 15 },
		{ name: 'gym-desktop', hours: 13.23 }
	]
} as WakatimeWrapped;
