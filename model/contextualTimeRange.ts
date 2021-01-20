import {TimeRange} from "./timeRange";

export class ContextualTimeRange extends TimeRange {
  enabled: boolean;

  constructor(enabled: boolean, startTime: string, endTime: string) {
    super(startTime, endTime);
    this.enabled = enabled;
  }

  public static defaultTimeRange(timeRangeEnabled = false): ContextualTimeRange {
    const timeRange = TimeRange.defaultTimeRange();
    return new ContextualTimeRange(
      timeRangeEnabled,
      timeRange.startTime,
      timeRange.endTime
    );
  }
}
