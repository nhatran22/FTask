import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './major/dashboard.component';
import { HomeComponent } from './home/home.component';
import {SubjectgroupComponent} from './subjectgroup/subjectgroup.component';
import {SubjectComponent} from './subject/subject.component';
import {TopicComponent} from './topic/topic.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'subjectgroup', component: SubjectgroupComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'topic', component: TopicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
