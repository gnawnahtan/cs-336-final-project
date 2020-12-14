export interface Department {
	title: string;
	code: string;
}

export interface Course {
	id: number;
	title: string;
	description: string;
	department: string;
}

export interface Rating {
	commendations: string[];
	concerns: string[];
	courseId: string;
	grade: number;
	professor: string;
	user: string;
}

export interface Professor {
	firstName: string;
	lastName: string;
	department: string;
}