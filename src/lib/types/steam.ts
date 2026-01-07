export interface SteamWrapped {
  year: number;
  username: string;
  summary: {
    gamesPlayed: number;
    gamesPlayedChange: number;
    newGames: number;
    achievementsUnlocked: number;
    achievementsChange: number;
    rareAchievements: number;
    longestStreak: {
      days: number;
      startDate: string;
      endDate: string;
      gamesPlayed: string[];
    };
    workshopSubscriptions: number;
    newFriends: number;
    badgesEarned: number;
  };
  inputMethods: {
    keyboardMouse: number;
    controller: number;
  };
  comparison: {
    achievementsUnlocked: number;
    steamMedianAchievements: number;
    gamesPlayed: number;
    steamMedianGames: number;
    longestStreak: number;
    steamMedianStreak: number;
  };
  releaseDistribution: {
    newReleases: number;
    steamAverage: number;
  };
  topGames: Array<{
    name: string;
    playtimePercentage: number;
    sessions: number;
    dayStreak: number;
    achievements?: number;
    firstPlayedYear?: number;
    returnedMonth?: string;
  }>;
  platforms: {
    steamDeck: {
      games: number;
      sessions: number;
      playtimePercentage: number;
      topGames: Array<{
        name: string;
        percentage: number;
      }>;
    };
    controller: {
      games: number;
      sessions: number;
      playtimePercentage: number;
      topGames: Array<{
        name: string;
        percentage: number;
      }>;
    };
  };
}
