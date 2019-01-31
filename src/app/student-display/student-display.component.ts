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
  ngOnInit() {  }

  wFlag:boolean=false
  showTable:boolean=false

  studentDetail: Student[]
  resultsTBD:number;
  rTBD:number;
  fetchedArray;
  fArrayLen;
  getDetail(){
      if(this.resultsTBD>0){
        this.db.getDetailFromServer(this.resultsTBD).subscribe(data=>{  
                 if(data.success){
                this.showTable=true
                this.studentDetail = data.data
                console.log(data.data)
              }else{
                alert(data.data);
              }
            })
      }else{
        alert("Enter A valid number!!!")
      }
  }
  showData(){
    this.getDetail()
  }
}
