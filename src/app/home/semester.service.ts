import { Injectable } from '@angular/core';
import { Semester } from './semester.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

var t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTYyOTYwMjQxMiwiaXNzIjoiRlRhc2sgQVBJIiwiYXVkIjoiTW9iaWxlIEFwcCBhbmQgV2ViIEFkbWluIn0.H66TZXhG54yolbbZGad5dmnlM0AV5XtBUriE3VfGvFw';
var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);
const httpOptions = {
  headers: headers_object
};
@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private http:HttpClient) { }

  formData:Semester = new Semester();
  list: Semester[];
  readonly baseURL = 'http://localhost:3955/api/v1/semesters'

  postSemester(){
    return this.http.post(this.baseURL,this.formData,httpOptions);
  }
  // getSemester(){
  //   return this.http.get(this.baseURL,this.list,httpOptions);
  // }
  getList(){
    this.http.get(this.baseURL,httpOptions).toPromise().then(res => this.list = res as Semester[]);
  }
}
