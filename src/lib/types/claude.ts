export interface ClaudeWrapped {
	year: number;
	totalConversations: number;
	totalMessages: number;
	userMessages: number;
	assistantMessages: number;
	totalProjects: number;
	totalProjectDocs: number;
	totalMemories: number;
	conversationsByMonth: MonthlyCount[];
	messagesByMonth: MonthlyCount[];
	busiestDay: {
		date: string;
		conversations: number;
	};
	averageMessagesPerConversation: number;
	longestConversation: {
		name: string;
		messageCount: number;
	};
}

interface MonthlyCount {
	month: string;
	count: number;
}
