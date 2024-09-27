import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  http = inject(HttpClient);
  title = 'client';
  users:any;

  ngOnInit(): void {
    this.http.get("http://localhost:5294/api/users").subscribe({
      next: response=> this.users = response,
      error: error => console.error(error),
      complete: () => console.log('complete'),
    });
  }
}
