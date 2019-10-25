import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeNamePipe} from './employeeName.pipe';
import {FormsModule} from '@angular/forms';
import {BoostFactorPowerPipe} from './boostFactorPower.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { EmployeeComponent } from './employee/employee.component';
import { PowerCalculatorComponent } from './power-calculator/power-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    EmployeeComponent,
    EmployeeNamePipe,
    PowerCalculatorComponent,
    BoostFactorPowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
