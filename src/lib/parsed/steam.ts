import type { SteamWrapped } from '$lib/types/steam';

export default {
  year: 2025,
  username: 'unicorn',
  summary: {
    gamesPlayed: 29,
    gamesPlayedChange: 19,
    newGames: 12,
    achievementsUnlocked: 135,
    achievementsChange: 111,
    rareAchievements: 11,
    longestStreak: {
      days: 12,
      startDate: '2025-08-25',
      endDate: '2025-09-06',
      gamesPlayed: ['Counter-Strike 2', 'Rocket League®', 'Deadlock']
    },
    workshopSubscriptions: 6,
    newFriends: 1,
    badgesEarned: 1
  },
  inputMethods: {
    keyboardMouse: 77,
    controller: 23
  },
  comparison: {
    achievementsUnlocked: 135,
    steamMedianAchievements: 11,
    gamesPlayed: 29,
    steamMedianGames: 4,
    longestStreak: 12,
    steamMedianStreak: 6
  },
  releaseDistribution: {
    newReleases: 18,
    steamAverage: 14
  },
  topGames: [
    {
      name: 'Counter-Strike 2',
      playtimePercentage: 55,
      sessions: 143,
      dayStreak: 11,
      returnedMonth: 'February'
    },
    {
      name: 'Battlefield™ 6',
      playtimePercentage: 11,
      sessions: 31,
      dayStreak: 5,
      achievements: 23,
      firstPlayedYear: 2025
    },
    {
      name: 'Indiana Jones and the Great Circle',
      playtimePercentage: 6,
      sessions: 34,
      dayStreak: 5,
      achievements: 32,
      firstPlayedYear: 2025
    },
    {
      name: 'Tape to Tape',
      playtimePercentage: 6,
      sessions: 20,
      dayStreak: 6,
      achievements: 14,
      returnedMonth: 'February'
    },
    {
      name: 'Rocket League®',
      playtimePercentage: 5,
      sessions: 27,
      dayStreak: 3,
      returnedMonth: 'March'
    }
  ],
  platforms: {
    steamDeck: {
      games: 19,
      sessions: 82,
      playtimePercentage: 13,
      topGames: [
        { name: 'Indiana Jones and the Great Circle', percentage: 38 },
        { name: 'Tape to Tape', percentage: 34 },
        { name: 'The Binding of Isaac: Rebirth', percentage: 12 },
        { name: 'Dorfromantik', percentage: 6 },
        { name: 'Hogwarts Legacy', percentage: 3 }
      ]
    },
    controller: {
      games: 6,
      sessions: 29,
      playtimePercentage: 23,
      topGames: [
        { name: 'Rocket League®', percentage: 51 },
        { name: 'Tape to Tape', percentage: 12 },
        { name: 'Indiana Jones and the Great Circle', percentage: 12 },
        { name: 'Star Wars Outlaws', percentage: 11 },
        { name: 'Golf With Your Friends', percentage: 9 }
      ]
    }
  }
} as SteamWrapped;
