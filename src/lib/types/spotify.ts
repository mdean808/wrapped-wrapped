interface GenreStat {
	rank: number;
	name: string;
}

interface ArtistStat {
	rank: number;
	name: string;
}

interface SongStat {
	rank: number;
	title: string;
}

interface AlbumStat {
	rank: number;
	title: string;
	artist: string;
}

export interface SpotifyWrapped {
	totalSongs: number;
	totalAlbums: number;
	totalArtists: number;
	minutesListened: number;
	listeningAge: number;
	topGenre: string;
	topGenres: GenreStat[];
	topArtists: ArtistStat[];
	topSongs: SongStat[];
	topAlbums: AlbumStat[];
}
