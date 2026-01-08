<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { ClaudeWrapped } from '$lib/types/claude';

  interface Props {
    active: boolean;
    data: ClaudeWrapped;
  }

  let { active, data }: Props = $props();

  // Calculate max for bar chart scaling
  const maxConversations = $derived(Math.max(...data.conversationsByMonth.map((m) => m.count)));
</script>

{#if active}
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-800 p-8"
    transition:fade={{ duration: 300 }}
  >
    <h1 class="mb-8 text-5xl font-bold text-claude-primary" in:fly={{ y: -30, duration: 500 }}>
      asking the homie claude for help
    </h1>
    <h2 class="mb-8 text-xl font-bold text-pastel-blue" in:fade={{ duration: 400, delay: 200 }}>
      (i pay $200 a year for this shit)
    </h2>

    <div class="flex items-start gap-16">
      <div class="flex flex-col gap-4" in:fly={{ x: -50, duration: 500, delay: 300 }}>
        <div
          class="rounded-2xl bg-gradient-to-br from-claude-primary to-claude-secondary px-12 py-8 text-center"
        >
          <span class="block text-7xl font-bold text-white"
            >{data.totalConversations.toLocaleString()}</span
          >
          <span class="text-base text-white/85 uppercase">Conversations</span>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-1 rounded-lg border border-claude-border bg-claude-bg px-6 py-4 text-center"
          >
            <span class="block text-xl font-bold text-claude-primary"
              >{data.totalMessages.toLocaleString()}</span
            >
            <span class="text-xs text-neutral-400">Total Messages</span>
          </div>
          <div
            class="flex-1 rounded-lg border border-claude-border bg-claude-bg px-6 py-4 text-center"
          >
            <span class="block text-xl font-bold text-claude-primary"
              >{data.averageMessagesPerConversation}</span
            >
            <span class="text-xs text-neutral-400">Avg per Chat</span>
          </div>
        </div>
        <div
          class="flex items-center justify-center gap-4 rounded-lg border border-claude-border bg-claude-bg py-3"
        >
          <div class="text-center">
            <span class="block text-base font-bold text-claude-primary"
              >{data.userMessages.toLocaleString()}</span
            >
            <span class="text-[0.7rem] text-neutral-500">from me</span>
          </div>
          <div class="h-8 w-px bg-claude-primary/20"></div>
          <div class="text-center">
            <span class="block text-base font-bold text-claude-primary"
              >{data.assistantMessages.toLocaleString()}</span
            >
            <span class="text-[0.7rem] text-neutral-500">from Claude</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6" in:fly={{ x: 50, duration: 500, delay: 400 }}>
        <div>
          <h3 class="mb-3 text-sm font-semibold text-neutral-200">Conversations by Month</h3>
          <div
            class="flex h-24 items-end gap-1.5 rounded-lg border border-claude-border bg-claude-bg p-2"
          >
            {#each data.conversationsByMonth as month (month.month)}
              <div class="flex h-full flex-1 flex-col items-center">
                <div
                  class="mt-auto min-h-1 w-full max-w-6 rounded-t bg-gradient-to-b from-claude-primary to-claude-secondary transition-[height] duration-300"
                  style="height: {(month.count / maxConversations) * 100}%"
                  title="{month.month}: {month.count}"
                ></div>
                <span class="mt-1 text-[0.6rem] text-neutral-500">{month.month}</span>
              </div>
            {/each}
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex-1 rounded-lg border border-claude-border bg-claude-bg px-4 py-3">
            <span class="mb-1 block text-[0.7rem] text-neutral-500 uppercase">Busiest Day</span>
            <span class="block text-base font-bold text-claude-primary">{data.busiestDay.date}</span
            >
            <span class="mt-1 block text-xs text-neutral-400"
              >{data.busiestDay.conversations} conversations</span
            >
          </div>
          <div class="flex-1 rounded-lg border border-claude-border bg-claude-bg px-4 py-3">
            <span class="mb-1 block text-[0.7rem] text-neutral-500 uppercase">Longest Chat</span>
            <span class="block text-base font-bold text-claude-primary"
              >{data.longestConversation.messageCount} messages</span
            >
            <span class="mt-1 block text-xs text-neutral-400" title={data.longestConversation.name}>
              {data.longestConversation.name}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-8 flex items-center gap-3 text-sm text-neutral-400"
      in:fade={{ duration: 400, delay: 600 }}
    >
      <span>{data.totalProjects} projects</span>
      <span class="h-1 w-1 rounded-full bg-claude-primary"></span>
      <span>{data.totalProjectDocs} docs</span>
      <span class="h-1 w-1 rounded-full bg-claude-primary"></span>
      <span>{data.totalMemories} memories</span>
    </div>
  </div>
{/if}
