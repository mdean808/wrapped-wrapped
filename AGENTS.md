# AGENTS.md - Wrapped Wrapped

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

A SvelteKit 2 application using Svelte 5, Tailwind CSS v4, and TypeScript. The project aggregates
and displays "wrapped" style statistics from various services (Spotify, Discord, Claude, etc.).

**Tech Stack:**

- SvelteKit 2.49+ with Svelte 5.45+
- Tailwind CSS 4.1+ (via Vite plugin)
  - Note that there is no `tailwind.config.js` in Tailwind CSS 4+. Config is in `src/routes/layout.css`
- TypeScript 5.9+ (strict mode)
- Bun (package manager)

**Requirements:**

- Always use Tailwind CSS, unless better options are available, a task is impossible to do in Tailwind CSS, or instructed otherwise.

## Build & Development Commands

```bash
# Install dependencies
bun install

# Development server (http://localhost:5173)
bun run dev

# Production build
bun run build

# Preview production build
bun run preview

# Type checking
bun run check              # Run once
bun run check:watch        # Watch mode

# Formatting
bun run format             # Auto-fix formatting
bun run lint               # Check formatting (no fix)
```

**Note:** No test framework is currently configured.

## Svelte MCP Tools

When working with Svelte code, use these MCP tools:

### 1. list-sections

Use FIRST to discover available Svelte 5/SvelteKit documentation sections.

### 2. get-documentation

Fetch full documentation for specific sections. Analyze use_cases from list-sections to fetch ALL
relevant sections for the task.

### 3. svelte-autofixer

**REQUIRED:** Run this on ALL Svelte code before presenting to user. Keep calling until no issues
remain.

### 4. playground-link

Generate Svelte Playground links. Only use after user confirmation and NEVER if code was written
to project files.

## Code Style Guidelines

### Formatting (Prettier)

- **Indentation:** Spaces (not tabs)
- **Quotes:** Single quotes
- **Trailing commas:** None
- **Print width:** 100 characters
- **Semicolons:** Yes (default)

```typescript
// Correct
const name = 'wrapped-wrapped';
const config = {
  key: 'value',
  nested: {
    prop: true
  }
};

// Incorrect
const name = 'wrapped-wrapped';
const config = {
  key: 'value',
  nested: {
    prop: true
  }
};
```

### TypeScript Conventions

- **Strict mode enabled** - All code must pass strict type checking
- **checkJs enabled** - JavaScript files are also type-checked
- Use explicit types for function parameters and return values
- Prefer `interface` for object shapes, `type` for unions/intersections

```typescript
// Interfaces for object shapes
interface UserStats {
  name: string;
  count: number;
}

// Type aliases for unions
export type ContentBlock = TextContent | ThinkingContent;

// Explicit function signatures
function processStats(stats: UserStats[]): ProcessedResult {
  // ...
}
```

### Naming Conventions

| Element             | Convention                    | Example                                |
| ------------------- | ----------------------------- | -------------------------------------- |
| Files (components)  | PascalCase                    | `StatsCard.svelte`                     |
| Files (routes)      | +prefix                       | `+page.svelte`, `+layout.svelte`       |
| Files (types)       | lowercase                     | `spotify.ts`, `discord.ts`             |
| Interfaces/Types    | PascalCase with domain prefix | `SpotifyWrappedStats`, `ClaudeMessage` |
| Variables/Functions | camelCase                     | `totalSongs`, `processData`            |
| Constants           | camelCase or UPPER_SNAKE      | `apiEndpoint`, `MAX_RETRIES`           |
| CSS classes         | Tailwind utilities            | `flex items-center gap-4`              |

### Import Order

1. Svelte/SvelteKit imports
2. Third-party packages
3. Local aliases (`$lib/...`)
4. Relative imports
5. Type imports (at end, using `import type`)

```typescript
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { someUtil } from '$lib/utils';
	import LocalComponent from './LocalComponent.svelte';
	import type { UserStats } from '$lib/types/user';
</script>
```

## Svelte 5 Patterns

This project uses **Svelte 5 runes**. Do NOT use legacy Svelte 4 syntax.

### Props

```svelte
<script lang="ts">
  // Correct - Svelte 5
  let { children, title, count = 0 } = $props();

  // WRONG - Svelte 4 (do not use)
  // export let title;
</script>
```

### Reactivity

```svelte
<script lang="ts">
  // Reactive state
  let count = $state(0);

  // Derived values
  let doubled = $derived(count * 2);

  // Effects
  $effect(() => {
    console.log('Count changed:', count);
  });
</script>
```

### Snippets & Render

```svelte
<!-- Rendering children (replaces <slot>) -->
{@render children()}

<!-- Named snippets -->
{#snippet header()}
  <h1>Title</h1>
{/snippet}

{@render header()}
```

### Component Structure

```svelte
<script lang="ts">
  import './styles.css';
  import { someStore } from '$lib/stores';
  import type { ComponentProps } from '$lib/types';

  let { data, children } = $props<ComponentProps>();

  let localState = $state(initialValue);
  let derivedValue = $derived(/* computation */);
</script>

<svelte:head>
  <title>Page Title</title>
</svelte:head>

<main class="container mx-auto p-4">
  {@render children()}
</main>
```

## File Organization

```
src/
├── app.html              # HTML template
├── app.d.ts              # Global type declarations
├── lib/
│   ├── index.ts          # Library exports
│   ├── assets/           # Static assets (images, icons)
│   ├── types/            # TypeScript type definitions
│   │   ├── spotify.ts
│   │   ├── discord.ts
│   │   └── ...
│   └── parsed/           # Processed JSON data
├── routes/
│   ├── +layout.svelte    # Root layout
│   ├── +page.svelte      # Home page
│   └── [route]/          # Additional routes
└── data/
    └── raw/              # Raw source data
```

## Path Aliases

- `$lib` → `src/lib` (components, utilities, types)
- `$app` → SvelteKit app modules (stores, navigation, etc.)

## Error Handling

- Use TypeScript's strict null checks
- Handle loading/error states in components
- Use `unknown` type for catch blocks, then narrow

```typescript
try {
  await fetchData();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}
```

## Environment Variables

- Store in `.env` files (gitignored)
- Access via `$env/static/private` or `$env/dynamic/private`
- Public variables must be prefixed with `PUBLIC_`
