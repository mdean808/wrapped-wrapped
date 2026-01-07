import type { RaycastWrapped } from '$lib/types/raycast';

export default {
	year: 2025,
	installation: {
		daysAgo: 1343
	},
	usage: {
		totalOpens: 5363,
		totalActions: 2155,
		mostActiveDay: 'Wednesday',
		mostActiveHour: '11:00 AM'
	},
	applications: {
		totalLaunches: 1762,
		uniqueAppsUsed: 99,
		top: [
			{ rank: 1, name: 'Messages', opens: 280 },
			{ rank: 2, name: 'iTerm', opens: 155 },
			{ rank: 3, name: 'Viralmind Desktop', opens: 145 },
			{ rank: 4, name: 'Finder', opens: 112 },
			{ rank: 5, name: 'Zen', opens: 105 },
			{ rank: 6, name: 'AppCleaner', opens: 65 },
			{ rank: 7, name: 'Preview', opens: 50 },
			{ rank: 8, name: 'System Settings', opens: 45 },
			{ rank: 9, name: 'Visual Studio Code', opens: 44 },
			{ rank: 10, name: 'Spotify', opens: 39 }
		]
	},
	extensions: {
		totalInstalled: 32,
		quicklinks: 1,
		hotkeys: 1,
		aliases: 8,
		top: [
			{ rank: 1, name: 'Clipboard History', opens: 1482 },
			{ rank: 2, name: 'Bitwarden Vault', opens: 162 },
			{
				rank: 3,
				name: 'Visual Studio Code - Project Manager',
				opens: 78
			},
			{ rank: 4, name: 'Word Count', opens: 76 },
			{ rank: 5, name: 'Emoji & Symbols', opens: 68 },
			{ rank: 6, name: 'Kill Process', opens: 55 },
			{ rank: 7, name: 'File Search', opens: 30 },
			{ rank: 8, name: 'Tailwind CSS', opens: 29 },
			{ rank: 9, name: 'Calculator', opens: 14 },
			{ rank: 10, name: 'System', opens: 14 }
		]
	},
	personalityCard: 'Clipboard hoarder'
} as RaycastWrapped;
