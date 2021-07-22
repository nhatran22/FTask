import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Semester } from '../semester.model';
import { SemesterService } from '../semester.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-semester-form',
  templateUrl: './semester-form.component.html',
  styles: []
})
export class SemesterFormComponent implements OnInit {

  constructor(public service:SemesterService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  onSubmit(form:NgForm){
    this.service.postSemester().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','New Major Added');
      },
      err => {console.log(err); }
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Semester();
  }
}
