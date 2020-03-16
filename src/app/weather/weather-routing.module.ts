import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component'
import { DataResolverService } from './services/data.resolve.service';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Weather Atm' },
      resolve: {
        userdata: DataResolverService
      }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Settings', hide: true  }
      },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class WeatherRoutingModule { }
  