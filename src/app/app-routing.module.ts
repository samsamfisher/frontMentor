import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoMasterComponent } from './info-master/info-master.component';
import { PlanComponent } from './plan/plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { FinishingComponent } from './finishing/finishing.component';

const routes: Routes = [
  { path: '', component: InfoMasterComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'addons', component: AddOnsComponent },
  { path: 'finishing', component: FinishingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
