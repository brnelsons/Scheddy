import {CrudStorage} from "./crudStorage";
import {IpcMainEvent} from "electron";
import {v4 as uuidv4} from 'uuid';
import {Servlets} from "./servletConstants";
import {Schedule} from "../model/schedule";

export class ScheduleServlet {

  store: CrudStorage<Schedule>;

  constructor(storePath: string) {
    this.store = new CrudStorage<Schedule>(storePath, 'schedules');
    this.store.createIfNotExists();
  }

  public registerServlet(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(
      Servlets.SCHEDULE_GET_ALL,
      () => {
        return this.store.getAll();
      });
    ipcMain.handle(
      Servlets.SCHEDULE_ADD,
      (event: IpcMainEvent, args) => {
        const employee = args[0] as Schedule;
        employee.id = uuidv4();
        return this.store.add(employee);
      });
    ipcMain.handle(
      Servlets.SCHEDULE_UPDATE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.update(args[0] as Schedule, ((me, other) => me.id === other.id));
      });
    ipcMain.handle(
      Servlets.SCHEDULE_REMOVE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.remove(args[0] as Schedule);
      });
  }
}
