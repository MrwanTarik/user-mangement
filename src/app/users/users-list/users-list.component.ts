import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(
    private _UsersService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._UsersService.usersList().subscribe({
      next: (res) => {
        this.users = res.users;
        console.log(this.users);
      },
    });
  }

  editUser(userId: number) {
    this.router.navigate(['/users/update-user', userId]);
  }

  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this._UsersService.deleteUser(userId).subscribe({
        next: (res) => {
          this.toastr.success('User deleted successfully');
          this.users = this.users.filter((user: any) => user.id !== userId);
        },
        error: (err) => {
          this.toastr.error('Failed to delete user');
          console.error('Delete error:', err);
        },
      });
    }
  }
}
