 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
 
@Component({
  selector: 'app-last-week',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './last-week.component.html',
  styleUrl: './last-week.component.css',
})
export class LastWeekComponent implements OnInit {
  http = inject(HttpClient);
  country : string = '';
  users: any = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.http.get(`http://localhost:8000/lw/${this.country}`).subscribe((users: any) => {
      
      this.users = users;
      console.log(users);
    });
  }
}
