export class TimeRange {
  startTime: string;
  endTime: string;

  constructor(startTime: string, endTime: string) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public static defaultTimeRange(): TimeRange {
    return new TimeRange(
      '08:00',
      '20:00'
    );
  }
}
