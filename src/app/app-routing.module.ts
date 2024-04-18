import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'adduser', component: UserFormComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'animals', component: AnimalListComponent},
  { path: 'addanimals', component: AnimalFormComponent},
  { path: 'animals/:id', component: AnimalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
