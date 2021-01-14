import {CrudStorage} from "./crudStorage";
import {IpcMainEvent} from "electron";
import {v4 as uuidv4} from 'uuid';
import {ScheduleTemplate} from "../model/scheduleTemplate";
import {Servlets} from "./servletConstants";

export class ScheduleTemplateServlet {

  store: CrudStorage<ScheduleTemplate>;

  constructor(storePath: string) {
    this.store = new CrudStorage<ScheduleTemplate>(storePath, 'schedule-templates');
    this.store.createIfNotExists();
  }

  public registerServlet(ipcMain: Electron.IpcMain): void {
    ipcMain.handle(
      Servlets.SCHEDULE_TEMPLATE_GET_ALL,
      () => {
        return this.store.getAll();
      });
    ipcMain.handle(
      Servlets.SCHEDULE_TEMPLATE_ADD,
      (event: IpcMainEvent, args) => {
        const employee = args[0] as ScheduleTemplate;
        employee.id = uuidv4();
        return this.store.add(employee);
      });
    ipcMain.handle(
      Servlets.SCHEDULE_TEMPLATE_UPDATE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.update(args[0] as ScheduleTemplate, ((me, other) => me.id === other.id));
      });
    ipcMain.handle(
      Servlets.SCHEDULE_TEMPLATE_REMOVE,
      (event: IpcMainEvent, args): Promise<boolean> => {
        return this.store.remove(args[0] as ScheduleTemplate);
      });
  }
}
