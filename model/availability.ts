import {ContextualTimeRange} from './ContextualTimeRange';

export class Availability {
  Sunday: ContextualTimeRange;
  Monday: ContextualTimeRange;
  Tuesday: ContextualTimeRange;
  Wednesday: ContextualTimeRange;
  Thursday: ContextualTimeRange;
  Friday: ContextualTimeRange;
  Saturday: ContextualTimeRange;


  constructor(Sunday: ContextualTimeRange,
              Monday: ContextualTimeRange,
              Tuesday: ContextualTimeRange,
              Wednesday: ContextualTimeRange,
              Thursday: ContextualTimeRange,
              Friday: ContextualTimeRange,
              Saturday: ContextualTimeRange) {
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
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
      ContextualTimeRange.defaultTimeRange(),
    );
  }
}
