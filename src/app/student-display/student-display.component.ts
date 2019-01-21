import { Component, OnInit } from '@angular/core';
import { DbProviderService } from '../db-provider.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
  constructor(private db:DbProviderService) { }
  ngOnInit() {}

  studentDetail: Student[]
  resultsToBeDisplayed:number;
  getDetail(){
    this.studentDetail=this.db.getDetail().slice(0,this.resultsToBeDisplayed);
  }

  showData(){
    this.getDetail()
  }
}
