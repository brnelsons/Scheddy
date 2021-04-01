import {Component, OnInit} from '@angular/core';
import {TimeRange} from '../../../model/TimeRange';
import {CsvDataService} from '../core/services/csv-data.service';
import {DayOfTheWeek} from "../../../model/dayOfTheWeek";

export class Employee {
  name: string;
  sunday: TimeRange = new TimeRange();
  monday: TimeRange = new TimeRange();
  tuesday: TimeRange = new TimeRange();
  wednesday: TimeRange = new TimeRange();
  thursday: TimeRange = new TimeRange();
  friday: TimeRange = new TimeRange();
  saturday: TimeRange = new TimeRange();
  totalHours = 0;

  parseTime(input: string): number {
    if (input === null || input === "") {
      return 0;
    }
    const strings = input.split(":");
    if (strings.length != 2) return 0;
    return (Number.parseInt(strings[0]) * 60) + Number.parseInt(strings[1]);
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
  ];
  weekCount: number;
  schedule: Week[];
  shifts: TimeRange[] = [];

  startingDay: DayOfTheWeek = 'Monday';
  days: DayOfTheWeek[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  constructor(private csvExportService: CsvDataService) {
  }

  ngOnInit(): void {
    this.weekCount = 4;
    this.schedule = [];
    for (let i = 0; i < this.weekCount; i++) {
      const week = new Week();
      week.employees = [];
      week.number = i + 1;
      for (const employeeName of this.employeeNames) {
        const employee = new Employee();
        employee.name = employeeName;
        week.employees.push(employee);
      }
      this.schedule.push(week);
    }
  }

  addEmployee(name: string): void {
    if (this.employeeNames.findIndex(value => value === name) === -1) {
      this.employeeNames.push(name);
      for (const week of this.schedule) {
        const employee = new Employee();
        employee.name = name;
        week.employees.push(employee);
      }
    }
  }

  exportToCsv(): void {
    const rows = [];

    for (const week of this.schedule) {
      rows.push(["Week " + week.number.toString()]);
      const headers = ["Employee"];
      for (const day of this.days) {
        headers.push(day.toString());
      }
      headers.push("Hours");
      rows.push(headers);
      for (const employee of week.employees) {
        const row = [employee.name];
        for (const day of this.days) {
          row.push(ScheduleComponent.formatTimeRange(employee[day.toLowerCase()]));
        }
        row.push(employee.totalHours.toString());
        rows.push(row);
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
    const strings = time.split(":");
    const hour = Number.parseInt(strings[0]);
    const minute = Number.parseInt(strings[1]);
    const formattedMinute = minute < 10 ? "0" + minute.toString() : minute;
    const formattedHour = hour <= 12 ? hour : hour - 12;
    const ampm = hour <= 12 ? 'AM' : 'PM';
    return `${formattedHour}:${formattedMinute} ${ampm}`;
  }
}
