import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkflowListComponent } from './components/workflow-list/workflow-list.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'workflow-list', component: WorkflowListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
