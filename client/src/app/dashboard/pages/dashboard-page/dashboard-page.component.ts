import { Component, OnInit } from '@angular/core';
import {ProjectState}        from '../../../states/project';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(public projectState: ProjectState) { }

  ngOnInit() {
  }

}
