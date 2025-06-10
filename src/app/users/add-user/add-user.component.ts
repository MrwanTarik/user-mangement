import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(
    private _UsersService: UsersService,
    private toastr: ToastrService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  id: number = 0;
  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    if (this.id) {
      this.getSingleUser();
    }
  }
  addUserForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(120),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[0-9]{10,15}$/),
    ]),
    birthDate: new FormControl(null, [Validators.required]),
  });

  addUser(data: any) {
    this._UsersService.addUser(data.value).subscribe({
      next: (res) => {
        this.toastr.success('User has been added successfully');
        this.addUserForm.reset();
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }
  getSingleUser() {
    this._UsersService.getUserById(this.id).subscribe({
      next: (res) => {
        this.addUserForm.patchValue(res);
      },
    });
  }
}
