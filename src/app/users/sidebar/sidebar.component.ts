import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  firstName: string | null = localStorage.getItem('firstName');
  lastName: string | null = localStorage.getItem('lastName');
  userImage: string | null = localStorage.getItem('userImage');
  constructor(private router: Router) {}
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userImage');
    this.router.navigate(['/auth']);
  }
}
