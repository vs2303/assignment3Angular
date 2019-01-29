import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message="LOading.."
  constructor(private user:UserService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data=>{
      this.message = data.message
    })
  }

}
