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
  ngOnInit() {
    this.fetchedArray=this.db.getDetail();
    this.fArrayLen=this.db.getDetail().length;
    console.log(this.fArrayLen)
  }

  wFlag:boolean=false
  showTable:boolean=false

  studentDetail: Student[]
  resultsTBD:number;
  rTBD:number;
  fetchedArray;
  fArrayLen;
  getDetail(){
      // console.log(this.resultsTBD)
      // this.showTable=true
      if(this.resultsTBD){
        if(this.resultsTBD<=this.db.getDetail().length){
            this.showTable=true
            this.rTBD=this.resultsTBD
            // do{
            //   console.log(this.rTBD)
            //   if(this.fetchedArray[this.rTBD-1].marks==this.fetchedArray[this.rTBD].marks){
            //     this.wFlag=true
            //     this.rTBD++;
            //     // console.log(this.rTBD)
            //   }else{
            //     this.wFlag=false
            //   }
            // }while(this.wFlag)
            this.studentDetail=this.db.getDetail().slice(0,this.rTBD);
        }
        else{
            alert("Only "+(this.db.getDetail().length) +" Records there")
        }
        
      }else{
          this.showTable=true
          this.studentDetail=this.db.getDetail()
      }
  }

  showData(){
    this.getDetail()
  }
}
