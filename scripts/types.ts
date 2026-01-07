export type ClaudeContentBlock = ClaudeTextContent | ClaudeThinkingContent;

interface ClaudeTextContent {
	start_timestamp: string;
	stop_timestamp: string;
	flags: null | unknown;
	type: 'text';
	text: string;
	citations: unknown[];
}

interface ClaudeThinkingContent {
	start_timestamp: string;
	stop_timestamp: string;
	flags: null | unknown;
	type: 'thinking';
	thinking: string;
	summaries: Array<{
		summary: string;
	}>;
	cut_off: boolean;
	alternative_display_type: null | unknown;
}

export interface ClaudeMessage {
	uuid: string;
	text: string;
	content: ClaudeContentBlock[];
	sender: 'human' | 'assistant';
	created_at: string;
	updated_at: string;
	attachments: unknown[];
	files: unknown[];
}

export interface ClaudeConversation {
	uuid: string;
	name: string;
	summary: string;
	created_at: string;
	updated_at: string;
	account: {
		uuid: string;
	};
	chat_messages: ClaudeMessage[];
}

export interface ClaudeProject {
	uuid: string;
	name: string;
	description: string;
	is_private: boolean;
	is_starter_project: boolean;
	prompt_template: string;
	created_at: string;
	updated_at: string;
	creator: {
		uuid: string;
		full_name: string;
	};
	docs: Array<{
		uuid: string;
		filename: string;
		content: string;
		created_at: string;
	}>;
}

interface ProjectMemories {
	[projectId: string]: string;
}

export interface ClaudeMemory {
	conversations_memory: string;
	project_memories: ProjectMemories;
	account_uuid: string;
}
