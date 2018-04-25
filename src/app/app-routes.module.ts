import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

const sampleRoutes: Routes = [
  { path: 'dash',  component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: '',   redirectTo: '/dash', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      sampleRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {}
