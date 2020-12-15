import { Course, Department, Professor, Rating, User } from "./customInterfaces";

export class DataService {
	course: Course;
	department: Department;
	rating: Rating;
	professor: Professor;
	user: User;
	concerns: string[];
	commendations: string[];
}