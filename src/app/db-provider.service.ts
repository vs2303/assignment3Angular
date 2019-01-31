import { Injectable } from '@angular/core';
import StudentInfo from './student-info'
import { Student } from './student';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


interface myData{
  success: boolean,
  message: string
}
interface DisplayData{
  data: Student[] | any,
  success:boolean
}
@Injectable({
  providedIn: 'root'
})
export class DbProviderService {

  constructor(private http:HttpClient) { }
  compareMarks(a:Student,b:Student) {

    
    if (+a.marks < +b.marks)
      return -1;
    if (+a.marks > +b.marks)
      return 1;
    return 0;
  }
  compareID(a,b){
    if (+a.id < +b.id)
      return -1;
    if (+a.id > +b.id)
      return 1;
    return 0;
  }

  fetchedArray:Student[]
  
  getDetailFromServer(data:number):Observable<DisplayData>{
    return this.http.post<DisplayData>('/api/studentrecord.php',{"limit":data});
  }
  pushData(newData:Student[]){
    return this.http.post<myData>('/api/insertrecord.php',newData);
  }

  private loggedInStatus = false;
  setLoggedIn(value : boolean){
    this.loggedInStatus= value
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
