import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierRoutingModule } from './cashier-routing.module';
import { UiModule } from '../common/core/ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CashierRoutingModule,
    UiModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CashierModule { }
