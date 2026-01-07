import type { SpotifyWrapped } from '$lib/types/spotify';

export default {
	totalSongs: 4641,
	totalAlbums: 118,
	totalArtists: 1779,
	minutesListened: 56532,
	listeningAge: 72,
	topGenre: 'New Wave',
	topGenres: [
		{ rank: 1, name: 'New Wave' },
		{ rank: 2, name: 'Indie Rock' },
		{ rank: 3, name: 'EDM' },
		{ rank: 4, name: 'Classic Rock' },
		{ rank: 5, name: 'Reggae' }
	],
	topArtists: [
		{ rank: 1, name: 'The Cure' },
		{ rank: 2, name: 'Charli xcx' },
		{ rank: 3, name: 'Led Zeppelin' },
		{ rank: 4, name: 'The Tragically Hip' },
		{ rank: 5, name: 'Dire Straits' }
	],
	topSongs: [
		{ rank: 1, title: 'What Was That' },
		{ rank: 2, title: 'Just like Heaven' },
		{ rank: 3, title: 'Von dutch' },
		{ rank: 4, title: 'Club classics' },
		{ rank: 5, title: 'Afraid To Feel' }
	],
	topAlbums: [
		{ rank: 1, title: 'In Rainbows', artist: 'Radiohead' },
		{ rank: 2, title: 'Dire Straits', artist: 'Dire Straits' },
		{
			rank: 3,
			title: "Brat and it's completely different but also still brat",
			artist: 'Charli xcx'
		},
		{ rank: 4, title: 'Charm', artist: 'Clairo' },
		{ rank: 5, title: 'An Awesome Wave', artist: 'alt-J' }
	]
} as SpotifyWrapped;
