import {DayOfTheWeek} from './dayOfTheWeek';
import {IpcMainEvent} from 'electron';

export interface Shift {
  dayOfTheWeek: DayOfTheWeek,
  startMinuteOfDay: number,
  endMinuteOfDay: number,
}

export class ShiftService {

  shifts: Shift[];

  constructor(ipcMain: Electron.IpcMain) {
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
