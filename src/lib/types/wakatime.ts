export interface WakatimeWrapped {
	year: number;
	user_id: string;
	rank: string;
	summary: WakatimeSummary;
	comparisons: WakatimeComparisons;
	operating_systems: WakatimeItem[];
	editors: WakatimeItem[];
	languages: WakatimeItem[];
	projects: WakatimeProject[];
}

interface WakatimeSummary {
	total_hours: number;
	daily_average_hours: number;
	most_active_day: {
		date: string;
		hours: number;
	};
	top_ide: string;
	top_language: string;
	top_os: string;
}

interface WakatimeComparisons {
	total: {
		you: number;
		alan: number;
		everyone_avg: number;
		everyone_combined: number;
	};
	daily_average: {
		you: number;
		alan: number;
		everyone_avg: number;
	};
}

interface WakatimeItem {
	name: string;
	hours: number;
	everyone_avg: number;
}

interface WakatimeProject {
	name: string;
	hours: number;
}
