import {Component, OnInit} from '@angular/core';
import {TimeRange} from '../../../model/TimeRange';
import {CsvDataService} from '../core/services/csv-data.service';
import {TimeRangeSelectorComponent} from '../core/components/time-range-selector/time-range-selector.component';

export class Employee {
  name: string;
  sunday: TimeRange = new TimeRange();
  monday: TimeRange = new TimeRange();
  tuesday: TimeRange = new TimeRange();
  wednesday: TimeRange = new TimeRange();
  thursday: TimeRange = new TimeRange();
  friday: TimeRange = new TimeRange();
  saturday: TimeRange = new TimeRange();
  totalHours: number = 0;

  parseTime(input: string): number {
    if (input === null || input === "") {
      return 0;
    }
    const strings = input.split(":");
    if (strings.length != 2) return 0;
    return (Number.parseInt(strings[0]) * 60) + Number.parseInt(strings[1])
  }

  calculateMinutesInRange(timeRange: TimeRange): number {
    if (timeRange === null || !timeRange.enabled || timeRange.startTime === null || timeRange.endTime === null) {
      return 0;
    }
    return this.parseTime(timeRange.endTime) - this.parseTime(timeRange.startTime);
  }

  calculate(): void {
    this.totalHours = 0;
    this.totalHours += this.calculateMinutesInRange(this.sunday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.monday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.tuesday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.wednesday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.thursday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.friday) / 60;
    this.totalHours += this.calculateMinutesInRange(this.saturday) / 60;
  }
}

export class Week {
  number: number;
  employees: Employee[];
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  employeeNames: string[] = [
    'Lisa'
  ]
  weekCount: number;
  schedule: Week[];
  shifts: TimeRange[] = [];

  constructor(private csvExportService: CsvDataService) {
  }

  ngOnInit(): void {
    this.weekCount = 4;
    this.schedule = [];
    for (let i = 0; i < this.weekCount; i++) {
      const week = new Week();
      week.employees = [];
      week.number = i + 1;
      for (let employeeName of this.employeeNames) {
        const employee = new Employee();
        employee.name = employeeName;
        week.employees.push(employee)
      }
      this.schedule.push(week)
    }
  }

  addEmployee(name: string): void {
    if (this.employeeNames.findIndex(value => value === name) === -1) {
      this.employeeNames.push(name);
      for (let week of this.schedule) {
        const employee = new Employee();
        employee.name = name;
        week.employees.push(employee);
      }
    }
  }

  exportToCsv() {
    const rows = [];

    for (let week of this.schedule) {
      rows.push(["Week " + week.number]);
      rows.push([
        "Employee",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Hours"
      ])
      for (let employee of week.employees) {
        rows.push([
          employee.name,
          ScheduleComponent.formatTimeRange(employee.sunday),
          ScheduleComponent.formatTimeRange(employee.monday),
          ScheduleComponent.formatTimeRange(employee.tuesday),
          ScheduleComponent.formatTimeRange(employee.wednesday),
          ScheduleComponent.formatTimeRange(employee.thursday),
          ScheduleComponent.formatTimeRange(employee.friday),
          ScheduleComponent.formatTimeRange(employee.saturday),
          employee.totalHours
        ])
      }
    }

    this.csvExportService.exportToCsv("schedule.csv", rows);
  }

  private static formatTimeRange(timeRange: TimeRange) {
    console.log(timeRange);
    if (timeRange === null || !timeRange.enabled || timeRange.startTime === null || timeRange.endTime === null) return "";
    return ScheduleComponent.timeToDisplay(timeRange.startTime)
      + " - " + ScheduleComponent.timeToDisplay(timeRange.endTime);
  }

  public static timeToDisplay(time: string): string {
    let strings = time.split(":");
    const hour = Number.parseInt(strings[0]);
    const minute = Number.parseInt(strings[1]);
    let formattedMinute = minute < 10 ? "0" + minute : minute;
    return hour <= 12
      ? hour + ":" + formattedMinute + " AM"
      : hour - 12 + ":" + formattedMinute + " PM"
  }
}
