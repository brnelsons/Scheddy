import {DayOfTheWeek} from './dayOfTheWeek';
import {IpcMainEvent} from 'electron';
import {Availability} from './availability';

export interface Employee {
  name: string,
  position: string,
  maxHoursPerWeek: number,
  minHoursPerWeek: number,
  availability: Map<DayOfTheWeek, Availability>,
}

export class EmployeeService {

  employees: Employee[];

  constructor(ipcMain: Electron.IpcMain) {
    this.employees = [
      {
        name: "tim",
        availability: new Map<DayOfTheWeek, Availability>(),
        maxHoursPerWeek: 24,
        minHoursPerWeek: 20,
        position: 'register dude'
      }
    ];
    ipcMain.handle('get-employees', () => {
      return this.getEmployees();
      // event.sender.send('get-employees', this.getEmployees());
    });
    ipcMain.handle('add-employee', (event: IpcMainEvent, args) => {
      this.addEmployee(args[0] as Employee);
      return args[0];
    });
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee): void {
    // TODO remove employee
  }

}
