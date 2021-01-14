import {CrudStorage} from "./crudStorage";
import {IpcMainEvent} from "electron";
import {v4 as uuidv4} from 'uuid';
import {EmployeeException} from "../model/employeeException";

export class EmployeeExceptionServlet {

  store: CrudStorage<EmployeeException>;

  constructor(storePath: string) {
    this.store = new CrudStorage<EmployeeException>(storePath, 'employee-exceptions');
    this.store.createIfNotExists();
  }

  public registerServlet(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(
      'get-employee-exceptions',
      () => {
        return this.store.getAll();
      });
    ipcMain.handle(
      'add-employee-exception',
      (event: IpcMainEvent, args) => {
        const employee = args[0] as EmployeeException;
        employee.id = uuidv4();
        return this.store.add(employee);
      });
    ipcMain.handle(
      'update-employee-exceptione',
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.update(args[0], ((me, other) => me.id === other.id));
      });
    ipcMain.handle(
      'remove-employee-exception',
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.remove(args[0]);
      });
  }
}
