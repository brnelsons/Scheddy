import {TimeRange} from './TimeRange';

export class Availability {
  Sunday: TimeRange;
  Monday: TimeRange;
  Tuesday: TimeRange;
  Wednesday: TimeRange;
  Thursday: TimeRange;
  Friday: TimeRange;
  Saturday: TimeRange;


  constructor() {
    this.Sunday = new TimeRange();
    this.Monday = new TimeRange();
    this.Tuesday = new TimeRange();
    this.Wednesday = new TimeRange();
    this.Thursday = new TimeRange();
    this.Friday = new TimeRange();
    this.Saturday = new TimeRange();
  }
}
