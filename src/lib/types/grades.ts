export interface GradesWrapped {
	year4_2025: Array<Class>;
	year5_2025: Array<Class>;
}

interface Class {
	class: string;
	grade: number;
}
