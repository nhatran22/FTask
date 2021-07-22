import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Topic } from './topic.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor( public service:TopicService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  onSubmit(form:NgForm){
    this.service.postTopic().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted Successfully','New Topic Added');
      },
      err => {console.log(err);}
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Topic();
  }
}
