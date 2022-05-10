import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BlankPageComponent } from './layout/blank-page/blank-page.component';
import { FullPageComponent } from './layout/full-page/full-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [BlankPageComponent, FullPageComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
