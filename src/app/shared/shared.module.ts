import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ToastrModule, HttpClientModule, ReactiveFormsModule],
  exports: [ToastrModule, HttpClientModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
