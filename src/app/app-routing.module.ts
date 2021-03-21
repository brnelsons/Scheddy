import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeRoutingModule} from './home/home-routing.module';
// import {EmployeesComponent} from './employees/employees.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'employees',
  //   component: EmployeesComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'schedule',
    component: ScheduleComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/schedule',
    pathMatch: 'full'
  },
  {
    path: '*',
    redirectTo: '/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
