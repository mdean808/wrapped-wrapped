export interface DiscordWrapped {
  messagesSent: number;
  hoursInVoice: number;
  emojiUsed: number;
  favoriteEmoji: {
    emoji: string;
    name: string;
  };
  mostPlayedGame: string;
  topServer: string;
}
