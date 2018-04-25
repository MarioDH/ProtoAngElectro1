import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

// Agregando las rutas
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
