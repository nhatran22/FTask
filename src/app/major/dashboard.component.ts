import { Component, OnInit } from '@angular/core';
import { MajorService } from './major.service';
import { ToastrService } from 'ngx-toastr';
import { Major } from './major.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public service: MajorService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  onSubmit(form:NgForm){
    this.service.postMajor().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','New Major Added');
      },
      err => {console.log(err); }
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Major();
  }
}
