import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {WebviewDirective} from './directives/';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../core/material/material.module';

@NgModule({
  declarations: [WebviewDirective],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MaterialModule
  ],
  exports: [TranslateModule, WebviewDirective, FormsModule]
})
export class SharedModule {
}
