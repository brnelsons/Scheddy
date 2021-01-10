import {MinuteOfDayRange} from './minuteOfDayRange';
import {DayOfTheWeek} from './dayOfTheWeek';

export interface Availability {
  availableRanges: Map<DayOfTheWeek, MinuteOfDayRange[]>;
}
