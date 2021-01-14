import {IpcMainEvent} from 'electron';
import {Employee} from '../model/employee';
import {PersistenceService} from './persistence';

export class EmployeeServlet {

  persistence: PersistenceService<Employee[]>

  constructor(ipcMain: Electron.IpcMain,
              userDataPath: string) {
    this.persistence = new PersistenceService<Employee[]>(userDataPath, 'employees');
    if (!this.persistence.exists('employees')) {
      this.persistence.writeSync([])
    }
    ipcMain.handle('get-employees', () => {
      return this.getEmployees();
    });
    ipcMain.handle('add-employee', (event: IpcMainEvent, args) => {
      return this.addEmployee(args[0] as Employee);
    });
    ipcMain.handle('update-employee', (event: IpcMainEvent, args) => {
      return this.updateEmployee(args[0]);
    });
    ipcMain.handle('remove-employee', (event: IpcMainEvent, args): Promise<Employee[]> => {
      return this.removeEmployee(args[0]);
    });
  }

  public async getEmployees(): Promise<Employee[]> {
    return this.persistence.read();
  }

  public async addEmployee(employee: Employee): Promise<Employee> {
    let employees = await this.getEmployees();
    employee.id = employees.map(e => e.id).reduce((o: number, t: number) => Math.max(o, t), 0) + 1;
    employees.push(employee);
    this.persistence.writeSync(employees);
    return employee;
  }

  public async updateEmployee(employee: Employee): Promise<Employee> {
    let employees = await this.getEmployees();
    for (let e of employees) {
      if (e.id === employee.id) {
        e.firstName = employee.firstName;
        e.lastName = employee.lastName;
        e.position = employee.position;
        e.maxHoursPerWeek = employee.maxHoursPerWeek;
        e.minHoursPerWeek = employee.minHoursPerWeek;
        e.availability = employee.availability;
        this.persistence.writeSync(employees);
        return e;
      }
    }
    return null;
  }

  public async removeEmployee(employee: Employee): Promise<Employee[]> {
    let employees = await this.getEmployees();
    employees = employees.filter((e) => e.id !== employee.id);
    this.persistence.writeSync(employees);
    return employees;
  }

}
