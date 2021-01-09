import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ElectronService} from '../electron/electron.service';
import {Employee} from '../../../../../services/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private electronService: ElectronService) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.electronService.invoke('get-employees');
  }
}
