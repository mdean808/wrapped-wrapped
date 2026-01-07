import type { ClaudeConversation, ClaudeMemory, ClaudeProject } from './types';
import type { ClaudeWrapped } from '../src/lib/types/claude';

const YEAR = 2025;

async function parseClaudeData(): Promise<ClaudeWrapped> {
	const claudeConversations: ClaudeConversation[] = await Bun.file(
		'data/raw/claude/conversations.json'
	).json();
	const claudeMemories: ClaudeMemory[] = await Bun.file('data/raw/claude/memories.json').json();
	const claudeProjects: ClaudeProject[] = await Bun.file('data/raw/claude/projects.json').json();

	// Filter conversations to only include those from 2025
	const yearConversations = claudeConversations.filter((conv) => {
		const date = new Date(conv.created_at);
		return date.getFullYear() === YEAR;
	});

	// Filter projects to only include those from 2025
	const yearProjects = claudeProjects.filter((proj) => {
		const date = new Date(proj.created_at);
		return date.getFullYear() === YEAR;
	});

	// Count messages by sender
	let userMessages = 0;
	let assistantMessages = 0;
	let totalMessages = 0;

	for (const conv of yearConversations) {
		for (const msg of conv.chat_messages) {
			totalMessages++;
			if (msg.sender === 'human') {
				userMessages++;
			} else {
				assistantMessages++;
			}
		}
	}

	// Group conversations by month
	const conversationsByMonth = new Map<string, number>();
	const messagesByMonth = new Map<string, number>();

	for (const conv of yearConversations) {
		const date = new Date(conv.created_at);
		const monthKey = date.toLocaleString('en-US', { month: 'short' });

		conversationsByMonth.set(monthKey, (conversationsByMonth.get(monthKey) || 0) + 1);

		for (const msg of conv.chat_messages) {
			const msgDate = new Date(msg.created_at);
			const msgMonthKey = msgDate.toLocaleString('en-US', { month: 'short' });
			messagesByMonth.set(msgMonthKey, (messagesByMonth.get(msgMonthKey) || 0) + 1);
		}
	}

	// Convert maps to arrays sorted by month order
	const monthOrder = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const conversationsByMonthArray = monthOrder
		.filter((month) => conversationsByMonth.has(month))
		.map((month) => ({ month, count: conversationsByMonth.get(month)! }));

	const messagesByMonthArray = monthOrder
		.filter((month) => messagesByMonth.has(month))
		.map((month) => ({ month, count: messagesByMonth.get(month)! }));

	// Find busiest day
	const conversationsByDay = new Map<string, number>();
	for (const conv of yearConversations) {
		const date = new Date(conv.created_at);
		const dayKey = date.toISOString().split('T')[0];
		conversationsByDay.set(dayKey, (conversationsByDay.get(dayKey) || 0) + 1);
	}

	let busiestDay = { date: '', conversations: 0 };
	for (const [date, count] of conversationsByDay) {
		if (count > busiestDay.conversations) {
			busiestDay = { date, conversations: count };
		}
	}

	// Find longest conversation
	let longestConversation = { name: '', messageCount: 0 };
	for (const conv of yearConversations) {
		if (conv.chat_messages.length > longestConversation.messageCount) {
			longestConversation = {
				name: conv.name || 'Untitled',
				messageCount: conv.chat_messages.length
			};
		}
	}

	// Count project docs
	const totalProjectDocs = yearProjects.reduce((sum, proj) => sum + proj.docs.length, 0);

	// Count memories (project_memories entries)
	const totalMemories = claudeMemories.reduce((sum, mem) => {
		return sum + Object.keys(mem.project_memories).length + (mem.conversations_memory ? 1 : 0);
	}, 0);

	// Calculate average messages per conversation
	const averageMessagesPerConversation =
		yearConversations.length > 0
			? Math.round((totalMessages / yearConversations.length) * 10) / 10
			: 0;

	return {
		year: YEAR,
		totalConversations: yearConversations.length,
		totalMessages,
		userMessages,
		assistantMessages,
		totalProjects: yearProjects.length,
		totalProjectDocs,
		totalMemories,
		conversationsByMonth: conversationsByMonthArray,
		messagesByMonth: messagesByMonthArray,
		busiestDay,
		averageMessagesPerConversation,
		longestConversation
	};
}

async function main() {
	const wrapped = await parseClaudeData();

	const output = `import type { ClaudeWrapped } from '$lib/types/claude';

export default ${JSON.stringify(wrapped, null, '\t')} as ClaudeWrapped;
`;

	await Bun.write('src/lib/parsed/claude.ts', output);
	console.log('Claude wrapped data written to src/lib/parsed/claude.ts');
}

main();
