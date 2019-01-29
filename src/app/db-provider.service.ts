import { Injectable } from '@angular/core';
import StudentInfo from './student-info'
import { Student } from './student';
import { HttpClient } from '@angular/common/http'


interface myData{
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class DbProviderService {

  constructor(private http:HttpClient) { }
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

  private loggedInStatus = false;
  setLoggedIn(value : boolean){
    this.loggedInStatus= value
    localStorage.setItem("loggedIn","true")
  }
  get isLoggedIn(){
    return this.loggedInStatus
  }

  
  getUserDetails(username,password){
    return this.http.post<myData>('/api/auth.php',{
      username,
      password
    })
    
  }
  
  
}
