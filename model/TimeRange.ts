export class TimeRange {
  enabled: boolean;
  startTime: string;
  endTime: string;

  constructor(enabled: boolean, startTime: string, endTime: string) {
    this.enabled = enabled;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public static defaultTimeRange(): TimeRange {
    return new TimeRange(
      false,
      '08:00',
      '20:00'
    );
  }
}
