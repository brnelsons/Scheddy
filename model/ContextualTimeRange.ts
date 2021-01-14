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

export class ContextualTimeRange extends TimeRange {
  enabled: boolean;

  constructor(enabled: boolean, startTime: string, endTime: string) {
    super(startTime, endTime);
    this.enabled = enabled;
  }

  public static defaultTimeRange(): ContextualTimeRange {
    const timeRange = TimeRange.defaultTimeRange();
    return new ContextualTimeRange(
      false,
      timeRange.startTime,
      timeRange.endTime
    );
  }
}
