import {Availability} from './availability';
import {Role} from "./role";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  maxHoursPerWeek: number;
  minHoursPerWeek: number;
  availability: Availability;
}
