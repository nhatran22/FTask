import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor( public service: SubjectService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  onSubmit(form:NgForm){
    this.service.postSubject().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','New Subject Added');
      },
      err => {console.log(err);}
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Subject();
  }
}
