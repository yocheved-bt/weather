import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CoreModule } from '../core/core.module'
import { WeatherRoutingModule } from './weather-routing.module'
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { DataResolverService } from './services/data.resolve.service';




@NgModule({
  declarations: [ContainerComponent,HeaderComponent, SettingsComponent, HomeComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    CoreModule
  ], 
  exports: [ContainerComponent],
  providers:[DataService, DataResolverService]

})
export class WeatherModule { }
