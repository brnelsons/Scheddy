import {DayOfTheWeek} from './dayOfTheWeek';
import {Employee} from './employeeService';
import {IpcMainEvent} from 'electron';

export interface Shift {
  dayOfTheWeek: DayOfTheWeek,
  startMinuteOfDay: Number,
  endMinuteOfDay: Number,
}

export class ShiftService {

  shifts: Shift[];

  constructor(ipcMain: Electron.IpcMain) {
    this.shifts = [];
    ipcMain.on('get-shifts', (event: IpcMainEvent, args) => {
      event.sender.send('get-shifts', this.getShifts());
    });
    ipcMain.on('add-shift', (event: IpcMainEvent, args) => {
      this.addShift(args[0] as Shift);
      event.sender.send('add-shift', 200);
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
