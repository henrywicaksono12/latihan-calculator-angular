import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  res = 0;

  constructor(private appComponent:AppComponent) { }

  ngOnInit() {
    this.res = this.appComponent.getResult();
  }

}