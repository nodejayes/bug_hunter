import {RouterModule, Routes} from '@angular/router';
import {NgModule}             from '@angular/core';
import {TicketListComponent}  from './pages/ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path: '',
    component: TicketListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {}
