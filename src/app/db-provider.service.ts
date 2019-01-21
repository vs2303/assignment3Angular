import { Injectable } from '@angular/core';
import StudentInfo from './student-info'
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class DbProviderService {

  constructor() { }
  compare(a,b) {
    if (a.marks < b.marks)
      return -1;
    if (a.marks > b.marks)
      return 1;
    return 0;
  }

  getDetail():Student[]{
    return StudentInfo.sort(this.compare).reverse()
  }
  pushData(newData:Student[]){
    for(let i of newData){
      StudentInfo.push(i)
    }
    
  }

  
  
}
