import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from'@angular/router' ;
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { EventListComponent } from './components/event-list/event-list.component';

const appRoutes: Routes= [
{path:'',component:EventComponent},
{path:'ticket',component:TicketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TicketComponent,
    EventCreateComponent,
    TicketCreateComponent,
    TicketListComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
