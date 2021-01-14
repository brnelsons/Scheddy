import {IpcMainEvent} from 'electron';
import {Employee} from '../model/employee';
import {v4 as uuidv4} from 'uuid';
import {CrudStorage} from "./crudStorage";
import {Servlets} from "./servletConstants";

export class EmployeeServlet {

  store: CrudStorage<Employee>;

  constructor(storePath: string) {
    this.store = new CrudStorage<Employee>(storePath, 'employees');
    this.store.createIfNotExists();
  }

  public registerServlet(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(
      Servlets.EMPLOYEE_GET_ALL,
      () => {
        return this.store.getAll();
      });
    ipcMain.handle(
      Servlets.EMPLOYEE_ADD,
      (event: IpcMainEvent, args) => {
        const employee = args[0] as Employee;
        employee.id = uuidv4();
        return this.store.add(employee);
      });
    ipcMain.handle(
      Servlets.EMPLOYEE_UPDATE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.update(args[0] as Employee, ((me, other) => me.id === other.id));
      });
    ipcMain.handle(
      Servlets.EMPLOYEE_REMOVE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.remove(args[0] as Employee);
      });
  }
}
