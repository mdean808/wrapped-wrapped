export interface RaycastWrapped {
  year: number;
  installation: {
    daysAgo: number;
  };
  usage: {
    totalOpens: number;
    totalActions: number;
    mostActiveDay: string;
    mostActiveHour: string;
  };
  applications: {
    totalLaunches: number;
    uniqueAppsUsed: number;
    top: Array<{
      rank: number;
      name: string;
      opens: number;
    }>;
  };
  extensions: {
    totalInstalled: number;
    quicklinks: number;
    hotkeys: number;
    aliases: number;
    top: Array<{
      rank: number;
      name: string;
      opens: number;
    }>;
  };
  personalityCard: string;
}
