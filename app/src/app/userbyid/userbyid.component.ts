import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userbyid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './userbyid.component.html',
  styleUrl: './userbyid.component.css'
})
export class UserbyidComponent implements OnInit {
  http = inject(HttpClient);
  id : string = '';
  users: any = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    if(this.id!=''){
      let x = document.getElementById('container');
      if (x) {
          x.style.visibility = 'visible';
      } 
      this.http.get(`https://black-light-assignment.vercel.app/${this.id}`).subscribe((users: any) => {
       
      this.users = users;

    });
      
    }
    
    else{
      // let d = document.getElementById('container');
      // if (d) {
      //     d.style.visibility = 'hidden';
      // }
      // Get the snackbar DIV

      var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      if(x!=null){
       x.className = "show";
       setTimeout(function(){ if(x!=null)x.className = x.className.replace("show", ""); }, 3000);
      }
    }
}
}
