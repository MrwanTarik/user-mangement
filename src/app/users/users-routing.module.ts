import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { usersGuard } from '../core/guards/users.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [usersGuard],
    children: [
      { path: '', redirectTo: 'users-list', pathMatch: 'full' },
      { path: 'add', component: AddUserComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: 'update-user/:id', component: AddUserComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
