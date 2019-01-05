import {RouterModule, Routes}  from '@angular/router';
import {NgModule}              from '@angular/core';
import {MainSettingsComponent} from './pages/main-settings/main-settings.component';

const routes: Routes = [
  {
    path: '',
    component: MainSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
