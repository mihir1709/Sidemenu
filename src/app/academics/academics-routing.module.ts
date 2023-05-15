import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicsPage } from './academics.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicsPageRoutingModule {}
