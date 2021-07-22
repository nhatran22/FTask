import { Component, OnInit } from '@angular/core';
import { SubjectGroupService } from './subjectgroup.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { SubjectGroup } from './subjectgroup.model';

@Component({
  selector: 'app-subjectgroup',
  templateUrl: './subjectgroup.component.html',
  styleUrls: ['./subjectgroup.component.scss']
})
export class SubjectgroupComponent implements OnInit {

  constructor( public service: SubjectGroupService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  onSubmit(form:NgForm){
    this.service.postSubjectGroup().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','New Subject Group Added');
      },
      err => {console.log(err);}
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new SubjectGroup();
  }
}
