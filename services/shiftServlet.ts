import {DayOfTheWeek} from '../model/dayOfTheWeek';
import {IpcMainEvent} from 'electron';

export interface Shift {
  dayOfTheWeek: DayOfTheWeek,
  startMinuteOfDay: number,
  endMinuteOfDay: number,
}

export class ShiftServlet {

  shifts: Shift[];

  constructor(private ipcMain: Electron.IpcMain,
              private userDataPath: string) {
    this.shifts = [];
    ipcMain.handle('get-shifts', (event: IpcMainEvent, args) => {
      return this.getShifts();
    });
    ipcMain.handle('add-shift', (event: IpcMainEvent, args) => {
      this.addShift(args[0] as Shift);
      return args[0];
    });
  }

  public getShifts(): Shift[] {
    return this.shifts;
  }

  public addShift(shift: Shift): void {
    this.shifts.push(shift);
  }

  public removeShift(shift: Shift): void {
    // TODO remove shift
  }

}
