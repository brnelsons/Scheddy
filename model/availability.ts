import {TimeRange} from './TimeRange';

export class Availability {
  Sunday: TimeRange;
  Monday: TimeRange;
  Tuesday: TimeRange;
  Wednesday: TimeRange;
  Thursday: TimeRange;
  Friday: TimeRange;
  Saturday: TimeRange;


  constructor(Sunday: TimeRange,
              Monday: TimeRange,
              Tuesday: TimeRange,
              Wednesday: TimeRange,
              Thursday: TimeRange,
              Friday: TimeRange,
              Saturday: TimeRange) {
    this.Sunday = Sunday;
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thursday;
    this.Friday = Friday;
    this.Saturday = Saturday;
  }

  public static defaultAvailability(): Availability {
    return new Availability(
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
      TimeRange.defaultTimeRange(),
    );
  }
}
