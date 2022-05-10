import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import * as fromLayout from './layout';

@NgModule({
  declarations: [
    ErrorPageComponent,
    ...fromLayout.components
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
