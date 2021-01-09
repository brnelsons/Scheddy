import {DayOfTheWeek} from './dayOfTheWeek';
import {Availability} from './availability';

export interface Employee {
  firstName: string,
  lastName: string,
  position: string,
  maxHoursPerWeek: number,
  minHoursPerWeek: number,
  availability: Map<DayOfTheWeek, Availability>,
}
