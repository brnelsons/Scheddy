import {IpcMainEvent} from 'electron';
import {Availability} from './availability';
import {Employee} from './employee';

export class EmployeeService {

  count: number = 0;
  employees: Employee[];

  constructor(ipcMain: Electron.IpcMain) {
    let employeeId: number = this.count++;
    this.employees = [
      {
        id: employeeId,
        firstName: "Tim",
        lastName: "Baker",
        availability: new Availability(),
        maxHoursPerWeek: 24,
        minHoursPerWeek: 20,
        position: 'register dude'
      }
    ];
    ipcMain.handle('get-employees', () => {
      return this.getEmployees();
    });
    ipcMain.handle('add-employee', (event: IpcMainEvent, args) => {
      return this.addEmployee(args[0] as Employee);
    });
    ipcMain.handle('update-employee', (event: IpcMainEvent, args) => {
      return this.updateEmployee(args[0]);
    });
    ipcMain.handle('remove-employee', (event: IpcMainEvent, args) => {
      this.removeEmployee(args[0])
      return args[0];
    });
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }

  public addEmployee(employee: Employee): Employee {
    employee.id = this.count++;
    this.employees.push(employee);
    return employee;
  }

  public updateEmployee(employee: Employee): Employee {
    for (let e of this.employees) {
      if (e.id === employee.id) {
        e.firstName = employee.firstName;
        e.lastName = employee.lastName;
        e.position = employee.position;
        e.maxHoursPerWeek = employee.maxHoursPerWeek;
        e.minHoursPerWeek = employee.minHoursPerWeek;
        e.availability = employee.availability;
        return e;
      }
    }
    return null;
  }

  public removeEmployee(employee: Employee): void {
    this.employees = this.employees.filter((e) => e.id !== employee.id);
  }

}
