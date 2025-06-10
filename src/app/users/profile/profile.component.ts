import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _UsersService: UsersService,
    private toastr: ToastrService
  ) {}
  userImage = localStorage.getItem('userImage');
  profileForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    age: new FormControl(null),
    phone: new FormControl(null),
    birthDate: new FormControl(null),
  });

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this._UsersService.getCurrentUser().subscribe({
      next: (userData) => {
        this.profileForm.patchValue(userData);
      },
      error: (err) => {
        this.toastr.error('Failed to load profile data');
      },
    });
  }
}
