import { Component, OnInit } from '@angular/core';
import { DbProviderService } from '../db-provider.service'
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private db:DbProviderService,private fb:FormBuilder) { }

  studentForm: FormGroup;
  forCnt:number
  submitted = false;
  showForm:boolean=false
  hideBox:boolean=false
  ngOnInit() {
    /* Initiate the form structure */
    this.studentForm = this.fb.group({
      title: '',
      student_Details: this.fb.array([this.createNew()]),
    })
  }

  get f() { return this.studentForm.controls.student_Details}

  passValueToDb(){
    this.submitted = true;
        console.log(this.studentForm.controls.student_Details)
        // stop here if form is invalid
        if (this.studentForm.invalid) {
            return;
        }else{
          this.db.pushData(this.studentForm.value.student_Details).subscribe(data=>{
            if(data.success){
              alert(data.message)
            }
            else{
              alert(data.message)
            }
          })
        }
    console.log(this.studentForm.controls.student_Details)
  }
  

  get studentArray() {
    return this.studentForm.get('student_Details') as FormArray;
  }

  addSellingPoint() {
  
    if(this.studentForm.controls.title.value>0){
      this.showForm=true
      this.hideBox=true
    }else{
      alert("Enter number greater than 0")
    }
    
    this.forCnt = this.studentForm.value.title
    console.log(this.forCnt)
    for(let i=1;i<this.forCnt;i++){
      this.studentArray.push(this.createNew());
    }
  }

  deleteSellingPoint(index) {
    this.studentArray.removeAt(index);
  }

  createNew():FormGroup{
    return this.fb.group({
      name:['',Validators.required],
      marks:['',Validators.compose([Validators.required,Validators.max(100),Validators.min(0)])]
    })
  }

}
