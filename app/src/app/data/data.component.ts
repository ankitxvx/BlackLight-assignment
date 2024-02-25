import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  http = inject(HttpClient);
  users: any  = [];

  ngOnInit(): void {
      this.fetchData();
  }
  fetchData(){
    this.http.get('https://black-light-assignment.vercel.app/')
    .subscribe((users: any)=>{
        
       this.users = users;
    })
  }

 

  // Define trackByUID method for Angular's ngFor trackBy
  trackByUID(index: number, item: any): number {
    return item.UID;
  }






}
