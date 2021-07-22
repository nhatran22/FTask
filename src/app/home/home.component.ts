import { Component, OnInit } from '@angular/core';
import { Semester } from './semester.model';
import { SemesterService } from './semester.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service: SemesterService) { }

  ngOnInit(): void {
    this.service.getList();
  }
  populateForm(selectedRecord:Semester){
    this.service.formData = Object.assign({},selectedRecord);
  }
}
