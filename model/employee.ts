import {Availability} from './availability';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  maxHoursPerWeek: number;
  minHoursPerWeek: number;
  availability: Availability;
}
