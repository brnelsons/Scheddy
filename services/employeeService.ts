import {DayOfTheWeek} from './dayOfTheWeek';
import {IpcMainEvent} from 'electron';
import {Availability} from './availability';
import {Employee} from './employee';

export class EmployeeService {

  employees: Employee[];

  constructor(ipcMain: Electron.IpcMain) {
    this.employees = [
      {
        firstName: "Tim",
        lastName: "Baker",
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
