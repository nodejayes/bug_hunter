import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import {TicketRoutingModule}   from './ticket-routing.module';

@NgModule({
  declarations: [TicketListComponent],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
